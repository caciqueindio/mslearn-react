import './index.css'
import React from "react";
import IMC from "./imc";
// representa nuestra aplicación dentro del código HTML
import RecipeTitle from './RecipeTitle';
function App() {
    // el núcleo del componente
    return (
        <article>
            <RecipeTitle/>
            <IMC/>
        </article>
    )
}
//exporta la función
export default App;