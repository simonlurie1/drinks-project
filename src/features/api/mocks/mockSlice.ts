import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MockState } from './types';

const initialState: MockState = {
  id: null,
};

const mocksSlice = createSlice({
  name: 'mocks',
  initialState,
  reducers: {
    setSelectedDrink: (state, action: PayloadAction<number | null>) => {
      console.log('set selectedDrinkId', action.payload);
      state.id = action.payload;
    },
  },
});

export const { setSelectedDrink } = mocksSlice.actions;
export default mocksSlice.reducer;
