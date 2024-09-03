import { createSlice } from '@reduxjs/toolkit';
import { STOCK_NEWS_RESPONSE_MODEL_DEFAULT } from '../components/models/response/StockNewsResponseModel';

const stockNewSlice = createSlice({
  name: 'STOCK_NEWS',
  initialState: STOCK_NEWS_RESPONSE_MODEL_DEFAULT,
  reducers: {
    updateNews: (_: any, action) => {
      return action.payload; 
    },
  },
});

export const { updateNews } = stockNewSlice.actions;

export default stockNewSlice.reducer;