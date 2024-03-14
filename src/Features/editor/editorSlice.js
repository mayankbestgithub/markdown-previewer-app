import { createSlice } from '@reduxjs/toolkit';
const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        content: ``
    },
    reducers: {
        addText(state, action) {
            state.content = action.payload;
        },

    }
})
export const { addText } = editorSlice.actions;
export const getContent = state => state.editor.content;

export default editorSlice.reducer