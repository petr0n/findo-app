//IMPORT
//=======================================================
import React from "react";

//CONTENT + EXPORT
//=======================================================
export const ListItem = (props) => (
<li className="flex items-center justify-between p-3 mb-6 hover_bg-white">
    {props.children}
</li>
);