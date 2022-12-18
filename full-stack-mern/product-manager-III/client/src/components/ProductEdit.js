import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductEdit = () => {
    // const { product, setProduct} = props;
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState("");

    const [ product, setProduct ] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then((res)=> {
                console.log(res)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // const updatedProduct = {
        //     title: title,
        //     price: price,
        //     description: description
        // }

        axios.put('http://localhost:8000/api/products/edit/' + id, {
            title,
            price,
            description
        })
            .then((res) => { 
                console.log(res) 
                navigate('/list')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="container bg-dark bg-opacity-75 p-5">
            <h1 className="text-white mb-4">Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group border-dark rounded text-bg-dark row p-2 m-3">
                    <label className="col-sm-2 col-form-label text-left">Title</label>
                    <div className="col-sm-10">
                        <input type="text" 
                        value={ title }
                        className="form-control" 
                        onChange={ (e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group border-dark rounded text-bg-dark row p-2 m-3">
                    <label className="col-sm-2 col-form-label text-left">Price</label>
                    <div className="col-sm-10">
                        <input type="number" step="any" 
                        value={ price }
                        className="form-control" 
                        onChange={ (e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group border-dark rounded text-bg-dark row p-2 m-3">
                    <label className="col-sm-2 col-form-label text-left">Description</label>
                    <div className="col-sm-10 ">
                        <input type="text" 
                        value={ description }
                        className="form-control" 
                        onChange={ (e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group m-3">
                    <button type="submit" className="border-dark btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
export default ProductEdit;