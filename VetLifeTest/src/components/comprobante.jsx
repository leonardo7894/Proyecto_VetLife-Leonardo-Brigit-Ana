import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../App.css";

export default function Comprobante() {
  const [carrito, setCarrito] = useState([]);
  const pagina = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion,setDireccion] = useState("")
  
  function eliminarDelCarrito(index) {
    const nuevoCarrito = carrito.filter((_, i)=> i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito",JSON.stringify(nuevoCarrito));
  };

  function verificarDatos(e){
    e.preventDefault();
    setError("");
    if (email.trim() === "") { // .trim elimina los espacios al inicio y al final de los imputs
      setError("email");
      return;
    }
    if (!email.includes("@")) {
      setError("@");
      return;
    }
    if (telefono.trim() === "") { // .trim elimina los espacios al inicio y al final de los imputs
      setError("telefono");
      return;
    }
    if (telefono.length < 10) {
      setError("telefono corto");
      return;
    }
    if (telefono.length > 10) {
      setError("telefono largo");
      return;
    }
    if (direccion.trim() === "") {
      setError("direccion");
      return;
    }
    alert("graciasssss")
  };


  const valorTotal = carrito.reduce((acumulador, item) => acumulador + (item.precio || 0), 0); // "ACUMULADOR" GUARDA EL VALOR DESPUES DE CADA SUMA 


  useEffect(() => {
    const data = localStorage.getItem("carrito"); // <-- leo los productos
    if (data) setCarrito(JSON.parse(data));
  }, []);



  return (<div className="cajaPrincipalComprobante">
    <h1 className="cajaTitulo"
    >
       Comprobante de compra
    </h1>
  
  
    {/* TABLA DE PRODUCTOOOOOOOOOOOOOOS */}
    {carrito.length === 0 ? (
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        No hay productos seleccionados
      </p>
    ) : (
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "25px",
          border: "1px solid #33979040",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#339790", color: "#fff" }}>
            <th style={{ padding: "10px", textAlign: "left" }}>DESCRIPCIÓN</th>
            <th style={{ padding: "10px", textAlign: "center" }}>PRECIO</th>
            <th style={{ padding: "10px", textAlign: "center" }}>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item, index) => (
            <tr
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
                backgroundColor: index % 2 === 0 ? "#f2fbfa" : "#ffffff",
              }}
            >
              <td style={{ padding: "10px" }}>{item.descripcion}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                ${item.precio}
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <button
                  onClick={() => eliminarDelCarrito(index)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  
    {/* CAJITA DEL TOTAL DE LA CUENTA :)*/}
    {carrito.length > 0 && (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#b0ddd8",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
      >
        <strong style={{ marginRight: "10px", color: "#004f48" }}>TOTAL:</strong>
        <span
          style={{ fontSize: "16px", fontWeight: "bold", color: "#004f48" }}
        >
          ${valorTotal.toLocaleString("es-AR")}
        </span>
      </div>
    )}
  
    {/* FORMULARIOOOOOOOOOOO */}
    <form
      noValidate
      onSubmit={verificarDatos}
      className="comprobante"
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <label style={{ width: "150px", fontWeight: "bold" }}>
          Correo Electrónico:
        </label>
        <input
          type="email"
          placeholder="Introduce tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} className="datosComprobante"
        />
      </div>
      {error === "@" && <p style={{ color: "red" }}>El correo no tiene '@'</p>}
      {error === "email" && (
        <p style={{ color: "red" }}>Ingresa tu correo electrónico</p>
      )}
  
      <div style={{ display: "flex", gap: "10px" }}>
        <label style={{ width: "150px", fontWeight: "bold" }}>Teléfono:</label>
        <input
          type="tel"
          placeholder="Ingresa tu número de teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)} className="datosComprobante"
        />
      </div>
      {error === "telefono" && (
        <p style={{ color: "red" }}>Ingresa tu número de teléfono</p>
      )}
      {error === "telefono corto" && (
        <p style={{ color: "red" }}>El número ingresado es muy corto</p>
      )}
      {error === "telefono largo" && (
        <p style={{ color: "red" }}>El número ingresado es muy largo</p>
      )}
  
      <div style={{ display: "flex", gap: "10px" }}>
        <label style={{ width: "150px", fontWeight: "bold" }}>Dirección:</label>
        <input
          type="text"
          placeholder="Ingresa tu dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)} className="datosComprobante"
        />
      </div>
      {error === "direccion" && (
        <p style={{ color: "red" }}>Su dirección es inválida</p>
      )}
  
      <button
        type="submit" className="btnConfirmarCompra"
      >
        Confirmar Compra
      </button>
    </form>
    <button
      className="btnVolverPagina"
      onClick={() => pagina(-1)}
    >
      Volver a la página anterior
    </button>
  </div>);
}

