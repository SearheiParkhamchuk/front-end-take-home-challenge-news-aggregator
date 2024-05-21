import { XMLParser as FastXmlParser } from 'fast-xml-parser'

export class XMLParser {
  private readonly parser = new FastXmlParser({ ignoreAttributes: false })

  parse(xmlData: string | Buffer) {
    return this.parser.parse(xmlData)
  }
}
