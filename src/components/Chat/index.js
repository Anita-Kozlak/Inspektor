// import React, {useState} from 'react';
import React, {Component} from 'react';


import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class Chat extends Component  {
    state ={newMessage: ''}
    handleInputChange = (e) => {
        this.setState({newMessage: e.target.value})
    }
    handleSubmit = () => {
        this.props.onSubmit(this.state.newMessage)
        this.setState({newMessage: ''})

    }
    handleKeyDown = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
            this.handleSubmit();
        }
    }
    render() {

        return (
            <div id="ChatContainer" className="inner-container">
                <Link to={ROUTES.MAIN_VIEW}><a href="#" className="close"/></Link>

                <div style={{display: "flex", justifyContent: "center"}} id="chat-input">
                <textarea placeholder="Napisz wiadomość..."
                          onChange={this.handleInputChange}
                          value={this.state.newMessage}
                          onKeyDown={this.handleKeyDown}
                          style={{width: 400, height: 40}}/>
                    <button style={{width: 45, height: 45, display: "flex", alignItems: "flex-end"}}
                            onClick={this.handleSubmit}>
                        <svg viewBox="0 0 24 24" style={{width: 30, height: 30}}>
                            <path fill="#424242" d="M2,21L23,12L2,3V0L17,12L2,14V1Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}
export default Chat;