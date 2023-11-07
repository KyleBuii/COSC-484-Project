import React, {useState} from "react";

const LogIn = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <form className="user-form">
            <label for="user">Username:</label>
            <input type="text" value={user} onChange={(e) =>setUser(e.target.value)}/>
            <label for="password">Password:</label>
            <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
            <input type="submit"></input>
        </form>
        </>
    )
}

export default LogIn;