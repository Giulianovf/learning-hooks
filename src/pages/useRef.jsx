import React, {useState, useRef} from "react";

export const UseRefPage = () => {
    const [message, setMessage] = useState('');
    const inputRef = useRef();

    return (
        <>
        <h2>Bem vindo ao UseRefPage!</h2>
        <input 
            ref={inputRef}
            placeholder="Digite sua mensagem..." 
            value={message} 
            onChange={(event) => setMessage(event.target.value)} 
            /> 
        <button onClick={() => {
            inputRef.current.focus()
            setMessage('');
        }}>Enviar</button>
        </>
    )
}

export default UseRefPage;