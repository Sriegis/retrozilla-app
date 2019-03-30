import React from "react";
import RetroComment from "./RetroComment";
import RetroCommentForm from "./RetroCommentForm";
import { SignalRService } from "../services/SignalRService";
import UserNameModal from "./UserNameModal";

export default class RetroCommentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: undefined,
            comments: []
        }
        this.signalRService = new SignalRService(this.addComment);
        this.signalRService.connect();
    }

    onUserNameSubmit = userName => {
        this.setState(() => ({ userName }))
    }

    addComment = comment => {
        this.setState(() => this.state.comments.push(comment));
    } 

    render() {
        return (
            <div>
                <UserNameModal onUserNameSubmit={this.onUserNameSubmit}/>
                <h1>Comments</h1>
                <div>
                    {
                        this.state.comments.map(comment => <RetroComment {...comment}/>)
                    }
                </div>
                <div>
                    <RetroCommentForm
                        onSubmit={text => {
                            this.addComment({ 
                                author: this.state.userName, 
                                text: text 
                            });
                            this.signalRService.publishComment(this.state.userName, text);
                    }}/>
                </div>
            </div>
        )
    }
}