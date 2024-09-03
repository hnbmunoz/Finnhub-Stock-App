import { createSlice } from '@reduxjs/toolkit';
import { STOCK_DETAILS_RESPONSE_MODEL_DEFAULT } from '../components/models/response/StockDetailsResponseModel';

const stockDetailsSlice = createSlice({
  name: 'STOCK_DETAILS',
  initialState: STOCK_DETAILS_RESPONSE_MODEL_DEFAULT,
  reducers: {    
    updateDetails: (_: any, action) => {
      return action.payload; 
    },
  },
});

export const { updateDetails } = stockDetailsSlice.actions;

export default stockDetailsSlice.reducer;