import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BsFillStarFill } from "react-icons/bs";
import Badge from "./badge-icon.component";
import "jest-styled-components";

describe("Badge Component", () => {
  test("renders icon as Img", () => {
    render(<Badge icon={<img data-testid="svg-element" />} />);
    const img = screen.queryByTestId("svg-element");
    expect(img).toBeInTheDocument();
  });

  test("renders icon as SVG", () => {
    render(<Badge icon={<svg data-testid="svg-element"></svg>} />);
    const svg = screen.queryByTestId("svg-element");
    expect(svg).toBeInTheDocument();
  });

  test("renders title props", () => {
    render(<Badge icon={<BsFillStarFill />} title="HELLO" color="red" />);
    const outputElement = screen.getByText("HELLO");
    expect(outputElement).toBeTruthy();
  });

  test("renders title and color props", () => {
    const tree = renderer
      .create(<Badge icon={<BsFillStarFill />} title="HELLO" color="red" />)
      .toJSON();
    render(<Badge icon={<BsFillStarFill />} title="HELLO" />);
    const title = screen.getByText("HELLO");
    expect(title).toBeTruthy();
    expect(tree).toHaveStyleRule("color", "red");
  });
});
