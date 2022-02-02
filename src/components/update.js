import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
export default function Update() {
    let history = useHistory();
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [place, setPlace] = useState('');
    const [id, setID] = useState(null);
    const sendDataToAPI = () => {
        axios.put(`http://localhost:9092/update/${id}`, {

            fullname,
            email,
            password,
            number,
            place
        }).then(() => {
            history.push('/read')
        })
    }

    useEffect(() => {
        setFullName(localStorage.getItem('fullname'));
        setEmail(localStorage.getItem('email'));
        setPassword(localStorage.getItem('password'));
        setNumber(localStorage.getItem('number'));
        setPlace(localStorage.getItem('place'));
        setID(localStorage.getItem('id'));

    }, [])

    return (
        <div className='update'>
            <Form>
                <Form.Field className='read'>
                    <label>First Name</label>
                    <input name="fname"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                <Form.Field className='read'>
                    <label>Last Name</label>
                    <input
                        name="mail"
                        value={email}
                        placeholder='enter email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Field>
                <Form.Field className='read'>
                    <label>Password</label>
                    <input
                        name="pass"
                        value={password}
                        placeholder='enter password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Field>
                <Form.Field className='read'>
                    <label>Ph Number</label>
                    <input
                        name="num"
                        value={number}
                        placeholder='enter num'
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </Form.Field>
                <Form.Field className='read'>
                    <label>Last Name</label>
                    <input
                        name="place"
                        value={place}
                        placeholder='enter place'
                        onChange={(e) => setPlace(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    )
}