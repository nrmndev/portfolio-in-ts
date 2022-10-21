import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Card, { CARD_VARIANTS } from "./card.component";

describe("Card Component", () => {
  test("snapshot", () => {
    const card = render(
      <Card variant={CARD_VARIANTS.WITHSHADOW}>Some items</Card>
    );
    expect(card).toMatchSnapshot();
  });
  test("renders card StyledCardBase", () => {
    const tree = renderer.create(<Card>Some item</Card>).toJSON();
    expect(tree).toHaveStyleRule(`border-radius: 10px;
        padding: 35px 50px 35px 50px;
        background: linear-gradient(165deg, #fff 50%, #edebeb 80%);
        position: relative;
        overflow: hidden;`);
  });

  test("renders card StyledCardWithShadow", () => {
    //render(<Card>Some item</Card>);
    const tree = renderer
      .create(<Card variant={CARD_VARIANTS.WITHSHADOW}>Some item</Card>)
      .toJSON();
    expect(tree).toHaveStyleRule(`box-shadow: 2px 2px 15px #d8d5d5;`);
  });
});
