import React from 'react'
import './Signin.css'
import {Link} from 'react-router-dom';



export default function Signin() {
  return (
    <div className="sign_form">
        <form>
            <div className="firstname">

            <label for="first">First Name</label>
            <input type="text" placeholder="FIRST NAME" name="first" required/>

            </div>


            <div className="thirdname">

            <label for="email">Enter Email Address</label>
            <input type="text" placeholder="EMAIL ADDRESS" name="email" required/>

            </div>

           <Link to="/product"> <button type="submit">SignIn</button></Link>


        </form>
    </div>
  )
}

