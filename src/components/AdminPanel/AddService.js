import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddService = () => {
    // const { register, handleSubmit, watch, error } = useForm();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [imgURL, setImgURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            title: data.title,
            rate: data.rate,
            category: data.category,
            description: data.description,
            img: imgURL
        };
        console.log(eventData);
        const url = 'http://localhost:5000/addService';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server', res))
    };
    const handleUploadImg = event => {
        const imageData = new FormData();
        imageData.set('key', 'c0b1940244d5fc981bc8e84ede322a1b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="bg-gradient">
            <h3 className="text-center">Add Service</h3>
            <div className="bg-secondary m-5 text-dark text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title", { required: true })} placeholder="Service Title" />
                    <br />
                    {errors.name && "Title is required"}<br />
                    <input {...register("rate", { required: true })} placeholder="Rate" /> <br />
                    {errors.rate && "Rate is required"}
                    <br />
                    <select {...register("category")}>
                        <option value="blog">Blog</option>
                        <option value="service">Service</option>
                        <option value="other">other</option>
                    </select>
                    <br /> <br />
                    <input {...register("description", { required: true })} placeholder="Description" />
                    <br />
                    {errors.description && "Description is required"}<br />
                    <br />
                    <input name="img" type="file" onChange={handleUploadImg} /> <br />
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddService;