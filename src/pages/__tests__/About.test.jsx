import { screen, render } from "@testing-library/react";
import { About } from "../About";

describe("About", () => {
    test("should render", () => {
        render(<About />);
        expect(screen.getByRole('heading')).toMatchSnapshot();
    });
});