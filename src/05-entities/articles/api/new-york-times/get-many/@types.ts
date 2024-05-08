type Multimedia = {
  credit: string
  crop_name: string
  height: string
  legacy: {
    xlarge: string
    xlargeheight: string
    xlargewidth: string
  }
  rank: string
  subtype: string
  type: string
  url: string
  width: string
}

type Headline = {
  content_kicker: string
  kicker: string
  main: string
  name: string
  print_headline: string
  seo: string
  sub: string
}

export type QuerySuccess = {
  copyright: string
  response: {
    docs: Array<{
      _id: string
      abstract: string
      document_type: 'article' | 'multimedia'
      headline: Headline
      lead_paragraph: string
      multimedia: Multimedia[]
      news_desk: string
      print_page: string
      print_section: string
      pub_date: string
      section_name: string
      snippet: string
      source: string
      uri: string
      web_url: string
    }>
    meta: {
      hits: number
      offset: number
      time: number
    }
  }
  status: string
}

export type QueryError = {
  message: string
}

export type QueryParams = {
  page?: string
  pageSize?: number
  query?: string
}
