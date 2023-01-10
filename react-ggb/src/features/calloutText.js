import { createSlice } from '@reduxjs/toolkit'

export const textSlice = createSlice({
    name: "text",
    initialState: { value: { text: "" } },
    reducers: {
        updateText: (state, action) => {
            state.value.text = action.payload;
        }
    }
});
export const { updateText } = textSlice.actions;
export default textSlice.reducer;