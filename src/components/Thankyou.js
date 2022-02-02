import React from 'react'; import { NavLink } from 'react-router-dom';
import './thank.css'
const Thank = () => {
    return (
        <div className='tank'>
            <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <style type="text/css"></style>
            <div className="container" >
                <div className="row">
                    <div className='col-2'></div>
                    <div className="col-md-7 mt-5">
                        <div className="payment">
                            <div className="payment_header">
                                <div className="check"><i className="fa fa-check" aria-hidden="true" /></div></div>
                            <div className="content">
                                <h1>Payment Success !</h1>
                                <p>Thank You For Shopping.<br />Your Order will be delivered Shortly.{" "}</p>
                                <NavLink to={`/home`}><input type="button" value="Go to Home"></input></NavLink>{/* <a href="#">Go to Home</a> */}</div></div></div></div></div></div>);
}
export default Thank