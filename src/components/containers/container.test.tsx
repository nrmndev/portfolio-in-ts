import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Container from "./container.component";

describe("Container Component", () => {
  test("renders container with children", () => {
    render(
      <Container>
        <p>Some children</p>
      </Container>
    );
    const el = screen.getByText("Some children", { exact: false });
    expect(el).toBeTruthy();
  });

  test("renders container with BG", () => {
    const tree = renderer
      .create(<Container bg="red">Some children</Container>)
      .toJSON();
    expect(tree).toHaveStyleRule("background", "red");
  });

  test("renders container with width 100% using props.fluid", () => {
    const tree = renderer
      .create(<Container fluid>Some children</Container>)
      .toJSON();
    expect(tree).toHaveStyleRule("width: 100%");
  });

  test("renders container with IMG as BG", () => {
    const tree = renderer
      .create(
        <Container img="http://somelink/someimg.jpg">Some children</Container>
      )
      .toJSON();
    expect(tree).toHaveStyleRule(`   background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;`);
  });

  test("renders container as 'Section' using props.as", () => {
    render(
      <Container as="section">
        <p>Some children</p>
      </Container>
    );
    const el = document.querySelector("section");
    expect(el).toBeTruthy();
  });

  test("renders container as 'Aside' using props.as", () => {
    render(
      <Container as="aside">
        <p>Some children</p>
      </Container>
    );
    const el = document.querySelector("aside");
    expect(el).toBeTruthy();
  });

  test("renders container as 'Article' using props.as", () => {
    render(
      <Container as="article">
        <p>Some children</p>
      </Container>
    );
    const el = document.querySelector("article");
    expect(el).toBeTruthy();
  });

  test("renders container as 'Div (default)' using props.as", () => {
    render(
      <Container as="div">
        <p>Some children</p>
      </Container>
    );
    const el = document.querySelector("div");
    expect(el).toBeTruthy();
  });

  test("renders container with id = 'Banner' using HTMLAttributes", () => {
    render(
      <Container id="Banner">
        <p>Some children</p>
      </Container>
    );
    const el = document.getElementById("Banner");
    expect(el).toBeInTheDocument();
  });
});
