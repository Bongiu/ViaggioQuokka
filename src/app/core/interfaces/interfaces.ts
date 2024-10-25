export enum UrlEnum {
    HOME = '/',
    ABOUT = 'about-us',
    CONTACTUS = 'contact-us'
}

export enum KeywordEnum {
    COUNTRIES = 'countries',
    TEMPLES = 'temples',
    BEACHES = 'beaches'
}
// interfacce per tipizzare la response
export interface RespDestinationI {
    countries: Country[]
    temples: Temple[]
    beaches: Beach[]
  }
  
  export interface Country {
    id: number
    name: string
    cities: City[]
  }
  
  export interface City {
    name: string
    imageUrl: string
    description: string
  }
  
  export interface Temple {
    id: number
    name: string
    imageUrl: string
    description: string
  }
  
  export interface Beach {
    id: number
    name: string
    imageUrl: string
    description: string
  }
  