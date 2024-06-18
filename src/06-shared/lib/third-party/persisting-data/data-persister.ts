'use client';
import { type ZodObject, type ZodRawShape } from 'zod';
import { create } from 'zustand';
import { type StorageValue, persist } from 'zustand/middleware';

type Return<T> = [T, (val: T | ((prevState: T) => T)) => void];
type Storage<S> = { state: S; setState: (newState: S | ((prevState: S) => S)) => void };

export function useDataPersister<S extends object>({
  key,
  schema,
  defaultState,
}: {
  key: string;
  schema: ZodObject<ZodRawShape>;
  defaultState: S;
}): Return<S> {
  const store = create<Storage<S>>()(
    persist(
      (set, get) => ({
        state: defaultState,
        setState: (newState: S | ((prevState: S) => S)): void => {
          const oldState = get().state;
          const result = typeof newState === 'function' ? newState(oldState) : newState;
          set({ state: result });
        },
      }),
      {
        name: key,
        storage: {
          // @ts-ignore
          // causes the whole state to be returned, even if it is a method
          getItem: (name: string) => {
            const value = localStorage.getItem(name);
            if (!value) return { state: { state: defaultState } };

            try {
              const rawSate = JSON.parse(value);
              const result = schema.parse(rawSate);
              return { state: { state: result } };
            } catch {
              return { state: { state: defaultState } };
            }
          },
          setItem: (name: string, value: StorageValue<Storage<S>>): void => {
            localStorage.setItem(name, JSON.stringify(value.state.state));
          },
          removeItem: (name: string): void => {
            localStorage.removeItem(name);
          },
        },
      },
    ),
  );

  const state = store((store) => store.state);
  const setState = store((store) => store.setState);

  return [state, setState] as const;
}
