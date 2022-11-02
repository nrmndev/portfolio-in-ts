import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Text, { TEXT_COLOR, TEXT_VARIANTS } from "./text.component";

describe("Text Component", () => {
  test("renders text as H1", () => {
    render(<Text as={TEXT_VARIANTS.H1}>Sample Text</Text>);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeTruthy();
  });

  test("renders text as H2", () => {
    render(<Text as={TEXT_VARIANTS.H2}>Sample Text</Text>);
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toBeTruthy();
  });

  test("renders text as H3", () => {
    render(<Text as={TEXT_VARIANTS.H3}>Sample Text</Text>);
    const h3 = screen.getByRole("heading", { level: 3 });
    expect(h3).toBeTruthy();
  });

  test("renders text as H4", () => {
    render(<Text as={TEXT_VARIANTS.H4}>Sample Text</Text>);
    const h4 = screen.getByRole("heading", { level: 4 });
    expect(h4).toBeTruthy();
  });

  test("renders text as H5", () => {
    render(<Text as={TEXT_VARIANTS.H5}>Sample Text</Text>);
    const h5 = screen.getByRole("heading", { level: 5 });
    expect(h5).toBeTruthy();
  });

  test("renders text as H6", () => {
    render(<Text as={TEXT_VARIANTS.H6}>Sample Text</Text>);
    const h6 = screen.getByRole("heading", { level: 6 });
    expect(h6).toBeTruthy();
  });

  test("renders text as P", () => {
    render(<Text as={TEXT_VARIANTS.P}>Sample Text</Text>);
    const p = screen.getByText(
      (content, element) => element!.tagName.toLowerCase() === "p"
    );
    expect(p).toBeTruthy();
  });

  test("renders text aligned center", () => {
    const tree = renderer
      .create(
        <Text as={TEXT_VARIANTS.P} textAlign="center">
          Sample Text
        </Text>
      )
      .toJSON();
    expect(tree).toHaveStyleRule("text-align", "center");
  });

  test("renders color red", () => {
    const tree = renderer
      .create(
        <Text as={TEXT_VARIANTS.P} color={TEXT_COLOR.PRIMARY}>
          Sample Text
        </Text>
      )
      .toJSON();
    expect(tree).toHaveStyleRule("color", "red");
  });

  test("renders label wrapped in span", () => {
    render(
      <Text as={TEXT_VARIANTS.P} label="Some Label">
        Sample Text
      </Text>
    );
    const span = screen.getByText(
      (content, element) => element!.tagName.toLowerCase() === "span"
    );
    expect(span).toBeTruthy();
  });
});
