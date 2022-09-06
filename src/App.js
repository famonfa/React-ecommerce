import NavBar from "./components/NavBar/NavBar";
import './App.css'
import FrontPage from "./components/FrontPage/FrontPage";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";





function App() {
  return (
    <BrowserRouter>
      
        <NavBar />
        <FrontPage />
      <Routes>

      <Route path='/' element={<ItemListContainer />}  />
      <Route path='/category/:id' element={<ItemListContainer />} />
       <Route path='item/:id' element={<ItemDetailContainer />}></Route>
      </Routes>
        <Footer />

     

    </BrowserRouter>
  );
}

export default App;
