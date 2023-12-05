import { Component } from "react";
import { GiGymBag } from "react-icons/gi";
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
          <WebsiteName>MyFitnessJournal</WebsiteName>
          <NavMenu>
            <NavLink to="/personalgoals" activeStyle>
              Personal Goals
            </NavLink>
            <NavLink to="/suggestion" activeStyle>
              Suggestion
            </NavLink>
            <NavLink to="/calculator" activeStyle>
              Fitness Calculator
            </NavLink>
            <NavLink to="/app" activeStyle>
              Tests
            </NavLink>
            {/* <NavLink to="/apps" activeStyle> */}
            {/* calendar */}
            {/* </NavLink> */}
            <NavLink to="/stopwatch" activeStyle>
              stopwatch
            </NavLink>
            <NavLink to="/">
              <GiGymBag />
            </NavLink>
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
    );
  }
}

export default Navbar;
