import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";


export default function Juguetes() {
  const [carrito, setCarrito] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const productos = [
    { id: 1, descripcion: "hola", imagen: "./akkaka.jpeg", precio: 1 },
    { id: 2, descripcion: "chau", imagen: "./akkaka.jpeg", precio: 2 },
    { id: 3, descripcion: "jijijija", imagen: "./akkaka.jpeg", precio: 3 },
    { id: 4, descripcion: "helooo", imagen: "./akkaka.jpeg", precio: 4 },
    { id: 5, descripcion: "meow", imagen: "./akkaka.jpeg", precio: 5 },
    { id: 6, descripcion: "grrr", imagen: "./akkaka.jpeg", precio: 6 },
    { id: 7, descripcion: "dale moreno", imagen: "./akkaka.jpeg", precio: 7 },
    { id: 8, descripcion: "tralalero tralala", imagen: "./akkaka.jpeg", precio: 23.800 },
  ];
  //cuando arranca gurada lo que habia antes 
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
      <h1>Juguetes</h1>
      <img src="./akkaka.jpeg" className="portada" />
      <h2 className="descripcion">Gatos</h2>

{/* ACA SE PONE EN EL ORDEN QUE QUIERAS LOS ELEMENTOS, PERO PEIMERO DEBE ESTAR EN EL JSON DE ARRIBA :)*/}
      <div className="grid">
        {productos.map((prod) => (
          <div key={prod.id}>
            <img src={prod.imagen} className="imagenes" />
            <p className="descripcion">{prod.descripcion}</p>
            <p className="descripcion">${prod.precio}</p>
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
          <h3 style={{ marginTop: 0 }}>🛒 Tu lista de Compras</h3>
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
                  <span style={{ flex: 1 }}>$ {item.precio}</span>

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