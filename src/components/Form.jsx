import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [mostrar, setMostrar] = useState(false);
  const [formulario, setFormulario] = useState(true);
  const [err, setErr] = useState(false);
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    password: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (datos.nombre.length > 3 && !datos.nombre.startsWith(" ") && datos.apellido.length >= 6) {
      setMostrar(true);
      setFormulario(false)
      setErr(false);
    } else {
      setErr(true);
    }
  };
  return (
    <>
      {formulario &&   <form onSubmit={handleFormSubmit}>
        <h2>Bienvenido a BBVA</h2>
        <h4>Ingrese sus datos para loguearse</h4>
        <label>Nombre</label>
        <input type="text" onChange={(event) =>
            setDatos({ ...datos, nombre: event.target.value })}/>
        <label>Apellido</label>
        <input type="text" onChange={(event) => 
        setDatos({ ...datos, apellido: event.target.value })}/>
        <label>Contraseña</label>
        <input type="password" onChange={(event) =>
            setDatos({ ...datos, password: event.target.value })}/>
        <button className="button">
          Acceder
        </button>
      </form>}
      {mostrar && <Card datos={datos} />}
      {err && ( <p className="error"> “Por favor chequea que la información sea correcta”.</p>)}
    </>
  );
};

export default Form;
