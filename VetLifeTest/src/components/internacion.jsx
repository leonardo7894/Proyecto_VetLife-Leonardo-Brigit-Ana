import { useNavigate } from "react-router";
import "../App.css"


export default function Internacion(){
    const pagina = useNavigate()
    const irAFormulario = () => {
        pagina("/sacar-turno/Internacion")
    }
    return(
        <div style={{backgroundColor: "white"}}>
            <h1 className="letraPrincipal">
                Internaciones
            </h1>
            <div style={{display: "flex", gap: "10px", textAlign: "left"}}>
               <div style={{fontSize:"23px", color:"#0c343d", fontWeight: "lighter"}}>
                  <p style={{padding: "20px"}}>La internación en una veterinaria es un servicio destinado al cuidado intensivo de animales que requieren atención médica constante. Puede ser necesaria en casos de cirugías, enfermedades graves, accidentes o tratamientos que no pueden realizarse de forma ambulatoria. Durante la internación, las mascotas son monitoreadas por profesionales, reciben medicación, hidratación y alimentación adecuada, y se les brinda un ambiente controlado para favorecer su recuperación. Es un espacio seguro pensado para garantizar el bienestar y la pronta mejora del paciente.</p>
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