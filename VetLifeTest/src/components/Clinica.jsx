import { useNavigate } from "react-router";
import "../App.css"


export default function Clinica(){
    const pagina = useNavigate()
    const irAFormulario = () => {
        pagina("/sacar-turno/Clinica")
    }
    return(
        <div style={{backgroundColor: "white"}}>
            <h1 className="letraPrincipal">
                Esto es Clinica
            </h1>
            <div style={{display: "flex", gap: "10px", textAlign: "left"}}>
               <div style={{fontSize:"23px", color:"#0c343d", fontWeight: "lighter"}}>
                  <p style={{padding: "20px"}}>La clínica veterinaria es el primer punto de atención donde se evalúa de forma general la salud del animal. Aquí se realiza la consulta clínica, donde el veterinario examina al paciente, escucha los síntomas que presenta y observa su comportamiento. A partir de esta evaluación inicial, se puede determinar si el caso requiere estudios complementarios o atención especializada. Según los hallazgos, el profesional puede derivar al animal a otras áreas como radiología, ecografía, laboratorio, traumatología, cardiología u otras especialidades. Es un espacio clave para detectar qué le está ocurriendo a la mascota y orientar su diagnóstico y tratamiento de manera precisa.</p>
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