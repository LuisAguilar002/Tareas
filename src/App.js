import './App.css';
import logo from './imagenes/descarga.jpeg'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="tareas">
       <div className='logo-contenedor'>
         <img 
          src={logo} 
          className='logo'/>
       </div>
    <div className='tareas-lista-principal'>
      <h1>Mis tareas</h1>
      <ListaDeTareas/>

    </div>
    </div>
    
  );
}

export default App;
