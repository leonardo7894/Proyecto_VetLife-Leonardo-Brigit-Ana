import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import "../App.css";

export default function Formulario({ pasoInicial = 1 }) {
  const [pasoActual, setPasoActual] = useState(pasoInicial);
  const { especialidad } = useParams();
  const pagina = useNavigate();
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [error, setError] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");     
  const irATurnoAgendado = () =>{pagina("/turnoAgendado", { state: {nombre, apellido,email,telefono,direccion,fecha,hora,especialidad}})}

  function verificarPaso() {
    setError("");

    if (pasoActual === 1) {
        if (nombre.trim() === "") return setError("Ingresa tu Nombre")
        if (apellido.trim() === "") return setError("Ingresa tu Apellido")
    }

    if (pasoActual === 2) {
      if (email.trim() === "") return setError("Ingresa tu correo electrónico");
      if (!email.includes("@")) return setError("El correo no tiene '@'");
    }

    if (pasoActual === 3) {
      if (telefono.trim() === "") return setError("Ingresa tu número de teléfono");
      if (telefono.length < 10) return setError("El número ingresado es muy corto");
      if (telefono.length > 10) return setError("El número ingresado es muy largo");
    }

    if (pasoActual === 4) {
     if (fecha.trim() === "") return setError("Ingresa una fecha para agendar el turno")    
     if (hora.trim() === "") return setError("ingresa un horario para reservar el turno")    
    }
        
    
    if (pasoActual === 5) {
      if (direccion.trim() === "") return setError("Su dirección es inválida");
    }

    return true; // ✅ Sin errores
  }

  // ✅ Botón dinámico: siguiente o enviar
  function manejarBoton(e) {
    e.preventDefault();
    const valido = verificarPaso();

    if (valido === true) {
      if (pasoActual < 6) {
        setPasoActual(pasoActual + 1);
      } else {
          irATurnoAgendado();
      }
    }
  }

  return (
    <div className="card" style={{padding: "30px"}}>
      <h1>Sacar Turno para {especialidad}</h1>

      {/* Paso a paso */}
      <div className="stepper">
        <div className={`step ${pasoActual === 1 ? "active" : ""}`}>1</div>
        <div className={`step ${pasoActual === 2 ? "active" : ""}`}>2</div>
        <div className={`step ${pasoActual === 3 ? "active" : ""}`}>3</div>
        <div className={`step ${pasoActual === 4 ? "active" : ""}`}>4</div>
        <div className={`step ${pasoActual === 5 ? "active" : ""}`}>5</div>
        <div className={`step ${pasoActual === 6 ? "active" : ""}`}>6</div>



      </div>

      <form noValidate onSubmit={manejarBoton} className="comprobante">
          {pasoActual === 1 && (
          <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <label style={{ width: "150px", fontWeight: "bold" }}>
              Nombre:
            </label>
            <input
              type="text"
              placeholder="Introduce tu Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="datosComprobante"
            />
            </div>
            <br/>
          <div style={{ display: "flex", gap: "10px" }}>

            <label style={{ width: "150px", fontWeight: "bold" }}>
              Apellido:
            </label>
            <input
              type="text"
              placeholder="Introduce tu Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="datosComprobante"
            />
          </div>
        </div>
          )}
        {pasoActual === 2 && (
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <label style={{ width: "150px", fontWeight: "bold" }}>
                Correo Electrónico:
              </label>
              <input
                type="email"
                placeholder="Introduce tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="datosComprobante"
              />
            </div>
          </div>
        )}

        {pasoActual === 3 && (
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <label style={{ width: "150px", fontWeight: "bold" }}>
                Teléfono:
              </label>
              <input
                type="tel"
                placeholder="Ingresa tu número de teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="datosComprobante"
              />
            </div>
          </div>
        )}
        {pasoActual === 4 && (
         <div>
           <div style={{ display: "flex", gap: "10px" }}>
            <label style={{ width: "150px", fontWeight: "bold" }}>
              Fecha:
           </label>
           <input
             type="date"
             placeholder="Ingresa la fecha para tu turno"
             value={fecha}
             onChange={(e) => setFecha(e.target.value)}
             className="datosComprobante"
           />
          </div>
          <br/>
          <div style={{ display: "flex", gap: "10px" }}>
            <label style={{ width: "150px", fontWeight: "bold" }}>
              Hora:
           </label>
           <input
             type="time"
             placeholder="Ingresa la fecha para tu turno"
             value={hora}
             onChange={(e) => setHora(e.target.value)}
             className="datosComprobante"
           />
          </div>
         </div>
        )}

        {pasoActual === 5 && (
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <label style={{ width: "150px", fontWeight: "bold" }}>
                Dirección:
              </label>
              <input
                type="text"
                placeholder="Ingresa tu dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="datosComprobante"
              />
            </div>
          </div>
        )}

        {pasoActual === 6 && (
            <div>
                <h1>Tus datos fueron registrados</h1>
            </div>
        )}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        {/* Botones */}
        <div className="actions" style={{ marginTop: "20px" }}>
          <button
            type="button"
            className="btn secondary"
            onClick={() => setPasoActual(Math.max(pasoActual - 1, 1))}
            disabled={pasoActual === 1}
          >
            Anterior
          </button>

          <button type="submit" className="btn primary">
            {pasoActual < 6 ? "Siguiente" : "sacar Turno"}
          </button>

          <button
            type="button"
            className="btn primary"
            onClick={() => pagina(-1)}
          >
            Volver a la página anterior
          </button>
        </div>
      </form>
    </div>
  );
}