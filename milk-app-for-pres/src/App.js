import React from 'react';
import logo from './logo.svg';
import './App.css';
import milkLogo from './Components/Assets/milkLogo.png';
import {SignUp,DonorSignup,AddBatch,ThankYouForBatch,
        ReceiverSignUp,MapAndTable,Profile,Transactions} from './Components/Pages/Pages';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
  <Router>
    <Header/>
    <Route exact path='/' component={SignUp} />
    <Route exact path='/donorsignup' component={DonorSignup} />
    <Route exact path='/addbatch' component={AddBatch} />
    <Route exact path='/thankyouforbatch' component={ThankYouForBatch} />
    <Route exact path='/signup' component={SignUp} />
    <Route exact path='/receiversignup' component={ReceiverSignUp} />
    <Route exact path='/mapandtable' component={MapAndTable} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/transactions' component={Transactions} />

  </Router>
    </div>
  );
}

export default App;
