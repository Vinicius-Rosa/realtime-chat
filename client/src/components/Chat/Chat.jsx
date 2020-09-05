import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InfoBar';
import './Chat.css'
import Input from '../Input';
import Messages from '../Messages';

let socket;

function Chat({ location }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const fetchChat = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(fetchChat);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {})

    return () => {
      socket. emit('disconnect');
      socket.off();
    }
  }, [fetchChat, location.search])

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
    })

    return () => {}
  }, [messages])

  const sendMessage = event => {
    event.preventDefault();

    if(message){
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(message, messages)

  return(
    <div className="outerContainer">
      <div className="container">
        <InfoBar 
          room={room}
        />

        <Messages 
          messages={messages}
          name={name}
        />

        <Input 
          value={message} 
          onChange={value => setMessage(value)}
          onEnter={e => sendMessage(e)}
          onSend={e => sendMessage(e)}
        />
      </div>
    </div>
  );
}

export default Chat;