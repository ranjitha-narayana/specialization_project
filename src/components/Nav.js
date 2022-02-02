import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductConsumer } from '../contextAPI'
import Chat from './chat'
import Home from './Home'

export default class Nav extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         logged: false
    //     }

    // }
    // handleCallback = (childData) => {

    //     this.setState({ logged: childData })
    //     document.getElementById("login").style.display = "none";
    //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaa")

    // }

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid py-2">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <NavLink className="navbar-brand mx-auto fw-bold" to="/">
                                <img src='data:image/png;base64,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' alt="one" height="50px"></img>

                            </NavLink>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">



                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" area-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to="/">Products</NavLink>

                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to="/about">About</NavLink>
                                </li>


                                <li className="nav-item">
                                    <ProductConsumer>
                                        {(value) => {
                                            return (<NavLink className="nav-link text-white" to="/cart"><span class="fa fa-cart-arrow-down"></span> Cart ({value.Cart.length}) </NavLink>)
                                        }}

                                    </ProductConsumer>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" id="login" to="/logpro"> <span class="fa fa-user-circle"></span>Login</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>

                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to="/support">Support</NavLink>

                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link text-white" to="/profile">Profile</NavLink>

                                </li> */}


                            </ul>

                        </div>
                    </div>

                </nav>
            </div>
        )
    }

}
