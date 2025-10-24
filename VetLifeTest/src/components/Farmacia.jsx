import { useState } from "react";

export default function Farmacia() {
  const [mensaje] = useState("Esto es la Farmacia");
  const [pagina, setPagina] = useState(false);

  return (
    <div>
        <h1>Farmacia</h1>
    </div>
  );
}
