import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = (props) => {
    // const {product, setProduct} = props;
    const [list, setList] = useState([])

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

    return (
        <div className="container bg-dark bg-opacity-75 p-5">
            <h1 className="text-white mb-4">All Products</h1>
            <ul>
                {
                    list.map((product, index) => {
                        return <li className="border-dark rounded text-bg-dark row p-2 m-3">
                                    <a className="text-white" href={"/" + product._id}>{product.title}</a>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;