import { Component } from "react";
import {
    Nav,
    NavBtn,
    NavBtnLink,
    NavMenu,
    Bars,
    NavLink,
} from "./navcomponents";

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
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </Nav>
            </>
        )
    }

}

export default Navbar;
