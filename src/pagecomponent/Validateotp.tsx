import React from 'react'
import { Link } from 'react-router-dom'

function Validateotp() {
  return (
    <div>
         <form id="validateotp" className="ui form">
        <div className="field">
          <label htmlFor="otp">Enter Otp</label>
          <input type="text" name='otp'></input>
        </div>
        <div className="ui divider"></div>
        <div className="ui blue submit button">Submit_OTP</div>
        </form>
        
         <form id="Resetpassword" className="ui form">
         <div className="field">
              <label htmlFor='email'>Email</label>
              <div className="ui left icon input">
                <input type="email" name="email" placeholder="Email" required />
                <i className="user icon"></i>
              </div>
        </div>
        <div className="ui divider"></div>
        <div className="field">
              <label htmlFor='newpass'>New Password</label>
              <div className="ui left icon input">
                <input type="password" name="newpass" required />
                <i className="lock icon"></i>
              </div>
            </div>
        <div className="ui divider"></div>
        <div className="field">
              <label htmlFor='confirmpass'>Confirm Password</label>
              <div className="ui left icon input">
                <input type="password" name="confirmpass" required />
                <i className="lock icon"></i>
              </div>
            </div>
        <div className="ui divider"></div>
        <Link to="/">
        <div className="ui blue submit button">Reset Password</div>
        </Link>
        </form>

    </div>
  )
}

export default Validateotp