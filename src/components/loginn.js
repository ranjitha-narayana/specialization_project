import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom"
import { NavLink } from "react-router-dom"



class Loginn extends Component {
    constructor(props) {
        super(props);

        this.state = {

            email: '',
            password: '',
            redirect: false
        }
    }

    submitForm = (e) => {
        e.preventDefault();

        axios.post("http://localhost:9092/login", this.state)
            .then(res => {
                this.props.handleData(this.state)
                this.setState({ redirect: true });
                console.log(res.data.email)
                alert("user logged succesfully");

            })
            .catch(err => {
                console.log(console.err)

                alert("invalid credentials!!")
            })
    }

    handleNameChange = (e) => {
        console.log(e.target.value);
        this.setState({
            email: e.target.value
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/logpro" />;
        }


        return (
            <div>

                <section className="vh-100">
                    <div className="log container-fluid h-custom">
                        <div className="row d-flex  justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5"></div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form className='log1' onSubmit={this.submitForm}>
                                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start ">
                                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-floating mx-1">
                                            <span className="fa fa-facebook-f" />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-floating mx-1"
                                        >
                                            <i className="fa fa-twitter" />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-floating mx-1"
                                        >
                                            <i className="fa fa-linkedin" />
                                        </button>
                                    </div>
                                    <div className="divider d-flex align-items-center my-4">
                                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            name='email'
                                            id="form3Example3"
                                            onChange={this.handleNameChange}

                                            className="form-control form-control-lg"
                                            placeholder="Enter a valid email address"

                                        />
                                        <label className="form-label" htmlFor="form3Example3">
                                            Email address
                                        </label>
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input
                                            type="password"
                                            name='password'
                                            id="form3Example4"
                                            onChange={this.handleEmailChange}
                                            className="form-control form-control-lg"
                                            placeholder="Enter password"
                                        />
                                        <label className="form-label" htmlFor="form3Example4">
                                            Password
                                        </label>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="form-check mb-0">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                defaultValue
                                                id="form2Example3"
                                            />
                                            <label className="form-check-label" htmlFor="form2Example3">
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="#!" className="text-body">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <input
                                            type="submit" name="login"
                                            onClick={this.submitForm}
                                            className="btn btn-primary btn-lg"
                                            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                        />


                                        <p className="small fw-bold mt-2 pt-1 mb-0">
                                            Don't have an account?{" "}
                                            <NavLink to={`/register`} className="link-danger">
                                                Register
                                            </NavLink>

                                        </p>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className=" footer d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                        <div className="text-white mb-3 mb-md-0">
                            Copyright © 2021. All rights reserved.
                        </div>
                        <div>
                            <a href="#!" className="text-white me-4">
                                <i className="fa fa-facebook-f" />
                            </a>
                            <a href="#!" className="text-white me-4">
                                <i className="fa fa-twitter" />
                            </a>
                            <a href="#!" className="text-white me-4">
                                <i className="fa fa-google" />
                            </a>
                            <a href="#!" className="text-white">
                                <i className="fa fa-linkedin" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Loginn;
