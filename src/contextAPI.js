import React, { Component } from 'react'
import { dataProducts, prodInDetails } from './appData';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: dataProducts,
        detailProduct: prodInDetails,
        Cart: [],
        CartSubTotal: 0
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                detailProduct: product
            }
        })
    }
    addToCart = (id) => {
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProduct, Cart: [...this.state.Cart, product] }
        }, () => {
            this.makeTotal()
        })
    }
    increment = (id) => {
        let tempCart = [...this.state.Cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index]
        product.count = product.count + 1;
        const price = product.price;
        product.total = product.count * product.price;
        this.setState(() => {
            return { cart: [...tempCart] }
        }, () => {
            this.makeTotal();
        })

    }
    decrement = (id) => {
        let tempCart = [...this.state.Cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index]
        product.count = product.count - 1;
        const price = product.price;
        product.total = product.count * product.price;
        this.setState(() => {
            return { cart: [...tempCart] }
        }, () => {
            this.makeTotal();
        })

    }
    removeItem = (id) => {
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.Cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProduct.indexOf(this.getItem(id));
        let removeProd = tempProduct[index];
        removeProd.inCart = false;
        removeProd.total = 0;
        removeProd.count = 0;

        this.setState(() => {
            return {
                Cart: [...tempCart],
                product: [...tempProduct]
            }
        }, () => {
            return this.makeTotal()
        })
    }
    makeTotal = () => {
        let subTotal = 0;
        this.state.Cart.map(item => (subTotal += item.total));
        const total = subTotal;
        this.setState(() => {
            return {
                CartSubTotal: subTotal
            }
        })

    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                makeTotal: this.makeTotal,
                removeItem: this.removeItem,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };