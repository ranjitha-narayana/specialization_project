import React, { Component } from 'react'
import './register.css'
import axios from 'axios';


class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: '',
            number: '',
            place: ''
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state);
        axios.post("http://localhost:9092/saveUsr", this.state)
            .then(res => {
                console.log(res.data)
                console.log("user registered successfully!!!!")
                alert("user registered successfully!!!!")


            })
            .catch(err => {
                console.log(console.err)
            })
    }
    render() {
        const { fullname, email, password, number, place } = this.state
        return (
            <div className="signup" >
                <form className='form1' onSubmit={this.handleSubmit}>
                    <h1>SIGNUP FORM</h1>

                    <div class="mb-3">
                        <label><strong>FULL NAME:</strong> </label>

                        <input type="text" placeholder="Enter fullname" class="form-control" name="fullname" value={fullname} onChange={this.handleChange}
                            required />
                        <br />
                    </div>
                    <div class="mb-3">
                        <label><strong>Email:</strong> </label>

                        <input type="email" placeholder="Enter mail" class="form-control" name="email" value={email} id="mail1" onChange={this.handleChange}
                            required />
                        <br />
                    </div>
                    <div class="mb-3">
                        <label><strong>Password:</strong> </label>

                        <input type="password" placeholder="Enter Password" class="form-control" name="password" value={password} id="pass1" onChange={this.handleChange}
                            id="pass1" required />
                        <br />
                    </div>
                    <div class="mb-3">
                        <label><strong> Number: </strong> </label>

                        <input type="number" placeholder="Enter Number" class="form-control" name="number" value={number} id="phone" onChange={this.handleChange}
                            required />
                        <br />
                    </div>

                    <div class="mb-3">
                        <label><strong>Place</strong></label>

                        <input type="text" placeholder="Enter Place" class="form-control" name="place" value={place} id="place1" onChange={this.handleChange}
                            required />
                        <br />
                    </div>
                    <input type="submit" value="SIGNUP" />
                    <input type="reset" value="reset" />
                </form>
            </div>



        )
    }
}
export default register



