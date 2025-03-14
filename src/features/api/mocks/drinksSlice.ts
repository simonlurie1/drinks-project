import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CockTailState } from './types';

const initialState: CockTailState = {
  selectedDrinkId: null,
};

const mocksSlice = createSlice({
  name: 'mocks',
  initialState,
  reducers: {
    setSelectedDrink: (state, action: PayloadAction<number | null>) => {
      console.log('set selectedDrinkId', action.payload);
      state.selectedDrinkId = action.payload;
    },
  },
});

export const { setSelectedDrink } = mocksSlice.actions;
export default mocksSlice.reducer;
