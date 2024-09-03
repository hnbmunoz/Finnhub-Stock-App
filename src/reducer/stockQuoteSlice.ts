import { createSlice } from '@reduxjs/toolkit';
import { STOCK_QUOTE_RESPONSE_MODEL_DEFAULT } from '../components/models/response/StockQuoteResponseModel';

const stockQuoteSlice = createSlice({
  name: 'STOCK_QUOTE',
  initialState: STOCK_QUOTE_RESPONSE_MODEL_DEFAULT,
  
  reducers: {
    updateQuote: (_: any, action) => {
      return action.payload; 
    },
  },
});

export const { updateQuote } = stockQuoteSlice.actions;

export default stockQuoteSlice.reducer;