import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";


export default function Shampoo() {
  const [carrito, setCarrito] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const productos = [
    { id: 1, descripcion: "Shampoo1", imagen: "./akkaka.jpeg" },
    { id: 2, descripcion: "Shampoo2", imagen: "./akkaka.jpeg" },
    { id: 3, descripcion: "Shampoo3", imagen: "./akkaka.jpeg" },
    { id: 4, descripcion: "Shampoo4", imagen: "./akkaka.jpeg" },
    { id: 5, descripcion: "Shampoo5", imagen: "./akkaka.jpeg" },
    { id: 6, descripcion: "Shampoo6", imagen: "./akkaka.jpeg" },
    { id: 7, descripcion: "Shampoo7", imagen: "./akkaka.jpeg" },
    { id: 7, descripcion: "Shampoo8", imagen: "./akkaka.jpeg" },
    { id: 8, descripcion: "Shampoo9", imagen: "./akkaka.jpeg" },
  ];
  //cuando arranca gurada  que habia antes 
 useEffect(()=>{
   const datos =localStorage.getItem("carrito");
   if (datos) setCarrito(JSON.parse(datos));
 }, [])



  function agregarAlCarrito(producto) {
   const nuevoCarrito = [producto,...carrito];
   setCarrito(nuevoCarrito);
   localStorage.setItem("carrito",JSON.stringify(nuevoCarrito));// sicroniza la lista con los demas componentes
   setPopupVisible(true);
  }

  function eliminarDelCarrito(index) {
  const nuevoCarrito = carrito.filter((_, i)=> i !== index);
  setCarrito(nuevoCarrito);
  localStorage.setItem("carrito",JSON.stringify(nuevoCarrito));
  }

  return (
    <div className="titulos">
      <h1>Shampoos</h1>
      <img src="./akkaka.jpeg" className="portada" />
      <h2 className="descripcion">Gatos</h2>

      <div className="grid">
        {productos.map((prod) => (
          <div key={prod.id}>
            <img src={prod.imagen} className="imagenes" />
            <p className="descripcion">{prod.descripcion}</p>
            <button
              onClick={() => agregarAlCarrito(prod)}
              className="boton"
            >
              Añadir al Carrito
            </button>
          </div>
        ))}
      </div>

      {/* Popup del carrito */}
      {popupVisible && (
        <div
          className="popup-carrito"
          className="carrito"
        >
          <h3 style={{ marginTop: 0 }}>🛒 Tu lista de compras</h3>
          {carrito.length === 0 ? (
            <p>No hay productos aún</p>
          ) : (
            <ul className="popup">
              {carrito.map((item, index) => (
                <li
                  key={index}
                  className="listaProductos"
                >
                  <button
                    onClick={() => eliminarDelCarrito(index)}
                    className="eliminarProducto"
                  >
                    ❌
                  </button>
                  <span style={{ flex: 1 }}>{item.descripcion}</span>
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setPopupVisible(false)}
            className="btnCerrar"
          >
            Cerrar
          </button>
          <Link to="/comprobante">
            <button className="btnCerrar"> ir a comprobante
            </button></Link>
        </div>
      )}
    </div>
  );
}