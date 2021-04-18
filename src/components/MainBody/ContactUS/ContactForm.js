import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const ContactForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const reviews = {...data, date: new Date() };
        fetch('https://thawing-shelf-52528.herokuapp.com/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your SuccessFully');
                }
            })
    }
    return (
        <div className="text-center p-5">
            <h5 className="text-warning mt-5">Contact US</h5>
            <form className="mt-2 bg-light" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} defaultValue={loggedInUser.name} />
                <br /> <br />

                <input {...register("phone", { required: true })} placeholder="Number" />
                <br /> <br />

                <input {...register("email", { maxLength: 50 })} defaultValue={loggedInUser.email} /> <br /> <br />
                <textarea {...register("sms", { maxLength: 500 })} placeholder="Text here" /> <br />

                <input className="btn btn-success" type="submit" />
            </form>
            <div>
                <h1>OR</h1>
                <h5>CALL: <a href="tel:+8801744891919">Calling Here</a></h5>
            </div>
        </div>
    );
};

export default ContactForm;