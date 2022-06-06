
import './App.css';
import Tarea from './componentes/Tarea';  

function App() {
  return (
    <div>
    <Tarea titulo="Aprender react"
           borrar="Borrar" />
    <Tarea titulo="Aprender a cocinar"
            borrar="Borrar" />  
    <Tarea titulo="Aprender a cocinar"
            borrar="Borrar" /> 
    <Tarea titulo="Aprender a cocinar"
            borrar="Borrar" />      
    </div>
  );
}

export default App;
