import React from "react";
import './Landing.css';
import Login from '../Login/Login';
import LandingContent from '../LandingContent/LandingContent';


export default function Landing(){
    return (
        <div>Login or Signup
        <Login/>
        <LandingContent className=''/>
            {/* <Link to={`/milkoverflow/donorsignup`}> */}
                {/* <button className="">Sign up to donate milk</button> */}
            {/* </Link>)} */}
            {/* <Link to={`/milkoverflow/recipientsignup`}> */}
                {/* <button className="">Sign up to receive milk</button> */}
            {/* </Link>)} */}
        </div>
    )
}
