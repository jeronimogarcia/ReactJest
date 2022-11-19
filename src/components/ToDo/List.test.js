import { render } from "@testing-library/react";
import List from "./List";

describe("List - Tests del componente", () => {
  test("El listado se renderiza de forma correcta", () => {
    const r = render(<List />);
    expect(r).toBeDefined();
  });
  test("El listado renderiza un listado correctamente", () => {
    const notas = ["Hacer las compras", "Barrer el patio"];
    const r = render(<List notas={notas} />);
    expect(r).toBeDefined();
  });
  test("El listado renderiza solo las notas que debe renderizar", () => {
    const notas = ["Hacer las compras", "Barrer el patio"];
    const r = render(<List notas={notas} />);
    const ol = r.getByLabelText("listado-notas");
    expect(ol.childElementCount).toBe(2);
  });
});