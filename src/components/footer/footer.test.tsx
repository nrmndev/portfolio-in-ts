import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Footer from "./footer.component";

describe("Footer Component", () => {
  test("renders footer", () => {
    render(<Footer data-testid="footer-element" />);
    const footer = screen.getByText("NGSilvestre.com", { exact: false });
    expect(footer).toBeInTheDocument();
  });

  test("renders footer styles from styled component", () => {
    const tree = renderer
      .create(<Footer data-testid="footer-element" />)
      .toJSON();
    expect(tree).toHaveStyleRule("min-height: 58px");
  });
});
