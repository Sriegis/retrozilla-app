import React from "react";

const RetroComment = (props) => (
    <div>
        <p>{props.author}: {props.text}</p>
    </div>
);

export default RetroComment;