import { useNavigate } from "react-router";
import "../App.css"


export default function Radiologia(){
    const pagina = useNavigate()
    const irAFormulario = () => {
        pagina("/sacar-turno/Radiologia")
    }
    return(
        <div style={{backgroundColor: "white"}}>
            <h1 className="letraPrincipal">
                Radilografia
            </h1>
            <div style={{display: "flex", gap: "10px", textAlign: "left"}}>
               <div style={{fontSize:"23px", color:"#0c343d", fontWeight: "lighter"}}>
                  <p style={{padding: "20px"}}>La radiografía en una veterinaria es una herramienta de diagnóstico por imagen que permite observar el interior del cuerpo de los animales sin necesidad de cirugía. A través de rayos X, se pueden obtener imágenes de los huesos, órganos y tejidos, lo que ayuda al veterinario a detectar fracturas, cuerpos extraños, problemas pulmonares, enfermedades cardíacas y otras afecciones internas. Es un procedimiento rápido, seguro y no invasivo, fundamental para brindar un diagnóstico preciso y elegir el tratamiento adecuado para cada paciente.</p>
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