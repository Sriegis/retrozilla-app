import React from "react";
import RetroComment from "./RetroComment";
import RetroCommentForm from "./RetroCommentForm";
import { SignalRService } from "../services/SignalRService";

export default class RetroCommentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
        this.signalRService = new SignalRService(this.addComment);
        this.signalRService.connect();
    }

    addComment = (comment) => {
        this.setState(() => this.state.comments.push(comment));
    } 

    render() {
        return (
            <div>
                <h1>Comments</h1>
                <div>
                    {
                        this.state.comments.map(comment => <RetroComment {...comment}/>)
                    }
                </div>
                <div>
                    <RetroCommentForm 
                        author={this.props.user}
                        onSubmit={(comment) => {
                            this.addComment(comment);
                            this.signalRService.publishComment(comment.author, comment.text);
                    }}/>
                </div>
            </div>
        )
    }
}