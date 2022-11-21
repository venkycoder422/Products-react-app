import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Products.css'
// import { useSelector } from 'react-redux';
const Products = () => {
    const [getprodcts, setproducts] = React.useState([]);
//   const user = useSelector(state => state.auth.userData);
  React.useEffect(() => {
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => setproducts(res))
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

  }, []);
  console.log("Prodcuts", getprodcts);
  

  const addTOcart=()=>{

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
                <Link to={`/cart`}><button onClick={addTOcart()}>add to Cart</button></Link>
              </div>
              
            </div>
          ))
        }
      </div>

    </div>
  )
  
}

export default Products