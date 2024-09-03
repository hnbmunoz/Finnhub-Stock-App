export interface StockNewsResponseModel {
  
    category: string,
    datetime: number, // timstamp
    headline: string,
    id: number,
    image: string,
    related: string, //Symbol
    source: string,
    summary: string,
    url: string

}

export const STOCK_NEWS_RESPONSE_MODEL_DEFAULT: StockNewsResponseModel[] = [{
  category: "",
  datetime: 0, // timstamp
  headline: "",
  id: 0,
  image: "",
  related: "", //Symbol
  source: "",
  summary: "",
  url: ""
}]