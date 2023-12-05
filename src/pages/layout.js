import Suggestion from "./Suggestion/suggestion";
import SignIn from "./User/signIn";
import LogIn from "./User/logIn";
import Personalgoals from "./personalgoals/personalgoals";
import Home from "./home";
import Calculator from "./Calculator/Calculator";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../navigation/navbar";
import App from "./User/App";
// import Apps from "./Calendars/Apps";
import Stopwatch from "./stopwatch/stopwatch";

function Layout() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/suggestion" element={<Suggestion></Suggestion>}></Route>
          <Route
            path="/personalgoals"
            element={<Personalgoals></Personalgoals>}
          ></Route>
          <Route path="/calculator" element={<Calculator></Calculator>}></Route>
          <Route path="/app" element={<App></App>}></Route>
          {/* <Route path="/apps" element={<Apps></Apps>}></Route> */}
          <Route path="/stopwatch" element={<Stopwatch></Stopwatch>}></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Layout;
