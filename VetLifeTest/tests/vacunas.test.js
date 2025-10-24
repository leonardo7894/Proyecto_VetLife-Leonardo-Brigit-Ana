import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Vacunas from "../src/components/vacunas";

test("Verificar que exista la vacuna1", () => {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <Vacunas />,
      },
    ],
    {
      initialEntries: ["/"], // ruta inicial
    }
  );

  render(<RouterProvider router={router} />);

  // ejemplo de prueba
  expect(screen.getByText("Vacuna1")).toBeInTheDocument();
});