import React from "react";
import './Login.css';
import { Link } from "react-router-dom";


export default function Login(){
    return (
        <div className='access-wrapper'>
            <div className='access'>
            <p></p>
            <p></p>
                <div className='btns-holder'>
                <Link to='/chooseuser'>
                <button type='submit' className="login-btn rightspace"> Login</button>
                </Link>
                <Link to='/chooseuser'>
                <button type='submit' className="login-btn"> SignUp</button>
                </Link>
                </div>
            </div>
            <p></p>
            <p></p>
            <h2 className='description'>Breast milk donation and sharing platform</h2>
            <p></p>
            <h3>Find the best donor-recipient match near you</h3>
            <p></p>
            <p></p>
            <div class="map-responsive">
            <iframe className='' src="https://www.google.com/maps/d/embed?mid=11NAwkAwQlZCjuTjbyRGwxDyTX5xzYEjd"  width="600" height="600" allowfullscreen></iframe>
            </div>
        </div>
    )
}
