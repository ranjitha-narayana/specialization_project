import React, { Component } from 'react';
import { ProductConsumer } from '../contextAPI';

import Product from './Product';
import Home from './Home';
export default class ProductList extends Component {
    render() {
        return (

            <div className='container1'>
                <div>

                    <h1>Find your products</h1>
                </div>
                <div className='row'>
                    <ProductConsumer>

                        {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product} />
                            })
                        }
                        }
                    </ProductConsumer>
                </div>

            </div>

        )
    }
}
