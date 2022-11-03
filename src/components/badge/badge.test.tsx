import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Badge from "./badge.component";
import "jest-styled-components";
import { ThemeProviderTestWrapper } from "../theme-provider/theme-provider.component";
import { BADGE_VARIANT } from "../theme-provider/utilities";
import { renderWithProviders } from "../../utils/test/test-utils";
import { useStore } from "react-redux";

describe("Badge Component", () => {
  jest.mock("axios");
  test("renders Badge with children props", () => {
    const store = useStore();
    render(
      <ThemeProviderTestWrapper>
        <Badge data-testid="badge" variant={BADGE_VARIANT.PRIMARY}>
          Hello
        </Badge>
      </ThemeProviderTestWrapper>
    );

    renderWithProviders(
      <Badge data-testid="badge" variant={BADGE_VARIANT.PRIMARY}>
        Hello
      </Badge>,
      { store }
    );
    const hello = screen.getByText("Hello");

    expect(hello).toBeInTheDocument();
  });

  test("renders Badge with variant = PRIMARY", () => {
    const tree = renderer
      .create(
        <ThemeProviderTestWrapper>
          <Badge data-testid="badge" variant={BADGE_VARIANT.PRIMARY}>
            Hello
          </Badge>
        </ThemeProviderTestWrapper>
      )
      .toJSON();
    expect(tree).toHaveStyleRule(`background: #43cea2`);

    expect(tree).toMatchSnapshot();
  });

  test("renders Badge with variant = SECONDARY", () => {
    const tree = renderer
      .create(
        <ThemeProviderTestWrapper>
          <Badge data-testid="badge" variant={BADGE_VARIANT.SECONDARY}>
            Hello
          </Badge>
        </ThemeProviderTestWrapper>
      )
      .toJSON();
    expect(tree).toHaveStyleRule(`background: #185a9d`);

    expect(tree).toMatchSnapshot();
  });

  test("renders Badge with variant = SUCCESS", () => {
    const tree = renderer
      .create(
        <ThemeProviderTestWrapper>
          <Badge data-testid="badge" variant={BADGE_VARIANT.SUCCESS}>
            Hello
          </Badge>
        </ThemeProviderTestWrapper>
      )
      .toJSON();
    expect(tree).toHaveStyleRule(`background: green`);

    expect(tree).toMatchSnapshot();
  });

  test("renders Badge with variant = WARNING", () => {
    const tree = renderer
      .create(
        <ThemeProviderTestWrapper>
          <Badge data-testid="badge" variant={BADGE_VARIANT.WARNING}>
            Hello
          </Badge>
        </ThemeProviderTestWrapper>
      )
      .toJSON();
    expect(tree).toHaveStyleRule(`background: yellow`);

    expect(tree).toMatchSnapshot();
  });
});
