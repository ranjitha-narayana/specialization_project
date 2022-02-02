import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [place, setPlace] = useState('');

    const sendDataToAPI = () => {
        axios.post(`http://localhost:9092/saveUsr`, {
            fullname,
            email,
            password,
            number,
            place
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div className='create'>
            <Form>
                <Form.Field className='read'>
                    <label>Full Name</label>
                    <input name="fname"
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                <Form.Field className='read'>
                    <label>Last Name</label>
                    <input
                        name="mail"
                        placeholder='enter mail'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Field>
                <Form.Field className='read'>
                    <label>Password</label>
                    <input
                        name="pass"
                        placeholder='enter pass'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Field>
                <Form.Field className='read'>
                    <label>Phone</label>
                    <input
                        name="num"
                        placeholder='enter num'
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </Form.Field>
                <Form.Field className='read'>
                    <label>Place</label>
                    <input
                        name="placE"
                        placeholder='enter place'
                        onChange={(e) => setPlace(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
            </Form>
        </div>
    )
}