import React from "react"
import RetroComment from "./RetroComment"

const RetroCommentPage = (props) => (
    <div>
        <h1>Comments</h1>
        {
            props.comments.map(comment => <RetroComment {...comment}/>)
        }
    </div>
)

export default RetroCommentPage;