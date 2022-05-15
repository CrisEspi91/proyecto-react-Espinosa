import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer.jsx';
import {Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import {CartContextProvider} from './store/CartContext';
import CartView from './components/CartView/CartView';

// lo que se agregue dentro de cartcontext.provider value es loq ue va a persistir en el context
function App() {
  return (
    <div className="App">  
    <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Productos'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos'/>}/> 
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartView/>}/>
      </Routes>   
    </CartContextProvider>
    </div> // el category id es un parametro, su nombre es importante, el nombre no ira en la url pero sera el nombre a traves del cual se podra acceder a la url a traves del hook useParams
  );
}

export default App;
