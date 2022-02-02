import React, { Component } from 'react';
import axios from 'axios';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usr: [],
            errors: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9092/Users')
            .then(res => {
                console.log(res.data)
                // this.state.std = res.data;
                this.setState({
                    usr: res.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errors: 'unable to fetch data'
                })
            })
    }
    render() {
        const { usr, errors } = this.state

        return (<div>
            Users list
            {usr.length ? usr.map(usrs => <div key={usrs.id}>

                {usrs.id} | {usrs.fullname} | {usrs.email} | {usrs.password} | {usrs.number} | {usrs.place} </div>) : <h2> {usr.errors}</h2>}
            {errors ? <h2>{errors}</h2> : null}
        </div>
        );

    }

}
export default Admin;