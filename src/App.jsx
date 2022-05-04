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
    </div>
  );
}

export default App;
