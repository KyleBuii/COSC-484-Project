import Suggestion from "./Suggestion/suggestion";
import Register from "./registration/register";
import Home from "./home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../navigation/navbar";

function Layout() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/suggestion" element={<Suggestion></Suggestion>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Layout;
