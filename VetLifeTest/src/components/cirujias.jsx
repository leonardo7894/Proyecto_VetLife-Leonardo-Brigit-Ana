import {Link} from "react-router-dom";
import "../App.css"

export default function Cirujias(){
    const especialidades = [
        { nombre: "Cirugía General", ruta: "/CirujiaGeneral" },
        { nombre: "Clínica", ruta: "/Clinica" },
        { nombre: "Urgencias", ruta: "/Urgencias" },
        { nombre: "Cardiología", ruta: "/Cardiologia" },
        { nombre: "Radiología", ruta: "/Radiologia" },
        { nombre: "Ecografía", ruta: "/Ecografia" },
        { nombre: "Traumatología", ruta: "/Traumatologia" },
        { nombre: "Internación", ruta: "/Internacion" },
        { nombre: "Laboratorio", ruta: "/Laboratorio" },
      ];
    return(
    <div style={{backgroundColor:"white"}}>
        <br/>
        <div style={{display: "flex"}}>
             <p style={{fontSize:"23px", color:"#0c343d", fontWeight: "lighter"}}>En nuestra sala de cirugía, cada intervención se realiza con el máximo cuidado, precisión y dedicación, porque entendemos que tu mascota es más que un animal: es un miembro invaluable de tu familia. Contamos con tecnología de vanguardia y un ambiente limpio, seguro y cómodo, lo que nos permite ofrecerle el mejor cuidado posible, dándote la tranquilidad de que está en las mejores manos durante todo el proceso.</p>
             <img src="./akkaka.jpeg" style={{padding: "20px", width:"580px", height: "500%"}}/>
       </div>
       <div>
       <section className="especializaciones">
      <h2>Especializaciones</h2>
      <div className="grid-especialidades">
        {especialidades.map((esp, index) => (
          <Link key={index} to={esp.ruta} className="item-especialidad">
            <img src="./akkaka.jpeg" alt={esp.nombre} className="imagen-especialidad" />
            <span>{esp.nombre}</span>
          </Link>
        ))}
      </div>
    </section>
       </div>
      </div>      
    );
}




// <div className="grid">
// {productos.map((prod) => (
//   <div key={prod.id}>
//     <img src={prod.imagen} className="imagenes" />
//     <p className="descripcion">{prod.descripcion}</p>
//     <p className="descripcion">${prod.precio}</p>
//     <button
//       onClick={() => agregarAlCarrito(prod)}
//       className="boton"
//     >
//       Añadir al Carrito
//     </button>
//   </div>
// ))}
// </div>
