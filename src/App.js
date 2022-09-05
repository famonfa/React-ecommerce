import NavBarN from "./components/NavBar/NavBar";
import './App.css'
import FrontPage from "./components/FrontPage/FrontPage";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";





function App() {
  return (
  <div>
    <NavBarN />
    <FrontPage />
    
    {/* <ItemListContainer /> */}
    <ItemDetailContainer/>
   
    
      </div>  
      );
}

export default App;
