import Suggestion from "./Suggestion/suggestion"
import SignIn from './User/SignIn'
import Personalgoals from './personalgoals/personalgoals'
import Home from "./home"
import Calculator from './Calculator/Calculator'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../navigation/navbar'

function Layout() {
    return (
        <>
            <Router>
            <Navbar/>
                <Routes>
                    
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/suggestion" element={<Suggestion></Suggestion>}></Route>
                        <Route path="/personalgoals" element={<Personalgoals></Personalgoals>}></Route>
                        <Route path="/calculator" element={<Calculator></Calculator>}></Route>
                        <Route path="/signin" element={<SignIn></SignIn>}></Route>
                        
                        
                </Routes>
            </Router>
        </>
    )
}

export default Layout