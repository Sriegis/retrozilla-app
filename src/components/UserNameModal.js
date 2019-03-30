import React from "react";
import Modal from "react-modal";

export default class UserNameModal extends React.Component {
    state = {
        error: undefined,
        userName: undefined
    }

    onUserNameSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.elements.userName.value.trim();
        if (!userName) {
            this.setState(() => ({ error: "Hey! Enter username!" }));
            return;
        }

        this.setState(() => ({ 
            error: undefined,
            userName: userName 
        }));
        this.props.onUserNameSubmit(userName);
    }

    render() {
        return(
            <Modal
                isOpen={!this.state.userName}
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
                closeTimeoutMS={200}
            >
                {this.state.error && <p>{this.state.error}</p>}
                <form
                    onSubmit={this.onUserNameSubmit}
                >
                    <input 
                        type="text"
                        name="userName"
                        placeholder="What are you?"
                        autoFocus
                    />
                    <button>
                        Ok
                    </button>
                </form>
            </Modal>
        );
    }
}