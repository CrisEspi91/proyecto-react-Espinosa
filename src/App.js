import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Productos'/>
      <hr/>
      <ItemCount stock={7} initial={1} producto={'Producto 1'}/>

      
    </div>
  );
}

export default App;
