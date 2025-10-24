import { useNavigate } from "react-router";
import "../App.css"


export default function Vacunaciones(){
    const pagina = useNavigate();
    return(
        <div style={{backgroundColor: "white"}}>
            <h1 className="letraPrincipal">
                Vacunaciones
            </h1>
            <h2>Vacunas obligatoras</h2>
            <div style={{ textAlign: "left"}}>
               <div className="vacunas">
                   <h3 style={{padding: "0px 0px 0px 15px"}}>Moquillo</h3>
                  <p style={{padding: "10px 0px 0px 15px"}}>El moquillo o distemper es una <b> enfermedad viral que afecta a los perros </b> y compromete a los sistemas respiratorio y digestivo de tu mascota, derivando en una serie de síntomas graves, como vómitos, diarrea, tos, conjuntivitis, neumonía y encefalitis. En casos severos, esta afección puede tener efectos también en el sistema nervioso e, incluso, causar la muerte.La inmunización contra esta enfermedad suele venir con las vacunas polivalentes, (las tres primeras) aplicadas mientras es cachorro. Tenés que validar con tu veterinario para que asigne <b> el refuerzo pertinente que, usualmente, se aplica de manera anual.</b></p>
                  <button style={{width: "100%"}} className="btnVolverPagina" onClick={() => pagina("/sacar-turno/Vacuna contra Moquillo")}>Sacar Turno</button>
                  <br/> <br/>
                  <h3 style={{padding: "0px 0px 0px 15px"}}>Parvovirus</h3>
                  <p style={{padding: "10px 0px 0px 15px"}}> Existe un alto riesgo de infección con esta infección vírica. Se transmite a través de los excrementos. Tu mascota podría infectarse al beber agua de un lago. <br/> <br/>Los síntomas son vómitos intensos, diarrea acuosa y sanguinolenta y fiebre. Si se produce una intoxicación sanguínea, la enfermedad puede ser mortal.<br/> <br/> <b>La vacuna puede administrarse a partir de la 4ª semana de vida, pero debe administrarse como muy tarde en la 8ª semana. La vacunación debe repetirse en la 12ª, 16ª semana de vida y en el 15º mes de vida. Esto completa la inmunización básica. La vacuna de refuerzo se administra cada 3 años.</b> </p>                  
                  <button style={{width: "100%"}} className="btnVolverPagina" onClick={() => pagina("/sacar-turno/Vacuna contra Parvovirus")}>Sacar Turno</button>
                  <br/> <br/>
                  <h3 style={{padding: "0px 0px 0px 15px"}}>Rabia</h3>
                  <p style={{padding: "10px 0px 0px 15px"}}>La rabia es una enfermedad viral que <b>vulnera el sistema nervioso central </b>. Es una dolencia zoonótica, lo que significa que puede afectar a todos los mamíferos, lo que a su vez indica que existe <b> riesgo de ser transmitida de los animales a los humanos</b>. Se adquiere a través de la saliva, por lo que una mordida o incluso un arañazo de un animal infectado basta para contagiar a otro.</p>
                  <p style={{padding: "10px 0px 0px 15px"}}>Tené en cuenta que <b> la rabia es una enfermedad mortal </b>, por lo que es importante vacunar a tu perro contra ella, y aplicar los refuerzos pertinentes, para lo cual es ideal, con el carné de tu mascota, acudir al veterinario para recibir las indicaciones específicas para garantizar su bienestar.</p>
                  <button style={{width: "100%"}} className="btnVolverPagina" onClick={() => pagina("/sacar-turno/Vacuna contra Rabia")}>Sacar Turno</button>
                  <br/> <br/>
                </div>
                <h2 style={{textAlign: "center"}}>Vacunas Opcionales</h2>
               <div className="vacunas">
                <h3 style={{padding: "0px 0px 0px 15px"}}>Leptospirosis</h3>
                  <p style={{padding: "10px 0px 0px 15px"}}>La leptospirosis es una enfermedad bacteriana que se transmite a través de la orina de perros contagiados. Es importante prevenirla, pues también <b>tiene la capacidad de afectar humanos </b>. Tras verse afectado el organismo de tu mascota, puede presentar una serie de síntomas, como escalofríos, vómitos, diarrea, fiebre, dolor muscular y convulsiones.</p>
                  <p style={{padding: "10px 0px 0px 15px"}}>Como dato adicional, es importante vacunar a tu perro y darle los refuerzos necesarios, pues si se recupera de esta enfermedad, <b> aún puede volver a verse afectado </b> en el futuro, aunque con una variante diferente a la primera.</p>
                  <button style={{width: "100%"}} className="btnVolverPagina" onClick={() => pagina("/sacar-turno/Vacuna contra Leptospirosis")}>Sacar Turno</button>
                  <br/><br/>
                  <h3 style={{padding: "0px 0px 0px 15px"}}>Parainfluenza</h3>
                  <p style={{padding: "10px 0px 0px 15px"}}>La parainfluenza es un virus que <b> puede causar una tos seca y aguda </b>. También conocida como “tos de las perreras”, es causada por la bacteria de la bordetella y se transmite por vía aérea, y  <b>es más común cuando los animales comparten con otros </b>.</p>
                  <p style={{padding: "10px 0px 0px 15px"}}>Puede presentar sintomatología como tos, fiebre, arcadas, expulsión de flemas, debilitamiento y pérdida de apetito, vómitos e incluso bronconeumonía.</p>
                  <button style={{width: "100%"}} className="btnVolverPagina" onClick={() => pagina("/sacar-turno/Vacuna contra Parainfluenza")}>Sacar Turno</button>
                  <br/><br/>
                  <h3 style={{padding: "0px 0px 0px 15px"}}>Enfermedad de Lyme</h3>
                  <p style={{padding: "10px 0px 0px 15px"}}>Es una <b> enfermedad bacteriana transmitida por la picadura de garrapatas </b>. Esta afección puede causar una variedad de síntomas, como fiebre, fatiga, dolores musculares y articulares, y erupciones cutáneas.</p>
                  <p style={{padding: "10px 0px 0px 15px"}}>Debe ser tratada pues también <b> existe el riesgo de que derive en una enfermedad renal </b> que puede ser mortal para el animal.</p>
                  <p style={{padding: "10px 0px 0px 15px"}}>La mayoría de las inmunizaciones se realizan <b> durante su etapa inicial de vida </b>, es decir que prevenir el parvovirus y otras enfermedades se puede realizar fortaleciendo sus defensas, por lo que la vacunación desde cachorro es la clave.</p>
                  <button style={{width: "100%"}} className="btnVolverPagina" onClick={() => pagina("/sacar-turno/Vacuna contra Enfermedad de Lyme")}>Sacar Turno</button>
                  <br/><br/>   
                  <h3 style={{padding: "0px 0px 0px 15px"}}>Leishmaniasis</h3>
                  <p style={{padding: "10px 0px 0px 15px"}}>La leishmaniasis es una <b> enfermedad parasitaria zoonótica transmitida por mosquitos </b>y es consecuencia de la respuesta inmunológica de la mascota ante esa bacteria. El resultado es que puede causar una amplia variedad de síntomas, entre los que aparecen pérdida de pelo, úlceras en la piel, inflamación de las articulaciones, sangrados, así como problemas renales y hepáticos.</p>
                  <p style={{padding: "10px 0px 0px 15px"}}>En este caso, al tratarse de una enfermedad de carácter parasitario <b> se puede prevenir </b> con el uso de pipetas antiparasitarias para perros.</p>
                  <button style={{width: "100%"}} className="btnVolverPagina" onClick={() => pagina("/sacar-turno/Vacuna contra Leishmaniasis")}>Sacar Turno</button>
                  <br/><br/>
                </div>
           </div>
            <div style={{display: "flex"}}>
            <button style={{width: "100%"}} className="btnVolverPagina" onClick={()=> pagina(-1)}>Volver a la Pagina Anterior</button>
            </div>
        </div>
    );
}