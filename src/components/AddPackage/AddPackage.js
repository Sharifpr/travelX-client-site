import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './addPackage.css';


const AddPackage = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post(`https://ancient-temple-97023.herokuapp.com/packages`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Sucessfully')
                    reset()
                }
            })
    }

    return (
        <div className="text-center add-package ">
            <h1 className="my-4">Add Package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="w-50 mb-2" {...register("title")} placeholder="Title" /> <br />
                <input className="w-50 mb-2" {...register("provider")} placeholder="Provider" /> <br />
                <input className="w-50 mb-2" type="number" {...register("price")} placeholder="Price" /> <br />
                <input className="w-50 mb-2" type="number" {...register("rating")} placeholder="Ratting" /> <br />
                <input className="w-50 mb-2" type="number" {...register("ratingCount")} placeholder="Rating Count" /> <br />
                <input className="w-50 mb-2" {...register("img")} placeholder="Image URL" /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;