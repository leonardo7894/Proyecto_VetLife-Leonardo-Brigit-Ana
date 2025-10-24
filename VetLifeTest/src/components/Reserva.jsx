import { useState } from "react";

export default function Reserva() {
  const [mensaje] = useState("Esto es Reserva de Turnos");
  const [pagina, setPagina] = useState(false);

  return (
    <div>
      {pagina ? (
        <h2>{mensaje}</h2>
      ) : (
        <button onClick={() => setPagina(true)}>Ir al Reserva de Turnos</button>
      )}
    </div>
  );
}