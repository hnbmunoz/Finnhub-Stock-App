export interface StockQuoteResponseModel {
  c: number,
  d: number,
  dp: number,
  h: number,
  l: number,
  o: number,
  pc: number,
  t: number
}

export const STOCK_QUOTE_RESPONSE_MODEL_DEFAULT: StockQuoteResponseModel = {
  c: 0,
  d: 0,
  dp: 0,
  h: 0,
  l: 0,
  o: 0,
  pc: 0,
  t: 0
}