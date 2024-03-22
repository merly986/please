import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Types in CommonState
interface CommonState {
  // Current origin
  homeLink: string;
  // Prefix on domen
  pathPrefix: string;
}

// Constructor
const initialState: CommonState = {
  homeLink: 'http://localhost:8000/',
  pathPrefix: '',
};

// Create state slice
const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setHomeLink: (state, action: PayloadAction<string>) => {
      state.homeLink = action.payload;
    },
    setPathPrefix: (state, action: PayloadAction<string>) => {
      state.pathPrefix = action.payload;
    },
  },
});

// Export actions
export const {
  setHomeLink,
  setPathPrefix,
} = commonSlice.actions;

// Export reducer
export default commonSlice.reducer;