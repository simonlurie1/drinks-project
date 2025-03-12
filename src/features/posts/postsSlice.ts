import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PostsState } from '../../types';

const initialState: PostsState = {
  selectedPostId: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<number | null>) => {
      console.log('set selectedPostId', action.payload);
      state.selectedPostId = action.payload;
    },
  },
});

export const { setSelectedPost } = postsSlice.actions;
export default postsSlice.reducer;
