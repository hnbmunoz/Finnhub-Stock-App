import { createSlice } from '@reduxjs/toolkit';

const selectedStocksSlice = createSlice({
  name: 'SELECTED_STOCKS',
  initialState: {value: null, label: null},
  reducers: {    
    updateSelection: (_: any, action) => {
      return action.payload; 
    },
  },
});

export const { updateSelection } = selectedStocksSlice.actions;

export default selectedStocksSlice.reducer;