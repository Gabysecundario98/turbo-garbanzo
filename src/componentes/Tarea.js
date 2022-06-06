import "bootstrap/dist/css/bootstrap.min.css";

function Tarea(props) {
    return (
      <div className="tarea ">
          <h1>
              {props.titulo}
          </h1>
         <button> {props.borrar}</button> 
         <button> Eliminar </button>
        
      </div>
    );
  }
  
  export default Tarea;
  