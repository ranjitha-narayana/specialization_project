import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Loginn from './loginn';
class ResultList extends Component {
    constructor(props) {
        super(props);

        this.state = {

            email: '',
            password: '',

        };
    }

    handleParentData = (formModel) => {
        console.log(formModel);

        this.setState({ ...formModel });
    }


    render() {
        return (
            <div>

                <Loginn handleData={this.handleParentData} />

                <div class="card" style={{ width: "18rem", display: "block", margin: "auto" }}>
                    <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">User Profile</h5>
                        <p class="card-text">EmailId:{this.state.email}</p>
                        <NavLink to="/home" class="btn btn-primary">GoTo Home Page</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default ResultList
