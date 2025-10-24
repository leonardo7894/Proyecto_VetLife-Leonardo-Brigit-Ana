import { useNavigate } from "react-router";
import "../App.css"


export default function Traumatologia(){
    const pagina = useNavigate();
    const irAFormulario = () => {
        pagina("/sacar-turno/Traumatologia")
    }
    return(
        <div style={{backgroundColor: "white"}}>
            <h1 className="letraPrincipal">
              Traumatologia y Ortopedia
            </h1>
            <div style={{display: "flex", gap: "10px", textAlign: "left"}}>
               <div style={{fontSize:"23px", color:"#0c343d", fontWeight: "lighter"}}>
                  <p style={{padding: "20px"}}>La traumatología y ortopedia en veterinaria son ramas especializadas que se encargan del diagnóstico, tratamiento y rehabilitación de lesiones en huesos, articulaciones, músculos y ligamentos de los animales. La traumatología se enfoca en problemas causados por golpes, caídas o accidentes, como fracturas o luxaciones, mientras que la ortopedia trata afecciones del desarrollo, deformidades o enfermedades articulares crónicas. Estas especialidades son fundamentales para mejorar la movilidad, aliviar el dolor y recuperar la calidad de vida de las mascotas, muchas veces combinando cirugía, fisioterapia y cuidados postoperatorios.</p>
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