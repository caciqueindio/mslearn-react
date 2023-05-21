import React, { useState } from "react";

function IMC() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateIMC = () => {
    const imc = weight / Math.pow(height, 2);

    setResult(`Tu índice de masa corporal es ${imc.toFixed(2)}`);
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>

      <form>
        <label>
          Peso (en kilogramos):
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>

        <br />

        <label>
          Altura (en metros):
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>

        <br />

        <button type="button" onClick={calculateIMC}>
          Calcular IMC
        </button>
      </form>

      {result && <p>{result}</p>}
    </div>
  );
}
export default IMC;
