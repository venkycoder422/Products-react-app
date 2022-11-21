
import './App.css';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SinglePage  from './components/SinglePage';
import CartPage  from './components/CartPage';
import Login from './components/Login'
import Home from './components/Home'
import ResponsiveAppBar from './components/ResponsiveAppBar';
function App() {
  return (
   <>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<SinglePage />}></Route>
        <Route path="/product/cart" element={<CartPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
  </>
  );
}

export default App;
