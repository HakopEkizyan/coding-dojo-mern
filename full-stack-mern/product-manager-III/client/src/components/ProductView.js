import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductView = () => {
    const [ product, setProduct ] = useState({});

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then((res)=> {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = () => {
        axios.delete('http://localhost:8000/api/products/delete/' + id)
        .then((res) => {
            navigate('/list')
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div className="container bg-dark bg-opacity-75 p-5">
            <h2 className="text-white mb-4">{ product.title }</h2>
            <div className="border-dark rounded text-bg-dark row p-3 m-3">
                <p>Price: ${ product.price }</p>
                <p>Description: { product.description }</p>
            </div>
            <div className="row m-3">
                <div className="col-1">
                    <a href={"/edit/" + product._id}
                    className="btn btn-primary border border-2 border-dark">
                        Edit
                    </a>
                </div>
                <div className="col-1">
                    <button onClick={deleteHandler}
                    className="btn btn-danger border border-2 border-dark">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductView;