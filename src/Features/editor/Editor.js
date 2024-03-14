import { useState } from "react";
import { useDispatch } from "react-redux"
import { addText } from "./editorSlice"

import './Editor.css';
export const Editor = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const handleText = (e) => {
        setContent(e.target.value);
        if (e.target.value !== content) {
            dispatch(addText(e.target.value))
        }

    }
    return (

        <textarea id="editor" rows={30} cols={60} value={content} onChange={handleText}>

        </textarea>

    )
}