import React from 'react';

import './Input.css'

function Input({
    type = "text",
    placeholder = "Digitar...",
    value,
    onChange,
    onEnter,
    onSend
}) {
  return (
    <form className="form" onSubmit={onSend}>
        <input 
            className="input"
            type={type}
            placeholder={placeholder}
            value={value} 
            onChange={e => onChange(e.target.value)}
            onKeyPress={e => e.key === 'Enter' ? onEnter(e) : null}
        />
        <button 
            type="submit" 
            className="sendButton"
        >Enviar</button>
    </form>
    )
}

export default Input;