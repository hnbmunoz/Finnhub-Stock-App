import axios from "axios";

//Get Finnhub stocks

// * Searches best stock matches based on a user's query
export function SearchBySymbol(stockSymbol: string) {
  return axios.get<Array<any>>(`${import.meta.env.VITE_FINNHUB_BASE_PATH}/search?q=${stockSymbol}&token=${import.meta.env.VITE_FINNHUB_API_KEY}`);
};

// * Fetches the details of a given company
export const GetStockDetails = async (stockSymbol: string) => {
  const url = `${import.meta.env.VITE_FINNHUB_BASE_PATH}/stock/profile2?symbol=${stockSymbol}&token=${import.meta.env.VITE_FINNHUB_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

// Fetches the latest quote of a given stock
export const GetLatestQuote = async (stockSymbol: string) => {
  const url = `${import.meta.env.VITE_FINNHUB_BASE_PATH}/quote?symbol=${stockSymbol}&token=${import.meta.env.VITE_FINNHUB_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const GetCompanyNews = async (stockSymbol: string, dateFrom: any, dateTo: any) => {
  const url = `${import.meta.env.VITE_FINNHUB_BASE_PATH}/company-news?symbol=${stockSymbol}&from=${dateFrom}&to=${dateTo}&token=${import.meta.env.VITE_FINNHUB_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};



