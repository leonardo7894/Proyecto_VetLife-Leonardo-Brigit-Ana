import { useNavigate } from "react-router";
import "../App.css"


export default function Laboratorio(){
    const pagina = useNavigate()
    const irAFormulario = () => {
        pagina("/sacar-turno/Laboratorio")
    }
    return(
        <div style={{backgroundColor: "white"}}>
            <h1 className="letraPrincipal">
                Laboratorio
            </h1>
            <div style={{display: "flex", gap: "10px", textAlign: "left"}}>
               <div style={{fontSize:"23px", color:"#0c343d", fontWeight: "lighter"}}>
                  <p style={{padding: "20px"}}>El laboratorio en una veterinaria es un área clave para el diagnóstico de enfermedades en los animales. Allí se realizan análisis clínicos como estudios de sangre, orina, materia fecal y otros fluidos, que permiten detectar infecciones, alteraciones hormonales, problemas hepáticos, renales, entre otros. Gracias a estos estudios, el veterinario puede obtener información precisa sobre el estado de salud del paciente y tomar decisiones rápidas y acertadas sobre el tratamiento. El laboratorio es fundamental para prevenir, diagnosticar y controlar enfermedades de manera eficaz.</p>
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