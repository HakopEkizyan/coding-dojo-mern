import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductView = () => {
    const [ product, setProduct ] = useState({});

    const {id} = useParams();
    // const navigate = useNavigate();

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

    return (
        <div className="container bg-dark bg-opacity-75 p-5">
            <h2 className="text-white mb-4">{ product.title }</h2>
            <div className="border-dark rounded text-bg-dark row p-3 m-3">
                <p>Price: ${ product.price }</p>
                <p>Description: { product.description }</p>
            </div>
        </div>
    )
}

export default ProductView;