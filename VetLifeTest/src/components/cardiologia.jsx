import { useNavigate } from "react-router";
import "../App.css"


export default function Cardiologia(){
    const pagina = useNavigate()
    const irAFormulario = () => {
        pagina("/sacar-turno/Cardiologia")
    }
    return(
        <div style={{backgroundColor: "white"}}>
            <h1 className="letraPrincipal">
                Cardiologia
            </h1>
            <div style={{display: "flex", gap: "10px", textAlign: "left"}}>
               <div style={{fontSize:"23px", color:"#0c343d", fontWeight: "lighter"}}>
                  <p style={{padding: "20px"}}>La cardiología veterinaria se encarga del diagnóstico y tratamiento de enfermedades del corazón y el sistema circulatorio en animales. Mediante estudios como ecocardiogramas, electrocardiogramas y radiografías, se detectan afecciones cardíacas y se define el tratamiento más adecuado para mejorar la calidad de vida de la mascota.</p>
                </div>
               <img src="./akkaka.jpeg" style={{padding: "20px", width:"580px", height: "500%"}}/>
            </div>
            <div style={{display: "flex"}}>
            <button style={{width: "100%"}} className="btnVolverPagina"  onClick={irAFormulario}>Sacar Turno</button>
            <button style={{width: "100%"}} className="btnVolverPagina" onClick={()=> pagina(-1)}>Volver a la Pagina Anterior</button>
            </div>
        </div>
    );
}