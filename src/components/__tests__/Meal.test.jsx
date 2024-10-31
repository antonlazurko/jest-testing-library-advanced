import { screen } from '@testing-library/react';
import {renderWithRouter} from "../../utils/testing";
import { Meal } from '../Meal';

describe('Meal', () => {
    test('should render correctly', () => {
        renderWithRouter(<Meal strMeal='test' idMeal='test' strMealThumb='/meal.png'/>);
        expect(screen.getByRole('article')).toMatchSnapshot();
    });
})