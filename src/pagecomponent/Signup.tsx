import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
 

  return (
    <div>
         <form id="signup" className="ui form">
             <h3 className="headingcolor">Sign Up</h3>
        <div className="field">
          <label htmlFor="username">username</label>
          <input type="text" name='username' placeholder="enter the username"  required></input>
        </div>
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="phone">Phone No.</label>
          <input type="number" placeholder="enter a phone number" required></input>
        </div>
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="email">email</label>
          <input type="email" name='email' placeholder="enter your email" required></input>
        </div>
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="enter your password" required></input>
        </div>
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" placeholder="confirm password" required></input>
        </div>
        <div className="ui divider"></div>
        <Link to="/">
        <div className="ui green submit button">Register</div>
        </Link>
      </form>
    </div>
  )
} 
export default Signup