import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/testing";
import { MealList } from "../MealList";

describe("MealList", () => {
    test("should render correctly", () => {
        renderWithRouter(<MealList meals={[{
            idMeal: "test",
            strMeal: "test",
            strMealThumb: "/test.png"
        }, {idMeal: "test2", strMeal: "test", strMealThumb: "/test.png"}]}/>);
        expect(screen.getByRole("list")).toMatchSnapshot();
    });
})