import React from "react";

export default class RetroCommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            error: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text) {
            this.setState(() => ({ error: "Please enter a comment." }));
        } else {
            this.props.onSubmit(this.state.text);
            this.setState(() => ({ 
                error: "",
                text: ""
            }));
            e.target.elements.text.value = "";
        }
    };

    onTextChange = (e) => {
        const text = e.target.value;
        this.setState(() => ({ text }));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        name="text"
                        type="text"
                        placeholder="Your new comment"
                        onChange={this.onTextChange}
                        autoFocus
                    />
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}