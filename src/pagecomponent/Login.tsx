import React, { useState } from "react";
import { Link } from "react-router-dom";

///interface ---
interface Userdata{
  myobj:{
    name:string,
    age:number,
    male:string,
  }
}

function Login(props:Userdata) {
  // const {name,age,male} =props.myobj;
  // const [allfield, setAllfield] = useState<boolean>(false);
  // const [page, setPage] = useState<boolean>(false);
  // const handleInputField = (e: any) => {
  //   console.log(e.target.value);
  //   if (!e.tagret.value) {
  //     setAllfield(false);
  //   } else {
  //     setAllfield(true);
  //   }
  // };
  // const handlSignup = () => {
  //   if (!allfield) {
  //     setPage(false);
  //   } else {
  //     setPage(true);
  //   }
  // };
  return (
    <>
      {/* {page && <h1>DO YOU WANT TO LOSE YOUR DATA</h1>}
       */}
       {/* <h3>{name}</h3>
       <h4>{age}</h4>
       <h1>{male}</h1> */}
      <form id="login" className="login-form">
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <label>Email</label>
                  <div className="ui left icon input">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      // onKeyUp={(e) => handleInputField(e)}
                    />
                    <i className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input type="password" required />
                    <i className="lock icon"></i>
                  </div>
                </div>
                <div className="ui blue submit button">Login</div>
              </div>
            </div>
            <div className="middle aligned column">
              <div className="ui big button">
                <div>Don't have account ..</div>
                {/* {!page && ( */}
                  <Link to="/signup">
                    <div
                      className="ui blue submit button"
                      // onClick={handlSignup}
                    >
                      <i className="signup icon"></i>
                      Sign Up
                    </div>
                  </Link>
                {/* )} */}
              </div>
              <Link to="/sendotp">
                <div id="forgetbutton" className="ui small button ">
                  Forget Password..
                </div>
              </Link>
            </div>
          </div>
          <div className="ui vertical divider">Or</div>
        </div>
      </form>
    </>
  );
}

export default Login;
