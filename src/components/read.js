import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9092/Users`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, fullname, email, password, number, place) => {
        localStorage.setItem('id', id)
        localStorage.setItem('fullname', fullname)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        localStorage.setItem('number', number)
        localStorage.setItem('place', place)
    }

    const getData = () => {
        axios.get(`http://localhost:9092/Users`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:9092/delete/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Full Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        {/* <Table.HeaderCell>Password</Table.HeaderCell> */}
                        <Table.HeaderCell>Phone Num</Table.HeaderCell>
                        <Table.HeaderCell>PLACE</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.fullname}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                {/* <Table.Cell>{data.password}</Table.Cell> */}
                                <Table.Cell>{data.number}</Table.Cell>
                                <Table.Cell>{data.place}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="green"
                                            onClick={() => setData(data.id, data.fullname, data.email, data.password, data.number, data.place)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}