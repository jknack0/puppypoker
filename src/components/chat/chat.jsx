import React, { Component } from 'react';
import ChatMsg from './msg'
import './chat.css'
import userStore from '../../redux/userStore'

class ChatBox extends Component {
    
    constructor(props){
        let messages = [];
        super(props);
        this.state = {
            chatMsgs: messages,
            userMessage: '',
        }
       this.chat = 'none';
    }

    //SW - this is where the new message component get created, you will be able to update the username and msg property 
    //to alter the chatMsg component
    handleSubmit = (event) => {
        event.preventDefault();
       // console.log('user message: ' + this.state.userMessage)
        if(this.state.userMessage.length !== 0)
        {
            this.state.chatMsgs.push(<ChatMsg username={userStore.getState().username} msg={this.state.userMessage}></ChatMsg>)
            this.setState({
                userMessage: ''
            });
        }
    }
    
    //SW - this function updated the userMessage when the form get updated 
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            userMessage: event.target.value
        });
        //console.log(this.state.userMessage)
    }

    componentDidMount() {
        this.chat = document.getElementById('chat');
    }

    componentDidUpdate() {
        if(this.chat.scrollHeight !== null)
        {
            this.chat.scrollTop = this.chat.scrollHeight;
        }
    }

    render() { 
        return (
        <div className='wrapper'>
            <div className='content'>
                <div id='chat-container'>
                    <div id='chat'>
                        {this.state.chatMsgs}
                    </div>
                    <form id='chatForm' onSubmit={this.handleSubmit} autoComplete='off'>
                        <input type='text' className='chat-input'placeholder='message' message='userMessage' value={this.state.userMessage} onChange={this.handleInputChange}></input>
                    </form>
                </div>
                
            </div>  
        </div>
        
        );
    }
}
 
export default ChatBox;