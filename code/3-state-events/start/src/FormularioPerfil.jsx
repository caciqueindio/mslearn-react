import React, { useState } from "react";

const FormularioPerfil = () => {
  const [nombre, setNombre] = useState("");
  const [sexo, setSexo] = useState("");
  const [edad, setEdad] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [nivelEstudios, setNivelEstudios] = useState("");
  const [objetivos, setObjetivos] = useState("");
  const [esPadreMadre, setEsPadreMadre] = useState(false);
  const [cantidadHijos, setCantidadHijos] = useState("");
  const [edadError, setEdadError] = useState("");
  const [cantidadHijosError, setCantidadHijosError] = useState("");
  const [fechaError, setFechaError] = useState("");
  const [casadoError, setCasadoError] = useState("");  

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar fecha de nacimiento
    const fechaActual = new Date();
    const fechaNacimientoObj = new Date(fechaNacimiento);
    const edadCalculada =
      fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

    if (Math.abs(edadCalculada - edad) > 1) {
      console.log(Math.abs(edadCalculada - edad));
      setFechaError("La fecha de nacimiento no coincide con la edad ingresada");
      return;
    }

    //Validar edad
    if (edad < 1) {
      setEdadError("Debe ser mayor de cero");
      return;
    }

    // Validar Estado civil casado
    if (estadoCivil =='Casado' &&  edad < 18) {
        setCasadoError(
          "Si la persona es casada, la edad debe ser mayor de 18 años"
        );
        return;
      }
  

    // Validar cantidad de hijos
    if (esPadreMadre && cantidadHijos && cantidadHijos - edad < 12) {
      setCantidadHijosError(
        "La cantidad de hijos - la edad no puede ser menor a 12"
      );
      return;
    }


    //Realizar acciones con los datos del perfil
    console.log("Datos del perfil:", {
      nombre,
      sexo,
      edad,
      fechaNacimiento,
      estadoCivil,
      nivelEstudios,
      objetivos,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          /*           required */
        />
      </label>
      <br />
      <label>
        Sexo:
        <select value={sexo} onChange={(e) => setSexo(e.target.value)} required>
          <option value="">Seleccione...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </label>
      <br />
      <label>
        Edad:
        <input
          type="number"
          value={edad}
          onChange={(e) => {
            setEdad(e.target.value);
            setEdadError("");
            setCasadoError("");
            setCantidadHijosError("");
          }}
          /*           required */
        />
      </label>
      {edadError && <p style={{ color: "red" }}>{edadError}</p>}
      <br />
      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => {
            setFechaNacimiento(e.target.value);
            setFechaError("");
          }}
          /* required */
        />
      </label>
      {fechaError && <p style={{ color: "red" }}>{fechaError}</p>}
      <br />
      <label>
        Estado Civil:
        <select
          value={estadoCivil}
          onChange={(e) => {
            setEstadoCivil(e.target.value);
            setCasadoError("");
        }}
          /*           required */
        >
          <option value="">Seleccione...</option>
          <option value="Soltero">Soltero</option>
          <option value="Casado">Casado</option>
          <option value="Unión Libre">Unión Libre</option>
        </select>
      </label>
      {casadoError && (
            <p style={{ color: "red" }}>{casadoError}</p>
          )}      
      <br />
      <label>
        Nivel de Estudios:
        <input
          type="text"
          value={nivelEstudios}
          onChange={(e) => setNivelEstudios(e.target.value)}
          /*           required */
        />
      </label>
      <br />
      <label>
        Objetivos en la vida:
        <textarea
          value={objetivos}
          onChange={(e) => setObjetivos(e.target.value)}
          /*           required */
        />
      </label>
      <br />
      <label>
        Es padre/madre de familia?
        <input
          type="checkbox"
          checked={esPadreMadre}
          onChange={(e) => {
            setEsPadreMadre(e.target.checked);
            setCantidadHijos("");
            setCantidadHijosError("");
          }}
        />
      </label>
      <br />
      {esPadreMadre && (
        <>
          <label>
            Cantidad de hijos:
            <input
              type="number"
              value={cantidadHijos}
              onChange={(e) => {
                setCantidadHijos(e.target.value);
                setCantidadHijosError("");
              }}
              disabled={!esPadreMadre}
            />
          </label>
          {cantidadHijosError && (
            <p style={{ color: "red" }}>{cantidadHijosError}</p>
          )}
          <br />
        </>
      )}
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormularioPerfil;
