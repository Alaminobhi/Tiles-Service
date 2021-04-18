import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{
        const reviews = {...loggedInUser, review: data, date: new Date() }; 
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data) { 
                    alert('your order placed SuccessFully');
                }
            })
    }
    return (
        <div className="text-center mt-2">
        <h5 className="text-warning">Add Your Review</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("text", { maxLength: 500 })} placeholder="Text here" /> <br/>

                <select {...register("category")}>
                    <option value="good">Good</option>
                    <option value="best">Best</option>
                </select>

                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;