import React, {useState, useMemo} from "react";

export const UseMemoPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const validatePassword = useMemo(() => {
        return <ValidatePassword password={password}/>},
        [password])
    return (
        <>
        <h2>Bem vindo ao UseMemoPage</h2>
        <input 
            placeholder="Nome" 
            value={name} 
            onChange={(event) => setName(event.target.value)} 
        />
        <br />
        <br />
        <input 
            placeholder="Senha" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            /> 
        <br />    
        {validatePassword}  
        </>
    )
}


    const ValidatePassword = ({password}) => {
        console.log(password)
        if(!password.length) return <span>A senha deve ser preenchida</span>
        if (password.length < 5) return <span>A senha deve ter mais de 5 caracteres</span>
        return <span>senha aprovada!</span>
    }

export default UseMemoPage;