import React, { Component } from 'react'
import { ProductConsumer } from '../contextAPI';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, title, img, desc1, price, inCart } = value.detailProduct;
                    return (
                        <div>
                            <div className="container">
                                <div className="col-10 mx-auto">
                                    <h1 className="details">Your Product Details</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 mx-auto col-md-3cd ">
                                    <img src={img} className='img-fluid' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4 mx-auto col-md-4'>
                                    <h4>
                                        Product:{title}
                                    </h4>
                                    <h5>
                                        <strong> Price:<span>INR</span> {price}</strong>
                                    </h5>
                                    <p> Description of This Product:</p>
                                    <p>{desc1}</p>
                                    <div>
                                        <NavLink to={"/"}>Back To Product Page</NavLink>
                                    </div>
                                    <Button size="sm" disabled={inCart} onClick={() => { value.addToCart(id) }} variant="secondary">
                                        {inCart === true ? (<span> In Cart</span>) : (<span>Add To Cart</span>)}

                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
