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
            <NavLink to="/suggestion">Suggestion</NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/register">Register</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/personalgoals">Goals</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  }
}

export default Navbar;
