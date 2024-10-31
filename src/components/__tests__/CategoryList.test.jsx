import {screen} from '@testing-library/react';
import {CategoryList} from '../CategoryList';
import { renderWithRouter } from '../../utils/testing';

describe('CategoryList', () => {
    test('should render correctly', () => {
        renderWithRouter(<CategoryList catalog={[ {strCategory:"test", idCategory: 'test',
            strCategoryThumb:"/test.png",
            strCategoryDescription: "test"}, {strCategoryDescription: "test", idCategory: 'test2', strCategory: "test", strCategoryThumb: "/test.png"}]}/>);
        expect(screen.getByRole('list')).toMatchSnapshot();
    });
    test('should render correctly with empty array', () => {
        renderWithRouter(<CategoryList/>);
        expect(screen.getByRole('list')).toMatchSnapshot();
    });
})