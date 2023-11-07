import React, {useState} from "react";

const LogIn = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <form className="user-form">
            <label for="user">Username:
            <input type="text" value={user} onChange={(e) =>setUser(e.target.value)}/>
            </label>
            <label for="password">Password:
            <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/><br/>
            </label>
            <button type="submit">Log In</button>
        </form>
        </>
    )
}

export default LogIn;