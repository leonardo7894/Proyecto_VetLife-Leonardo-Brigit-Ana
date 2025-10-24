import { useState } from "react";

export default function Home() {
  const [mensaje] = useState("Esto es el Home");
  const [pagina, setPagina] = useState(false);

  return (
    <div>
      <h1>hola mundo</h1>
    </div>
  );
}
