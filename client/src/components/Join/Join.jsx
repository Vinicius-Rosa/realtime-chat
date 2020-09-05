import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import './Join.css'

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return(
    <form>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Junte-se a nós!</h1>
          <div><input placeholder="Nome" type="text" className="joinInput" onChange={e => setName(e.target.value)}/></div>
          <div><input placeholder="Sala" type="text" className="joinInput mt-20" onChange={e => setRoom(e.target.value)}/></div>

          <Link 
            to={`/chat?name=${name}&room=${room}`}
            onClick={e => (!name || !room) ? e.preventDefault() : null}
            >
          <button type="submit" className="button mt-20">Entrar</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Join;