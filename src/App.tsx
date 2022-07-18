import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pagecomponent/Login";
import Signup from "./pagecomponent/Signup";
import Forgetpassword from "./pagecomponent/Forgetpassword";
import Validateotp from "./pagecomponent/Validateotp";

const App: React.FC<{}> = () => {
  const obj = {
    name:"parshuram",
    age:23,
    male:"yes"
  }
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login myobj={obj}/>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/sendotp" element={<Forgetpassword />}></Route>
            <Route path="/validate" element={<Validateotp />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};
export default App;
