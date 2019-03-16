import React from "react";

const RetroComment = (props) => (
    <div>
        <p><bold>{props.author}</bold>: {props.text}</p>
    </div>
);

export default RetroComment;