import React from 'react'

const CartPage = () => {
    const [getcart, setcart] = React.useState([]);
    //   const user = useSelector(state => state.auth.userData);
      React.useEffect(() => {
        fetch(`http://localhost:8080/cart`)
          .then((res) => res.json())
          .then((res) => setcart(res))
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
    
      }, []);
      console.log("cart", getcart);
  return (
    <div>CartPage</div>
  )
}

export default CartPage