import { useRef } from "react";

function App() {
  const nombreValue = useRef()
  const apellidoValue = useRef()
  const emailValue = useRef()

  const mostrar = e => {
    e.preventDefafult();
    console.log(nombreValue.current.value)
  }
  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={mostrar}>
        <input type = "text" placeholder="nombre" ref = {nombreValue}/>
        <input type Value= "text" placeholder="apellidos" ref = {apellidoValue}/>
        <input type = "email" placeholder="correo" ref = {emailValue}/>
        <input type="submit" value = "enviar"/>
      </form>
    </div>
  );
}

export default App;
