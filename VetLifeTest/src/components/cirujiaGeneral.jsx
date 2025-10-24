import { useNavigate } from "react-router";
import "../App.css"


export default function CirujiaGeneral(){
    const pagina = useNavigate()
    const irAFormulario = () => {
        pagina("/sacar-turno/Cirujia General")
    }
    return(
        <div style={{backgroundColor: "white"}}>
            <h1 className="letraPrincipal">
                Esto es cirujia general
            </h1>
            <div style={{display: "flex", gap: "10px", textAlign: "left"}}>
               <div style={{fontSize:"23px", color:"#0c343d", fontWeight: "lighter"}}>
                  <p style={{padding: "20px"}}>Las cirugías veterinarias son intervenciones médicas realizadas para tratar afecciones, lesiones o mejorar la calidad de vida de los animales. Pueden ser de tipo menor, como castraciones, o más complejas, como operaciones ortopédicas o abdominales. Siempre se realizan bajo cuidados profesionales, con anestesia y seguimiento postoperatorio para garantizar el bienestar del paciente. </p>
                   <li style={{padding: "0px 0px 10px 20px"}}>Extraccion de pequños tumores</li>
                   <li style={{padding: "0px 0px 10px 20px"}}>Drenaje de absesos</li>
                   <li style={{padding: "0px 0px 10px 20px"}}>Castraciones</li>
                   <li style={{padding: "0px 0px 10px 20px"}}>Limpieza de heridas</li>
                </div>
               <img src="./akkaka.jpeg" style={{padding: "20px", width:"580px", height: "500%"}}/>
            </div>
            <div style={{display: "flex"}}>
            <button style={{width: "100%"}} className="btnVolverPagina" onClick={irAFormulario}>Sacar Turno</button>
            <button style={{width: "100%"}} className="btnVolverPagina" onClick={()=> pagina(-1)}>Volver a la Pagina Anterior</button>
            </div>
        </div>
    );
}