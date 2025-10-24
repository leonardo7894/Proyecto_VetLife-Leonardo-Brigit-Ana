import { render, screen } from "@testing-library/react";
import Formulario from "../src/components/sacarTurno";
import { MemoryRouter, Route, Routes } from "react-router";

test("Verificar que el campo 'telefono' en el formulario", () => {
  render(
    <MemoryRouter initialEntries={["/formulario/vacunas"]}>
      <Routes>
        <Route
          path="/formulario/:especialidad"
          element={<Formulario pasoInicial={3} />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Teléfono:")).toBeInTheDocument();
});
