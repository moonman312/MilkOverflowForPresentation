import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Login from '../Login/Login'
import './Pages.css';
import { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import milkim from "../Assets/milk.jpg"
import { Link } from "react-router-dom";
import dana_profile from "../Assets/dana.png";

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { firstname, lastname, phone, babyBirthDt } = this.state;
        return (
          <div>
          <div className='landing-wrapper'>
          <Login/>
          </div>
          </div>
        );
    }
}

export class DonorSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { firstname, lastname, phone, babyBirthDt } = this.state;
        return (
          <div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSerKJFcUKzutjrDHNhEQ_wbtowpdtw1iB0M8GiasGAS4mI6Jw/viewform?embedded=true" width="640" height="747" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <Link to='/addbatch'>
            <button type='submit' className="login-btn rightspace"> Skip</button>
            </Link>
          </div>
        );
    }
}
export class AddBatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { firstname, lastname, phone, babyBirthDt } = this.state;
        return (
          <div>
          <Link to='/thankyou'>
          <button type='submit' className="login-btn rightspace"> Submit Batch</button>
          </Link>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScMJULk-pqRHjtPQrviJaQw2AnF8rds2oXeMeJ6YZ3rlRgPZg/viewform?embedded=true" width="640" height="1204" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

          </div>

        );
    }
}
export class ThankYouForBatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { firstname, lastname, phone, babyBirthDt } = this.state;
        return (
          <div>
          <img alt="Thank You!" src="https://giving.duke.edu/images/uploads/af-thankyou-horizontal-animated-2.gif"/>
          <Link to='/chooseuser'>
          <button type='submit' className="login-btn rightspace"> Skip</button>
          </Link>
          </div>
        );
    }
}
export class ReceiverSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { firstname, lastname, phone, babyBirthDt } = this.state;
        return (
          <div>
          <Link to='/mapandtable'>
          <button type='submit' className="login-btn rightspace"> Skip</button>
          </Link>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdCqbrjU3KHy7HwshZDoH9-h6bdkAWPXblyZeX_7ZHAnnZLKw/viewform?embedded=true" width="640" height="1038" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        );
    }
}
export class MapAndTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const {} = this.state;
        return (
          <Fragment>
            <div className="map-left-justify">
              <iframe src="https://www.google.com/maps/d/embed?mid=11NAwkAwQlZCjuTjbyRGwxDyTX5xzYEjd" height="900px" width="100%"></iframe>
            </div>
            <div className="table-right-justify">
              <iframe src="https://view-awesome-table.com/-LzG5sSM3tXN9GMcn67e/view" height="900px" width="100%" ></iframe>
            </div>
            <Link to='/chooseuser'>
            <button type='submit' className="login-btn rightspace"> Back to user type</button>
            </Link>
          </Fragment>


        );
    }
}
export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { firstname, lastname, phone, babyBirthDt } = this.state;
        return (
          <div>
              <div className="map-left-justify">
                <img src={dana_profile} width="600px"/>
              </div>
              <div className="table-right-justify">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScMJULk-pqRHjtPQrviJaQw2AnF8rds2oXeMeJ6YZ3rlRgPZg/viewform?embedded=true" width="640" height="1204" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </div>
          </div>
        );
    }
}
export class DanaProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { firstname, lastname, phone, babyBirthDt } = this.state;
        return (
          <div>
              <div className="map-left-justify">
                <img src={dana_profile} width="600px"/>
              </div>
              <div className="table-right-justify">
              <p></p><p></p><p></p><p></p>
              <Fragment>
              <Link to='/transactions'>
                <MDBBtn color="info">Request Milk</MDBBtn>
              </Link>
                </Fragment>
              </div>
          </div>
        );
    }
}
export class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { firstname, lastname, phone, babyBirthDt } = this.state;
        return (
          <div className='transactions'>
          <iframe className='transactions' src="https://view-awesome-table.com/-LzGEIuwlWFRf3ZjG9Pp/view"></iframe>
          <Link to='/chooseuser'>
          <button type='submit' className="login-btn rightspace"> Back to choose user type</button>
          </Link>
          </div>
        );
    }
}
export class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { firstname, lastname, phone, babyBirthDt } = this.state;
        return (
          <div>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScMJULk-pqRHjtPQrviJaQw2AnF8rds2oXeMeJ6YZ3rlRgPZg/viewform?embedded=true" width="640" height="1204" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        );
    }
}
export class ChooseUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { firstname, lastname, phone, babyBirthDt } = this.state;
        return (
          <div className='landing-wrapper'>
          <p>
          </p>
          <div>
              <Fragment>
              <Link to='/donorsignup'>
                <MDBBtn color="info">I would like to donate</MDBBtn>
              </Link>
                </Fragment>
                <Fragment>
              <Link to='/receiversignup'>
                <p></p>
                <MDBBtn color="info">I would like to receive</MDBBtn>
              </Link>
              </Fragment>
          </div>
          <div>
              <img className='milkim' src={milkim} alt="milkandbaby" />

            </div>
          </div>
        );
    }
}
