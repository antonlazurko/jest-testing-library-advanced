import { screen, render } from "@testing-library/react";
import { NotFound } from "../NotFound";

describe("NotFound", () => {
    test("should render", () => {
        render(<NotFound />);
        expect(screen.getByRole('heading')).toMatchSnapshot();
    });
});