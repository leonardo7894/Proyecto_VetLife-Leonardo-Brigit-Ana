import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TurnoAgendado from "../src/components/turnoAgendado";

test("Verificar que el campo 'hora' en el comprobante", () => {
  render(
    <MemoryRouter>
      <TurnoAgendado />
    </MemoryRouter>
  );

  expect(screen.getByText("Hora:")).toBeInTheDocument();
});
