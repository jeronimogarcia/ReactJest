import { render, screen } from "@testing-library/react";
import Request from "./Request";

describe("Request - Tests del componente", () => {
  test("El componente se renderiza correctamente", () => {
    const r = render(<Request />);
    expect(r).toBeDefined();
  });
  test("Renderizar post si la petición pasa", async () => {
    render(<Request />);
    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
  test("Renderizar post si la petición pasa - mock", async () => {
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => [{title: 'First Post'}]
    })
    render(<Request />);
    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
