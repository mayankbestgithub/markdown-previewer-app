import { configureStore } from '@reduxjs/toolkit';

import editorReducer from '../Features/editor/editorSlice';

export default configureStore({
    reducer: {
        'editor': editorReducer
    }
})