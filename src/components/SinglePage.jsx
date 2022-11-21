import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/SingleProduct.css'
const SinglePage = () => {

    const [product, setproduct] = React.useState({});
    const { id } = useParams();
    const [check, setCheck] = useState(true);
    console.log(id);
    React.useEffect(() => {
        fetch(`http://localhost:8080/products/${id}`)
            .then((res) => res.json())
            .then((res) => setproduct(res))
            .then((err) => console.log(err))
    }, [id]);
console.log(product)
  return (
    <>
    <div className='single_product'>
        <h1>
        SinglePage</h1>
        
        <div>  
            <Link to={`/product/${product.id}`}><img src={product.image}></img></Link>
            <h3>{product.brand}</h3>
            <h3>RS {product.price}</h3>
            <h4>{product.category}</h4>
            <h4>{product.title}</h4>
        </div>
        
        </div>
    </>
  )
}

export default SinglePage