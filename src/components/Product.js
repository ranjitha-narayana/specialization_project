import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { ProductConsumer } from '../contextAPI';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <div className="col-4 mb-3 mx-auto col-md-6  my-4 ">
                <ProductConsumer>
                    {value => (
                        <Card className='card' onClick={() => { value.handleDetails(id) }} style={{ width: '27rem', height: '35rem' }} >
                            <NavLink to="/details">
                                <Card.Img variant="top" src={img} style={{ width: "400px", height: "400px" }} />
                            </NavLink>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col>
                                        <Button size="lg" disabled={inCart} onClick={() => { value.addToCart(id) }} variant="secondary">
                                            {inCart == true ? (<span>IN Cart</span>) : (<span>Add To Cart</span>)}
                                        </Button>
                                    </Col>
                                    <Col>
                                        <small className="text-muted text-right"><h2>INR {price}</h2></small>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    )}
                </ProductConsumer>

            </div>
        )
    }
}
