import NavBar from "./components/NavBar/NavBar";
import './App.css'
import FrontPage from "./components/FrontPage/FrontPage";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./components/CartContext/CartContext";





function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>

      <NavBar />
      <FrontPage />
      <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/search/:id' element={<ItemListContainer />} />
        <Route path='item/:id' element={<ItemDetailContainer />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>

      <Footer />

    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
