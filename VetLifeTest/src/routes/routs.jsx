import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/Home.jsx";
import Farmacia from "../components/Farmacia.jsx";
import Reserva from "../components/Reserva.jsx";
import Perfil from "../components/Perfil.jsx";
import Higiene from "../components/Higiene.jsx";
import Accesorios from "../components/Accesorios.jsx";
import Comida from "../components/Comida.jsx";
import Cepillos from "../components/Cepillos.jsx";
import Otros from "../components/Otros.jsx";
import Alimentos from "../components/Alimentos.jsx";
import Transportadoras from "../components/transportadoras.jsx";
import Jarabes from "../components/jarabes.jsx";
import Camas from "../components/camas.jsx";
import Pipetas from "../components/pipetas.jsx";
import Vacunas from "../components/vacunas.jsx";
import Gatos from "../components/gatos.jsx";
import Conejos from "../components/conejos.jsx";
import Aves from "../components/Aves.jsx";
import Ropa from "../components/ropa.jsx";
import Collares from "../components/collares.jsx";
import Juguetes from "../components/Juguetes.jsx";
import Shampoo from "../components/Shampoo.jsx";
import Pastillas from "../components/pastillas.jsx";
import Perros from "../components/perros.jsx";
import CuadradoPerfil from "../components/cuadradoPerfil.jsx";
import InicioSesion from "../components/inicioSesion.jsx";
import Comprobante from "../components/comprobante.jsx";
import Cirujias from "../components/cirujias.jsx";
import Vacunaciones from "../components/vacunaciones.jsx";
import Consultas from "../components/consultas.jsx";
import Ecografia from "../components/ecografia.jsx";
import Radiologia from "../components/radiologia.jsx";
import Traumatologia from "../components/traumatologia.jsx";
import Internacion from "../components/internacion.jsx";
import Laboratorio from "../components/laboratorio.jsx";
import CirujiaGeneral from "../components/cirujiaGeneral.jsx";
import Urgencias from "../components/urgencia.jsx";
import Clinica from "../components/Clinica.jsx";
import Cardiologia from "../components/cardiologia.jsx";
import SacarTurno from "../components/sacarTurno.jsx";
import TurnoAgendado from "../components/turnoAgendado.jsx";
import Formulario from "../components/sacarTurno.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "farmacia", element: <Farmacia /> },
      { path: "juguetes", element: <Juguetes /> },
      { path: "reserva", element: <Reserva /> },
      { path: "perfil", element: <Perfil/> },
      { path: "higiene", element: <Higiene/> },
      { path: "accesorios", element: <Accesorios/> },
      { path: "comida", element: <Comida/> },
      { path: "shampoo", element: <Shampoo/> },
      { path: "cepillos", element: <Cepillos/> },
      { path: "otros", element: <Otros/> },
      { path: "alimentos", element: <Alimentos/>},
      { path: "pastillas", element: <Pastillas/>},
      { path: "transportadoras", element: <Transportadoras/>},
      { path: "jarabes", element: <Jarabes/> },
      { path: "camas", element: <Camas/> },
      { path: "pipetas", element: <Pipetas/> },
      { path: "vacunas", element: <Vacunas/> },
      { path: "perros", element: <Perros/> },
      { path: "gatos", element: <Gatos/> },
      { path: "aves", element: <Aves/> },
      { path: "conejos", element: <Conejos/> },
      { path: "ropa", element: <Ropa/> },
      { path: "collares", element: <Collares/> },
      { path: "inicioSesion", element: <InicioSesion/> },
      { path: "cuadradoPerfil", element: <CuadradoPerfil/> },
      { path: "comprobante", element: <Comprobante/> },
      { path: "cirujias", element: <Cirujias/> },
      { path: "vacunaciones", element: <Vacunaciones/> },
      { path: "consultas", element: <Consultas/> },
      { path: "Ecografia", element: <Ecografia/> },
      { path: "Radiologia", element: <Radiologia/> },
      { path: "Traumatologia", element: <Traumatologia/> },
      { path: "Internacion", element: <Internacion/> },
      { path: "Laboratorio", element: <Laboratorio/> },
      { path: "CirujiaGeneral", element: <CirujiaGeneral/> },
      { path: "Urgencias", element: <Urgencias/> },
      { path: "Clinica", element: <Clinica/> },
      { path: "Cardiologia", element: <Cardiologia/> },
      { path: "sacar-turno/:especialidad", element: <Formulario/> },
      { path: "turnoAgendado", element: <TurnoAgendado/> },

    ],
  },
]);

export default router;
