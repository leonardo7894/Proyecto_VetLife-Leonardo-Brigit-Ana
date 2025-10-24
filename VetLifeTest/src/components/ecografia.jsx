import { useNavigate } from "react-router";
import "../App.css"


export default function Ecografia(){
    const pagina = useNavigate()
    const irAFormulario = () => {
        pagina("/sacar-turno/Ecografia")
    }
    return(
        <div style={{backgroundColor: "white"}}>
            <h1 className="letraPrincipal">
            Ecografia
            </h1>
            <div style={{display: "flex", gap: "10px", textAlign: "left"}}>
               <div style={{fontSize:"23px", color:"#0c343d", fontWeight: "lighter"}}>
                  <p style={{padding: "20px"}}>La ecografía en una veterinaria es un método de diagnóstico por imagen que utiliza ondas de sonido para visualizar los órganos internos de los animales en tiempo real. Es una técnica no invasiva e indolora que permite examinar el abdomen, el corazón, el útero y otros órganos blandos sin necesidad de cirugía. Es muy útil para detectar gestaciones, masas, líquidos anormales o alteraciones en los tejidos. Gracias a la ecografía, el veterinario puede obtener información detallada y precisa para tomar decisiones clínicas más seguras.</p>
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