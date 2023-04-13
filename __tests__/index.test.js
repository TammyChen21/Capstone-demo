import HomePage from "../pages";
import { render, screen } from "@testing-library/react";


test("test", () => {
  render(<HomePage />);
  const element = screen.getByRole("heading", {
    name: /Little Lucky Finds💝/,
  });
  expect(element).toBeInTheDocument();
});
