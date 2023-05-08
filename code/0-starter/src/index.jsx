// permite usar JSX
import React from "react";
// representa nuestra aplicación dentro del código HTML
import ReactDOM from "react-dom";
import App from "./App";

// El primer parámetro es el código HTML que se desea mostrar
// El segundo es el elemento HTML que se desea usar para mostrar el código HTML
ReactDOM.render(<App />, document.getElementById("app"));
