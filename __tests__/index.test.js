import Home from "../pages";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Home />);
  const element = screen.getByRole("heading", {
    name: /Siqis tolles Capstone Project/,
  });
  expect(element).toBeInTheDocument();
});
