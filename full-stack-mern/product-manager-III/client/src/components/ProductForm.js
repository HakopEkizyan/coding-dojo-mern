import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = (props) => {
    // const { product, setProduct} = props;
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState("");

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newProduct = {
            title: title,
            price: price,
            description: description
        }

        axios.post('http://localhost:8000/api/product', newProduct)
            .then(res => { 
                console.log(res); 
                console.log(res.data); 
                navigate('/list')
                // setProduct([...product, res.data]);
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container bg-dark bg-opacity-75 p-5">
            <h1 className="text-white mb-4">Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group border-dark rounded text-bg-dark row p-2 m-3">
                    <label className="col-sm-2 col-form-label text-left">Title</label>
                    <div className="col-sm-10">
                        <input type="text" 
                        className="form-control" 
                        onChange={ (e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group border-dark rounded text-bg-dark row p-2 m-3">
                    <label className="col-sm-2 col-form-label text-left">Price</label>
                    <div className="col-sm-10">
                        <input type="number" step="any" 
                        className="form-control" 
                        onChange={ (e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group border-dark rounded text-bg-dark row p-2 m-3">
                    <label className="col-sm-2 col-form-label text-left">Description</label>
                    <div className="col-sm-10 ">
                        <input type="text" 
                        className="form-control" 
                        onChange={ (e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group m-3">
                    <button type="submit" className="border-dark btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    )
}
export default ProductForm;