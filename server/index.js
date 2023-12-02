const path = require('path')
const express = require('express')
bAuth = require('express-basic-auth')
const cookieParser = require('cookie-parser')
​
​
const app = express()
​
​
const auth = bAuth({
    users: {
        admin: '123',
        user: '456',
    },
})
​
​
const PORT = process.env.PORT || 5000
​
​
//Cookie signing key
app.use(cookieParser('666666666666666666'))
​
app
    .use(express.static(path.join(__dirname, '/COSC-484-PROJECT/build')))
    .listen(PORT, () => console.log(`Listening to port: ${PORT}\n`))
​
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'COSC-484-PROJECT/build/index.html'))
    console.log('wai')
})
​
app.get('/authenticate', auth, (req,res) =>{
    const options = {
        httpOnly: true,
        signed: true,
    }
​
    console.log(req.auth.user)
​
    if(req.auth.user === 'admin'){
        res.cookie('name', 'admin', options).send({screen: 'admin'})
    }else if (req.auth.user === 'user') {
        res.cookie('name', 'user', options).send({screen: 'user'})
        
    }
})
​
//Reading cookies to keep a session
app.get('/read-cookie', (req,res) => {
    if(req.signedCookies.name == 'admin'){
        res.send({screen: 'admin'})
    }else if(req.signedCookies.name == 'user'){
        res.send({screen: 'user'})
    }else{
        res.send({screen: 'auth'})
    }
})
​
//Clearing cookies for when logging out, etc
app.get('/clear-cookie', (req,res) =>{
    //Creaing the key value pair holding user name
    res.clearCookie('name').end()
})
​
​
//Getting data from this server
app.get('/get-data', (req,res) =>{
    if(req.signedCookies.name == 'admin'){
        res.send('This is admin panel')
    }else if(req.signedCookies.name == 'user'){
        res.send('This is user data')
    }else{
        res.end()    
    }
})

module.exports = app