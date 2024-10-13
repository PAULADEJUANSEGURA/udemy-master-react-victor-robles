// Importar modulos de react o dependencias
import React from "react";
import imagen from './babel-jsx.jpg';

// Función del componente
const MiComponente = () => {
  return (
    <div>
      <h1>Para React y sus componentes usamos JSX</h1>
      <p>Este es mi primer componente cutreibol de prueba</p>
      <img src={imagen} className="imagen-babel-peq"/>
    </div>
  );
};

// Añadir el Export
export default MiComponente;
