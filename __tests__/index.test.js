import Home from "../pages";
import { render, screen } from "@testing-library/react";
import HomePage from "../pages";

test("test", () => {
  render(<HomePage />);
  const element = screen.getByRole("heading", {
    name: /Wellcome💝/,
  });
  expect(element).toBeInTheDocument();
});
