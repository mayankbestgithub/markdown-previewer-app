import './Preview.css';

import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
export const Preview = (props) => {

    return (


        <div id="preview" dangerouslySetInnerHTML={
            { __html: marked.parse(props.content) }
        } />



    )
}