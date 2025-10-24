import { useNavigate } from "react-router";
import "../App.css";

export default function Consultas(){

    const pagina = useNavigate();

    return(
        <div style={{backgroundColor: "white", padding: "30px"}}>
            <h1>Consultas Generales</h1>
           <div style={{display: "flex", gap:"10px"}}>
               <div>
               <p style={{padding: "0px 0px 0px 15px"}} className="vacunas">Las consultas generales en una veterinaria son el primer paso para evaluar la salud y el bienestar de las mascotas. Durante estas visitas, el profesional realiza un examen físico completo, revisa el historial médico del animal y responde las dudas del tutor. También se controlan aspectos como el peso, la alimentación, el estado de la piel, los oídos, la dentadura y la vacunación. Estas consultas permiten detectar a tiempo posibles enfermedades, ofrecer asesoramiento preventivo y mantener al día los cuidados esenciales para una vida saludable.</p>
               <button onClick={()=> pagina("/sacar-turno/Consulta General")}>Sacar Turno</button>
               </div>
               <img src="./akkaka.jpeg"/>
        </div>
        </div>
    );
}