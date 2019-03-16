import React from "react"
import RetroComment from "./RetroComment"
import RetroCommentForm from "./RetroCommentForm"

export default class RetroCommentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Comments</h1>
                    {
                        this.state.comments.map(comment => <RetroComment {...comment}/>)
                    }
                </div>
                <div>
                    <RetroCommentForm 
                        author={this.props.user}
                        onSubmit={(comment) => {
                            this.setState(() => (this.state.comments.push(comment)));
                    }}/>
                </div>
            </div>
        )
    }
}