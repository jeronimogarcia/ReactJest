import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("App - Tests del componente", () => {
  test("La app se renderiza", () => {
    const r = render(<App />);
    expect(r).toBeDefined();
  });
  test("Añadir una nueva nota - Test de integración", () => {
    const placeholdertext = "Introducir una nota nueva";
    const r = render(<App />);
    const input = r.getByPlaceholderText(placeholdertext);
    const button = r.getByLabelText("button-add");
    const div = r.getByLabelText("listado-notas");
    const hijosInicial = div.childElementCount;
    fireEvent.change(input, { target: { value: "Ir al super" } });
    fireEvent.click(button);
    const hijosFinal = div.childElementCount;
    expect(hijosFinal).toBeGreaterThan(hijosInicial);
  });
});
