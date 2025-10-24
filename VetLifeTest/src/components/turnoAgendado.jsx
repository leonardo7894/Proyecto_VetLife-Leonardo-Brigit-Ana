import { useLocation, useNavigate } from "react-router";

export default function TurnoAgendado(){
  const { state } = useLocation() || {};
  const {
    nombre = "",
    apellido = "",
    email = "",
    telefono = "",
    direccion = "",
    fecha = "",
    hora = "",
    especialidad = "",
  } = state || {};
    const pagina = useNavigate();



    return(
        <div style={{backgroundColor: "white", padding: "20px"}}>
        <div className="fondo-turno">
            <h1>Sacaste turno para {especialidad}</h1>
            <div>



              <div style={{display: "flex", gap: "10px"}} className="cajitas-turno">
                 <h3>Nombre:</h3>
                 <h3>{nombre}</h3>
              </div>
              <br/>

            <div style={{display: "flex", gap: "10px"}} className="cajitas-turno">
                <h3>Apellido:</h3>
                <h3>{apellido}</h3>           
            </div>
            <br/>

            

              <div style={{display: "flex", gap: "10px"}} className="cajitas-turno">

                <h3>Telefono:</h3>
                <h3>{telefono}</h3>           
            </div>
            <br/>


              <div style={{display: "flex", gap: "10px"}} className="cajitas-turno">
                <h3>Fecha:</h3>
                <h3>{fecha}</h3>           
            </div>
            <br/>


            <div style={{display: "flex", gap: "10px"}} className="cajitas-turno">
                 <h3>Hora:</h3>
                 <h3>{hora}</h3>           
              </div>
              <br/>


              <div style={{display: "flex", gap: "10px"}} className="cajitas-turno">
                 <h3>Direccion:</h3>
                 <h3>{direccion}</h3>
              </div>
              <br/>
              
              
              <div style={{display: "flex", gap: "10px"}} className="cajitas-turno">           
                 <h3>Correo Electronico:</h3>
                 <h3>{email}</h3>           
              </div>
              
              <button onClick={() => pagina(-1)}>Modificar datos</button>


            </div>
        </div>
        </div>
    );
}