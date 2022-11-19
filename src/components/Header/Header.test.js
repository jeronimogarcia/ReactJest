import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header - Tests del componente", () => {
  test("El Header se renderiza correctamente", () => {
    const r = render(<Header />);
    expect(r).toBeDefined();
  });
  test("El titulo se renderiza correctamente", () => {
    render(<Header />);
    const title = screen.getByText("Unit Testing");
    expect(title).toBeInTheDocument();
  });
  test("El titulo del logo se renderiza correctamente", () => {
    render(<Header />);
    const title = screen.getByText("react", {exact: false } );
    expect(title).toBeInTheDocument();
  });
  test("El logo se renderiza correctamente", () => {
    render(<Header />);
    const logo = screen.getByRole('logo');
    expect(logo).toBeInTheDocument();
  });
});
