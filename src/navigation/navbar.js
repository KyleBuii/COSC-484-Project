
import { Component } from "react";
import {GiGymBag} from "react-icons/gi"
import {
    Nav,
    NavBtn,
    NavBtnLink,
    NavMenu,
    Bars,
    NavLink,
    NavAuth,
    WebsiteName,
} from "./navcomponents";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <>
                <Nav>
                    <Bars />
                    
                    <NavMenu>
                        <NavLink to="/personalgoals" activeStyle>Personal Goals</NavLink>
                        <NavLink to="/suggestion" activeStyle>Suggestion</NavLink>
                        <NavLink to="/calculator" activeStyle>Fitness Calculator</NavLink>
                        <NavLink to="/stopwatch" activeStyle>Stopwatch Timer</NavLink>
                        <NavLink to="/calendar" activeStyle>Calendar</NavLink>
                        <><NavLink to="/"><WebsiteName>MyFitnessJournal <GiGymBag/></WebsiteName></NavLink></>
                    </NavMenu>

                    <NavAuth>
                    <NavBtn>
                        <NavBtnLink to="/login">Log In</NavBtnLink>
                    </NavBtn>

                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                    </NavAuth>
                </Nav>
            </>
        )
    }

}



export default Navbar;
