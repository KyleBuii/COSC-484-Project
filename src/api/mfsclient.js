import axios from "axios";
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { MdTextsms } from "react-icons/md";
import {HiMail} from 'react-icons/hi'
import '../pages/User/user.scss'

function MFSClient(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    axios.defaults.withCredentials= true;
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('https://mfjserver.vercel.app/register', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

   
        
        
    
}
const UserForm = () =>{
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    //Testing variables
    const [counter, setCounter] = useState(0)
    const auth = async() =>{
        this.preventDefault();
        try{
            const res = await axios.get('/authenticate', {auth : {username: 'admin', password: '123' }})
            console.log(res.data)
            console.log("success")
        }catch(e){
            
            setTimeout(function(){
                console.log("auth error:")
            console.log(e)
            }, 6000)
        }
    }
    
    
    const getData = async (event) =>{
        event.preventDefault()
        setCounter(counter+1)
        try {
            const res = await axios.get('/get-data');
            console.log(res.data)
            setUser(res.data)
        }catch(e){
            console.log(e)
        }
    }
    
    
        return(
        <>
        Counter<br/>
        <label>{counter}</label>
        User<br/>
        <label>{user.data}</label>
    
    
        <form className="user-form" id='login' onSubmit={handleSubmit}>
        <label htmlFor="login">Username:
        <input type="text" value={user} onChange={(e) =>setUser(e.target.value)}/>
        </label>
        <label htmlFor="login">Password:
        <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/><br/>
        </label>
    
        <button type="submit" onClick={getData}>Log In</button>
        <hr/>
        <h4>Password Recovery</h4>
        <div className='icon_row'>
            <Link><HiMail size={30} color="#783740"/></Link>
            
        </div>
        <div className='icon_row'>
        <Link><MdTextsms size={30} color="#783740"/></Link>
        </div>
        <Link></Link>
    </form>
        </>)
    }
    
    //****** Server Comm ******/
    
export default UserForm;