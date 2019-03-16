import React from "react";

const RetroComment = (props) => (
    <div>
        <h3>{props.author}</h3>
        <p>{props.text}</p>
    </div>
);

export default RetroComment;