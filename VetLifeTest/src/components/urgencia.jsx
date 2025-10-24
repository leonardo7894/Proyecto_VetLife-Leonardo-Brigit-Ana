import { useNavigate } from "react-router";
import "../App.css"


export default function Urgencias(){
    const pagina = useNavigate();
    const irAFormulario = () =>{
        pagina("/sacar-turno/urgencias")
    }
    return(
        <div style={{backgroundColor: "white"}}>
            <h1 className="letraPrincipal">
                Urgencias y Emergencias
            </h1>
            <div style={{display: "flex", gap: "10px", textAlign: "left"}}>
               <div style={{fontSize:"23px", color:"#0c343d", fontWeight: "lighter"}}>
                  <p style={{padding: "20px"}}>El servicio de urgencias y emergencias veterinarias brinda atención inmediata a mascotas que presentan situaciones críticas o inesperadas, como accidentes, intoxicaciones, sangrados o dificultades respiratorias. Está disponible para actuar con rapidez, estabilizar al animal y ofrecer los cuidados necesarios para preservar su vida y bienestar.</p>
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