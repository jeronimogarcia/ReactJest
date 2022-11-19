import { fireEvent, render } from "@testing-library/react";
import ToDo from "./ToDo";

describe("ToDo - Tests del componente", () => {
  test("El componente se renderiza correctamente", () => {
    const r = render(<ToDo />);
    expect(r).toBeDefined();
  });
  test("Se renderiza el input", () => {
    const placeholdertext = "Introducir una nota nueva";
    const r = render(<ToDo />);
    const input = r.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  });
  test("Se renderiza el botón", () => {
    const label = "button-add";
    const r = render(<ToDo />);
    const button = r.getByLabelText(label);
    expect(button).toBeDefined();
  });

  test("Ejecución del botón", () => {
    const mockF = jest.fn()
    const label = "button-add";
    const r = render(<ToDo addNota={mockF}/>);
    const button = r.getByLabelText(label);
    fireEvent.click(button);
  });
  test("Ejecución de la función cuando clickeo el botón", () => {
    const mockF = jest.fn();
    const r = render(<ToDo addNota={mockF} />);
    const button = r.getByLabelText("button-add");
    fireEvent.click(button);
    expect(mockF).toHaveBeenCalledTimes(1);
  });
});
