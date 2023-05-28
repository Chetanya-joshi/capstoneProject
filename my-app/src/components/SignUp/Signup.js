import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom';



export default function Signup() {
  return (
    <div className="sign_form">
        <form>
            <div className="firstname">

            <label for="first">First Name</label>
            <input type="text" placeholder="FIRST NAME" name="first" required/>

            </div>

            <div className="secondname">

            <label for="second">Second Name</label>
            <input type="text" placeholder="SECOND NAME" name="second" required/>

            </div>

            <div className="thirdname">

            <label for="email">Enter Email Address</label>
            <input type="text" placeholder="EMAIL ADDRESS" name="email" required/>

            </div>

           <Link to="/signin"> <button type="submit">SignUp</button></Link>


        </form>
    </div>
  )
}

