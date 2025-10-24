import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TurnoAgendado from "../src/components/turnoAgendado";

test("Verificar que el campo 'nombre' en el comprobante", () => {
  render(
    <MemoryRouter>
      <TurnoAgendado />
    </MemoryRouter>
  );

  expect(screen.getByText("Nombre:")).toBeInTheDocument();
});
