
import './App.css';
import Tarea from './componentes/Tarea'; 
import cartas from './cartas.js';
import List from './componentes/cards.js'


function App() {
  return (
    <div>
    <Tarea titulo="Aprender react"
           borrar="Borrar" />
    <Tarea titulo="Aprender node"
            borrar="Borrar" />  
    <Tarea titulo="Aprender a cocinar"
            borrar="Borrar" />    
    <List cartas= {cartas} /> 
    </div>
  );
}

export default App;
