import React from "react";

const RetroComment = (props) => (
    <div>
        <h3>{props.user}</h3>
        <p>{props.text}</p>
    </div>
);

export default RetroComment;