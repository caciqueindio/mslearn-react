import React from "react";

function PasosReceta(props) {

    
  const pasosRecetaItems = props.pasos.map((paso, index) => {
    return <li key={index}> {paso.name}</li>;
  });
//  return <h2> Prueba </h2>
  return <ol> {pasosRecetaItems}</ol>;
}
export default PasosReceta;
