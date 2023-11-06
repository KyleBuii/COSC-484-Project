import {Component} from "react";
import { Nav, NavBtn, NavBtnLink, NavMenu, Bars, NavLink} from './navcomponents';

class Navbar extends Component{
    render(){
        return<>
            <Nav>
                <Bars/>

                <NavMenu>
                    <NavLink to = "/suggestion">Suggestion</NavLink>                    
                </NavMenu>
                <NavMenu>
                    <NavLink to = "/personalgoals">Personal Goals</NavLink>                    
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    }
    
}

export default Navbar;