//IMPORT
//=======================================================
import React from "react";
import "./form.css";

//CONTENT + EXPORT
//=======================================================

export const TextArea = props =>
    <div className="form-group">
        <textarea className="form-control" rows="10" cols="100" maxLength="80"
        {...props} />
    </div>