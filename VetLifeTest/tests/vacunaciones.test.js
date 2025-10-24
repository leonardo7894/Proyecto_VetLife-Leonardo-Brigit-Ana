import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Vacunaciones from "../src/components/vacunaciones";

test("Verificar que la vacuna contra el Moquillo exista ", () => {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <Vacunaciones />,
      },
    ],
    {
      initialEntries: ["/"], // ruta inicial
    }
  );

  render(<RouterProvider router={router} />);

  // ejemplo de prueba
  expect(screen.getByText("Moquillo")).toBeInTheDocument();
});
