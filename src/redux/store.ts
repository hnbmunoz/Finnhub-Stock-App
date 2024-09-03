import { configureStore } from '@reduxjs/toolkit';
import stockDetailsSlice from '../reducer/stockDetailsSlice';
import stockQuoteSlice from '../reducer/stockQuoteSlice';
import stockNewsSlice from '../reducer/stockNewsSlice';
import selectedStockSlice from '../reducer/selectedStockSlice';

const store = configureStore({
  reducer: {
    stockDtl: stockDetailsSlice,
    stockQuote: stockQuoteSlice,
    stockNws: stockNewsSlice,
    selectedStocks: selectedStockSlice
  },
});

export default store;