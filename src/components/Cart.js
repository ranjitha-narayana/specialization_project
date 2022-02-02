import React, { Component } from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ProductConsumer } from '../contextAPI'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        if (value.Cart.length > 0) {
                            return (
                                <div>
                                    <div><h1> Your Cart </h1></div>
                                    <div className='container-fluid text-center'>
                                        <div className='row'>
                                            <div className='col-10 max-auto col-lg-2'>
                                                <strong>Product</strong>
                                            </div>
                                            <div className='col-10 max-auto col-lg-2'>
                                                <strong>Name Of Product</strong>
                                            </div>
                                            <div className='col-10 max-auto col-lg-2'>
                                                <strong>Price</strong>
                                            </div>
                                            <div className='col-10  max-auto col-lg-2'>
                                                <strong>Quantity</strong>
                                            </div>
                                            <div className='col-10 max-auto col-lg-2'>
                                                <strong>Remove</strong>
                                            </div>
                                            <div className='col-10  max-auto col-lg-2'>
                                                <strong>Total</strong>
                                            </div>
                                        </div>
                                    </div>
                                    {value.Cart.map(cartData => {
                                        return (
                                            <div className='container-flui text-center'>
                                                <div className='row'>
                                                    <div className='col-10  max-auto col-lg-2'>
                                                        <img style={{ width: '10rem', height: '10rem' }} src={cartData.img} className="img-fluid" />
                                                    </div>
                                                    <div className='col-10 max-auto col-lg-2'>
                                                        {cartData.title}
                                                    </div>
                                                    <div className='col-10 max-auto col-lg-2'>
                                                        {cartData.price}
                                                    </div>
                                                    <div className='col-10  max-auto col-lg-2'>
                                                        <input size="sm" className='qtyminus' value='-' onClick={() => value.decrement(cartData.id)} />

                                                        {cartData.count}
                                                        <input size="sm" className='qtyplus' value='+' onClick={() => value.increment(cartData.id)} />
                                                    </div>
                                                    <div className='col-10 max-auto col-lg-2'>
                                                        <Button variant='secondary' onClick={() => { value.removeItem(cartData.id) }} size="sm">Remove</Button>
                                                    </div>
                                                    <div className='col-10 max-auto col-lg-2'>
                                                        {cartData.total}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <hr></hr>
                                    <Container>
                                        <Row>
                                            <Col><strong>Total:</strong>{value.CartSubTotal}</Col>
                                        </Row>
                                        <div><NavLink to={`/payment`}><input type="button" value="checkout"></input></NavLink></div>
                                    </Container>

                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <h3>Currently your cart contains<span style={{ color: "red" }}></span></h3>
                                </div>
                            )
                        }
                    }}
                </ProductConsumer>

            </section>
        )
    }
}
