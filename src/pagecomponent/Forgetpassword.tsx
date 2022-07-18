import React from 'react'
import { Link } from 'react-router-dom'

function Forgetpassword() {
  return (
    <div>
         <div id="forgetpage" className="column">
          <div className="ui form">
            <div className="field">
              <label>Enter your Email</label>
              <div className="ui left icon input">
                <input type="email" placeholder="Email" required />
                <i className="user icon"></i>
              </div>
            </div>
             <Link to="/validate">
            <div className="ui blue submit button">Send Otp</div>
             </Link>
          </div>
        </div>
    </div>
  )
}
export default Forgetpassword