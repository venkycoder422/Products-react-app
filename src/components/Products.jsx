import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Products.css'

const Products = () => {
    const [getprodcts, setproducts] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => setproducts(res))
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

  }, []);
  console.log("Prodcuts", getprodcts);
  

  const addTOcart=(data)=>{
    fetch('http://localhost:8080/cart/', { 

    method: 'POST',
    mode: 'cors', 
    body: JSON.stringify(data) 

  })
  }
    

  return (
    <div className='main_div'>
      <div className='products_div'>
        {
          getprodcts?.map((data) => (
            <div style={{ margin: "0%"}}>
              {
                true ? <Link to={`/product/${data.id}`}><img src={data.image}></img></Link> : <img src={data.img}></img>
              }
              <h3>{data.brand}</h3>
              <span>RS {data.price}</span>
              <div className='functional_buttons'>
                <Link to={`/product/${data.id}`}><button>More Details</button></Link>
                <Link to={`/cart`}><button onClick={addTOcart(data)}>add to Cart</button></Link>
              </div>
              
            </div>
          ))
        }
      </div>

    </div>
  )
  
}

export default Products