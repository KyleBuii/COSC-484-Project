import axios from 'axios';
import React, { useState, useEffect } from "react";
import ReactDOM from'react-dom'
import { Link } from 'react-router-dom';
import { MdTextsms } from "react-icons/md";
import {HiMail} from 'react-icons/hi'
import './user.scss'

const LogIn = (props) => {
    const { screen, setScreen } = props;

    const [data, setData] = useState();
  
    const deleteCookie = async () => {
      try {
        await axios.get('/clear-cookie');
        setScreen('auth');
      } catch (e) {
        console.log(e);
      }
    };
  
    const getData = async () => {
      try {
        const res = await axios.get('/get-data');
        console.log(res.data)
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    }  

    return (
        <>
        {screen === 'auth'}
            <UserForm></UserForm>
        </>
    )
}

const UserForm = () => {
    const [screen, setScreen] = useState('auth');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = async () => {
        try {
          const res = await axios.get('/authenticate', { auth: { username, password } });
    
          if (res.data.screen !== undefined) {
            setScreen(res.data.screen);
          }
        } catch (e) {
          console.log(e);
        }
      };

      const readCookie = async () => {
        try {
          const res = await axios.get('/read-cookie');
          
          if (res.data.screen !== undefined) {
            setScreen(res.data.screen);
          }
        } catch (e) {
          setScreen('auth');
          console.log(e);
        }
      };
    
      useEffect(() => {
        readCookie();
      }, []);
    

    return (
        <>
        {screen === 'auth'}?
            <form className="user-form" id='login' onSubmit={auth} >
                <label htmlFor="login">Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label htmlFor="login">Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                </label>

                <button type="submit" >Log In</button>
                <hr />
                <h4>Password Recovery</h4>
                <div className='icon_row'>
                    <Link><HiMail size={30} color="#783740" /></Link>

                </div>
                <div className='icon_row'>
                    <Link><MdTextsms size={30} color="#783740" /></Link>
                </div>
                <Link></Link>
            </form>
            : <LogIn screen={screen} setScreen={setScreen} />
        </>)
}

//****** Server Comm ******/

export default LogIn;
