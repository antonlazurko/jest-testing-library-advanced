import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/testing";
import { CategoryItem } from "../CategoryItem";

describe("CategoryItem", () => {
    test("should render correctly", () => {
        renderWithRouter(<CategoryItem strCategory="test"
            strCategoryThumb="/test.png"
            strCategoryDescription="test"/>);
        expect(screen.getByRole("article")).toMatchSnapshot();
    });
})