import { Axios } from 'axios';
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {HiMail} from 'react-icons/hi'

const LogIn = () => {

    return (
        <>
        <UserForm></UserForm>
        </>
    )
}

const UserForm = () =>{
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    return(
    <>
    <form className="user-form" id='login'>
    <label for="user">Username:
    <input type="text" value={user} onChange={(e) =>setUser(e.target.value)}/>
    </label>
    <label for="password">Password:
    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/><br/>
    </label>

    <button type="submit" onClick={auth}>Log In</button>
    <hr/>
    <h4>Password Recovery</h4>
    <Link><HiMail size={30} color="burgundy"/></Link>
    <Link></Link>
</form>
    </>)
}

const auth = async() =>{
    try{
        const res = await Axios.get('/authenticate', {auth : {username: 'adm2in', password: '123' }})
        console.log(res.data)
    }catch(e){
        console.log(e)
    }
}
export default LogIn;