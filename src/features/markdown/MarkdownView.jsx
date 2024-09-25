import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { updating } from "./markdownSlice";


export const MarkdownView = () => {
const dispatch = useDispatch()
const markdown = useSelector(state => state.markdown.markdown)

    return (
        <div>
            <textarea 
            name="editor" 
            id="editor"
            onChange={(e) => dispatch(updating(e.target.value))}
            value={markdown}
            ></textarea>
        </div>
    )
}