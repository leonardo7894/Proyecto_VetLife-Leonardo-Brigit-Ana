import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  const [submenu, setSubmenu] = useState(null); 
  const [mostrarLista, setMostrarLista] = useState(false);
  const [carrito, setCarrito] = useState([]);
    
  useEffect(()=>{const intervalo = setInterval(()=>{
    const guardados =localStorage.getItem("carrito");
    const datos= guardados ? JSON.parse(guardados):[];
    setCarrito((prev)=>{
      const previo = JSON.stringify(prev);
      const nuevo = JSON.stringify(datos);
      return previo !== nuevo ? datos : prev;
    });
  }, 500);
  return()=> clearInterval(intervalo);
}, []);

  function eliminarDelCarrito(index) {
    const nuevoCarrito = carrito.filter((_, i)=> i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito",JSON.stringify(nuevoCarrito));
}
  // null = nada, "petshop" = menú PetShop, "higiene" = submenú de higiene

  return (
    <div className="titulos">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="btnCompras">
          <button onClick={()=> setMostrarLista(!mostrarLista)} className="nav-link active" style={{border: "solid #0c343d 1px"}}>Tu Lista de Compras</button>
          </li>
          <li>
            <Link to="/home" className="nav-link active">Home</Link>
          </li>
          <li className="dropdown">
            <p 
              className="nav-link"
              onClick={() => setSubmenu("petshop")}
            >
              Pet Shop
            </p>

            {/* Menú PET SHOP */}
            {submenu === "petshop" && (
              <ul className="dropdown-menu" style={{backgroundColor:"#0c343d"}}>
                <li>
                  <Link to="/juguetes" className="nav-link link">Juguetes</Link>
                </li>

                <li>
                  <button 
                    className="nav-link link" 
                    onClick={() => setSubmenu("higiene")}
                  >  
                    Higiene
                  </button>
                </li>

                <li>
                  <button 
                    className="nav-link link"
                    onClick={() => setSubmenu("accesorios")}
                  >
                     Accesorios
                  </button>
                </li>
                <li>
                  <button 
                    className="nav-link link" 
                    onClick={() => setSubmenu("comida")}
                  >
                    Comida
                  </button>
                </li>
                
              </ul>
            )}
            

            {/* Submenú HIGIENE */}
            {submenu === "higiene" && (
              <ul className="dropdown-menu" style={{backgroundColor:"#0c343d"}}>
                <li>
                  <button 
                    className="nav-link link" 
                    onClick={() => setSubmenu("petshop")}
                  >
                    Higiene
                  </button>
                </li>
                <li>
                  <Link to="/shampoo" className="nav-link">Shampoo</Link>
                </li>
                <li>
                  <Link to="/cepillos" className="nav-link">Cepillos</Link>
                </li>
                <li>
                  <Link to="/otros" className="nav-link">Otros</Link>
                </li>
              </ul>
            )}


            {submenu === "comida" && (
              <ul className="dropdown-menu" style={{backgroundColor:"#0c343d"}}>
                <li>
                  <button 
                    className="nav-link link" 
                    onClick={() => setSubmenu("petshop")}
                  >
                    Comida
                  </button>
                </li>
                <li>
                  <Link to="/perros" className="nav-link">Perros</Link>
                </li>
                <li>
                  <Link to="/gatos" className="nav-link">Gatos</Link>
                </li>
                <li>
                  <Link to="/conejos" className="nav-link">Conejos</Link>
                </li>                
                <li>
                  <Link to="/aves" className="nav-link">Aves</Link>
                </li>
              </ul>
            )}

            {submenu === "accesorios" && (
              <ul className="dropdown-menu" style={{backgroundColor:"#0c343d"}}>
                <li>
                  <button 
                    className="nav-link" 
                    onClick={() => setSubmenu("petshop")}
                  >
                    Accesorios
                  </button>
                </li>
                <li>
                  <Link to="/camas" className="nav-link">Camas</Link>
                </li>
                <li>
                  <Link to="/transportadoras" className="nav-link">Transportadoras</Link>
                </li>
                <li>
                  <Link to="/collares" className="nav-link">Collares</Link>
                </li>
                <li>
                  <Link to="/ropa" className="nav-link">Ropa</Link>
                </li>
              </ul>
            )}
          </li>
<li>
{mostrarLista && (
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
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setMostrarLista(false)}
            className="btnCerrar"
          >
            Cerrar
          </button>
          <Link to="/comprobante">
            <button className="btnCerrar"> ir a comprobante
            </button></Link>
        </div>
      )}
</li>



          {/* FARMACIA DROPDOWN */}
          <li className="dropdown">
            <p 
              className="nav-link" 
              onClick={() => setSubmenu("farmacia")}
            >
              Farmacia Online
            </p>

            {submenu === "farmacia" && (
              <ul className="dropdown-menu" style={{backgroundColor:"#0c343d"}}>
                <li>
                  <Link to="/jarabes" className="nav-link">Jarabes</Link>
                </li>
                <li>
                  <Link to="/pipetas" className="nav-link">Pipetas</Link>
                </li>
                <li>
                  <Link to="/pastillas" className="nav-link">Pastillas</Link>
                </li>
                <li>
                  <Link to="/alimentos" className="nav-link">Alimentos Medicados</Link>
                </li>
                <li>
                  <Link to="/vacunas" className="nav-link">Inyecciones y Vacunas</Link>
                </li>
              </ul>
            )}
            </li>
            <li className="dropdown">
            <p 
              className="nav-link"
              onClick={() => setSubmenu("reserva")}
            >
              Reserva de turnos
            </p>

            {/* Menú PET RESERA DE TURNOS */}
            {submenu === "reserva" && (
              <ul className="dropdown-menu" style={{backgroundColor:"#0c343d"}}>
               <li>
                  <Link to="/consultas" className="nav-link link">Consultas General</Link>
                </li>
                <li>
                  <Link to="/cirujias" className="nav-link link">Cirujias</Link>
                </li>

                <li>
                  <Link to="/vacunaciones" className="nav-link link">Vacunaciones</Link>
                </li>

                </ul>
            )} 
            </li>
            

          <li className="dropdown">
            <p className="nav-link"
              onClick={() => setSubmenu(submenu === "perfil" ? null : "perfil")}
            >
              <img src="./Perfil_icono.jpg" className="menu-perfil" style={{padding:"0"}}/>
            </p>

            {submenu === "perfil" && (

              <div className="menus-perfiles" style={{textAlign:"center",padding:"55px", backgroundColor:"#0c343d"}}>
              <h2>gmail de usuario</h2>
                <li>
                  <img src="./Perfil_icono.jpg" className="menu-perfil" style={{width:"80px", height:"80px"}}/>
                </li>
                <li>
                  <h2>¡Hola, nombre de usuario!</h2>
                </li>
                  <Link to="/inicioSesion" >
                  <button style={{borderRadius:"100px",  width: "100%",color: "black",boxShadow: "0 4px 10px rgba(0,0,0,0.1)",fontWeight: 600,backgroundColor: "white",padding: "10px"}}>
                   Iniciar Sesion
                 </button>
                  </Link>
                
                <br />
              </div>
            )}
            </li>
            </ul>
      </nav>
      

      <Outlet />
    </div>
  );
}

