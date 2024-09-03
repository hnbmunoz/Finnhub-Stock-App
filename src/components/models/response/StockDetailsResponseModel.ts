export interface StockDetailsResponseModel {
  country: string,
  currency: string,
  estimateCurrency: string,
  exchange: string,
  finnhubIndustry: string,
  ipo: string,
  logo: string,
  marketCapitalization: 0,
  name: string,
  phone: string,
  shareOutstanding: number,
  ticker: string,
  weburl: string
}

export const STOCK_DETAILS_RESPONSE_MODEL_DEFAULT : StockDetailsResponseModel = {
  country: "",
  currency: "",
  estimateCurrency: "",
  exchange: "",
  finnhubIndustry: "",
  ipo: "",
  logo: "",
  marketCapitalization: 0,
  name: "",
  phone: "",
  shareOutstanding: 0,
  ticker: "",
  weburl: ""
}