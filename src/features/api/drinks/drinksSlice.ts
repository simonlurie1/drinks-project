import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CockTailState } from './types';

const initialState: CockTailState = {
  selectedDrinkId: null,
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    setSelectedDrink: (state, action: PayloadAction<number | null>) => {
      console.log('set selectedDrinkId', action.payload);
      state.selectedDrinkId = action.payload;
    },
  },
});

export const { setSelectedDrink } = drinksSlice.actions;
export default drinksSlice.reducer;
