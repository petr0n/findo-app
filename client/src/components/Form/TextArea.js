//IMPORT
//=======================================================
import React from "react";
import "./form.css";

//CONTENT + EXPORT
//=======================================================
export const TextArea = props =>
    
    <div className="form-group">
    <h2 className="leading-loose tracking-wide text-2xl">Review tile text</h2>
    <hr />
        <textarea className="form-control w-full"
        {...props} />
    </div>