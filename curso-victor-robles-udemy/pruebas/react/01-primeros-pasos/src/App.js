import logo from './logo.svg';
import './App.css';
// Importo mis estilos para MiComponente para que no quede tan soso
import './style-MiComponente.css'
// Importamos MiComponente nuevo de prueba
import MiComponente from './MiComponente';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Aprendiendo React con Victor Robles</h4>
      </header>
      <main>
          {/* Cargamos mi componente (Esto es un comentario) */}
          <MiComponente />
     </main>
    </div>
     );
}

export default App;
