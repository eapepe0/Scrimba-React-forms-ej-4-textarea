import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    nombre: "",
    apellido: "",
    email: "",
    comentario: ""
  });
  // creamos una variable para almacenar el useState , donde tiene un objeto
  // podemos acceder a esos datos formData["nombre"]

  /*   console.log(formData); */

  function handleChange(event) {
    setFormData((prevFormData) => {
      // usamos la funcion que maneja useState
      return {
        // devolvemos un objeto
        ...prevFormData, // que use todo lo anterior y modifique solamente
        [event.target.name]: event.target.value // nombre : " valor " en el caso del primer input
        // apellido : " valor "  en el caso del segundo input
      };
    });
    /*     console.log(event.target.name); */
  }

  function mostrarDatos(event) {
    // funcion que imprime los datos recibe el event
    event.preventDefault(); // con esto no refresca la pantalla al apretar un boton haciendo que perdamos los datos
    console.log(formData); // mostramos los datos
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Nombre"
        name="nombre"
        onChange={handleChange}
        value={formData.nombre}
      />
      {/* usamos onChange en el input para ver que ingresan , le pasamos una funcion handleChange, 
      el name de cada input tiene que coincidir con objeto creado en useState, asi no crea un objeto vacio*/}
      <input
        type="text"
        placeholder="Apellido"
        name="apellido"
        onChange={handleChange}
        value={formData.apellido}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        value={formData.comentario}
        type="text"
        placeholder="Comentarios..."
        name="comentario"
        onChange={handleChange}
      />
      <button className="button-7" onClick={mostrarDatos}>
        {" "}
        Enviar
      </button>{" "}
      {/* con este boton mostramos los datos en pantalla */}
    </form>
  );
}
