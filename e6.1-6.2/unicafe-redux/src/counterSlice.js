import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementGood: (state) => {
      state.good += 1;
    },
    incrementOk: (state) => {
      state.ok += 1;
    },
    incrementBad: (state) => {
      state.bad += 1;
    },
    reset: (state) => {
      state.good = initialState.good;
      state.ok = initialState.ok;
      state.bad = initialState.bad;
    },
  },
});

export const { incrementBad, incrementGood, incrementOk, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
