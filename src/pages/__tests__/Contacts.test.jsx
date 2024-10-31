import { screen, render } from "@testing-library/react";
import { Contact } from "../Contact";

describe("Contact", () => {
    test("should render", () => {
        render(<Contact />);
        expect(screen.getByRole('heading')).toMatchSnapshot();
    });
});