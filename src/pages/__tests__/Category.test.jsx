import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithRouter } from "../../utils/testing";
import * as api from '../../api'

import { Category } from "../Category";

const apiSpy = jest.spyOn(api, 'getFilteredCategory')

describe("Category", () => {
    test("should render correctly", async() => {
        apiSpy.mockResolvedValueOnce({meals: [{
            idMeal: '1',
            strMeal: 'First',
            strCategory: 'Category',
            strArea: 'Area',
            strInstructions: 'Instructions',
            strMealThumb: 'Thumb',
            strIngredient1: 'Ingredient1',
            strMeasure1: 'Measure1',
            strYoutube: 'Youtube',
        },
        {
            idMeal: '2',
            strMeal: 'Second',
            strCategory: 'Category',
            strArea: 'Area',
            strInstructions: 'Instructions',
            strMealThumb: 'Thumb',
            strIngredient1: 'Ingredient1',
            strMeasure1: 'Measure1',
            strYoutube: 'Youtube',
        }]})
        renderWithRouter(<Category/>);
        const preloader = screen.getByRole("progressbar");
        expect(preloader).toBeInTheDocument();
        await waitForElementToBeRemoved(preloader);
        expect(screen.getByText('First')).toBeInTheDocument();
        expect(screen.getByText('Second')).toBeInTheDocument();
    });

    test("should render correctly", async() => {
        apiSpy.mockResolvedValueOnce({meals: []})
        renderWithRouter(<Category/>);
        const preloader = await screen.findByRole("progressbar");
        const button = await screen.findByRole("button", { name: /Go Back/});
        expect(preloader).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
})