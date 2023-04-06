import HomePage from "../pages";
import { render, screen } from "@testing-library/react";


test("test", () => {
  render(<HomePage />);
  const element = screen.getByRole("heading", {
    name: /Wellcome💝/,
  });
  expect(element).toBeInTheDocument();
});
