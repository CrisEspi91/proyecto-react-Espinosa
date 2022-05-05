import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer.jsx';
import {Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Productos'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos'/>}/> 
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>      
    </div> // el category id es un parametro, su nombre es importante, el nombre no ira en la url pero sera el nombre a traves del cual se podra acceder a la url a traves del hook useParams
  );
}

export default App;
