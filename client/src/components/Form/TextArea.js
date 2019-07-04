//IMPORT
//=======================================================
import React from "react";
import "./form.css";

//CONTENT + EXPORT
//=======================================================

export const TextArea = props =>
    <div className="form-group">
        <textarea className="form-control w-full"
        {...props} />
    </div>