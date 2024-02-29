import React from 'react'
const Card = ({datos}) => {
  const{nombre, apellido, password} = datos
  return (
    <div className="card">
        <h5>Acceso correcto - Datos ingresados: </h5>
        <li>Nombre: {nombre} </li>
        <li>Apellido: {apellido}</li>
        <li>Contraseña: {password}</li>
    </div>
  )
}
export default Card