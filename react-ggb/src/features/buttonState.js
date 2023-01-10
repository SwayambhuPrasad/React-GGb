import { createSlice } from '@reduxjs/toolkit'

export const buttonState = createSlice({
    name: "button",
    initialState: { value: { play: "visible", pause: "", restart: "" } },
    reducers: {
        updateButton: (state, action) => {
            state.value = { ...state, ...action.payload };
        },
    }
});
export const { updateButton } = buttonState.actions;
export default buttonState.reducer;