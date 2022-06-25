import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { text: '', visible: false },
  reducers: {
    show: (state) => {
      state.visible = true;
    },
    hide: (state) => {
      state.visible = false;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const setNotification = (text, time) => {
  return async (dispatch) => {
    dispatch(setText(text));
    dispatch(show());
    setTimeout(() => dispatch(hide()), time * 1000);
  };
};

export const { show, hide, setText } = notificationSlice.actions;
export default notificationSlice.reducer;
