import { Button } from 'bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import { getDataKey, processOrder } from './databasem';
import ProcessPayment from './ProcessPayment';

const MyOdersForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderData, setOrderData] = useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => setOrderData(data);

     const handlePaymentSuccess = paymentId =>{
        const selectItem = JSON.parse(localStorage.getItem(getDataKey()));
        const orderDetails = { ...loggedInUser, products: selectItem, order: orderData, date: new Date() }; 
        fetch('https://thawing-shelf-52528.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    processOrder();
                    alert('your order placed SuccessFully');
                }
            })
    }
    return (

        <div className="container row text-center">
            <div style={{ display: orderData ? 'none' : 'block' }} className="col">
            <h3 className="text-success mt-2">Your Order Form</h3><br/>
            <form className="bg-light" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} defaultValue={loggedInUser.name} />
                <br/> <br/>

                <input {...register("email", { maxLength: 50 })} defaultValue={loggedInUser.email} /> <br/> <br/>

                <input {...register("address", { required: true })} placeholder="Your Address" />
                <br/> <br/>

                <input {...register("phone", { required: true })} placeholder="Your Phone" />
                <br/> <br/>

                <input {...register("feet", { required: true })} placeholder="Squire Feet" />
                <br/> <br/>

                <select {...register("category")}>
                    <option value=""></option>
                </select> <br/><br/>

                <input className="btn btn-success" type="submit" />
            </form>
            </div>
            <div style={{ display: orderData ? 'block' : 'none' }} className="col bg-light text-center">
                <h6>Please Pay for me:</h6>
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
        </div>
    );
};

export default MyOdersForm;