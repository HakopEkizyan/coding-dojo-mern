import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductList = (props) => {
    // const {product, setProduct} = props;
    const [list, setList] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    const deleteHandler = (_id) => {
        axios.delete('http://localhost:8000/api/products/delete/' + _id)
        .then((res) => {
            navigate('/list')
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div className="container bg-dark bg-opacity-75 p-5">
            <div className="row">
                <div className="col-11">
                    <h1 className="col-10 text-white mb-4">All Products</h1>
                </div>
                <div className="col-1">
                    <a className="btn btn-success" href="/">Create</a>
                </div>
            </div>
            <ul>
                {
                    list.map((product, index) => {
                        return <li className="border-dark rounded text-bg-dark row p-2 m-3">
                                <div className="col-10">
                                    <a className="text-white" href={"/" + product._id}>{product.title}</a>
                                </div>
                                <div className="col-1">
                                    <a className="btn btn-primary text-white" href={"/edit/" + product._id}>Edit</a>
                                </div>
                                <button onClick={ e => {deleteHandler(product._id) } }
                                className="col-1 btn btn-danger">
                                    Delete
                                </button>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;