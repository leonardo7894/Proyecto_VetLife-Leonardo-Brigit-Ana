import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Urgencias from "../src/components/urgencia";

test("Verificar que exista el boton de volver a la pagina anterior", () => {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <Urgencias />,
      },
    ],
    {
      initialEntries: ["/"], // ruta inicial
    }
  );

  render(<RouterProvider router={router} />);

  // ejemplo de prueba
  expect(screen.getByText("Volver a la Pagina Anterior")).toBeInTheDocument();
  
});