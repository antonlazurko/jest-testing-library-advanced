import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from '../Search';

describe('Search', () => {
    test('should render', () => {
        render(<Search />);
        expect(screen.getByRole('searchbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    test('should handle input change', async() => {
        render(<Search />);
        const input = screen.getByRole('searchbox');
        await userEvent.type(input, 'test');
        expect(input).toHaveValue('test');
    });
    test('should handle form submit', async() => {
        const cb = jest.fn();
        render(<Search cb={cb}/>);

        const input = screen.getByRole('searchbox');
        const button = screen.getByRole('button');

        await userEvent.type(input, 'test');
        await userEvent.click(button);

        expect(input).toHaveValue('test');
        expect(cb).toHaveBeenCalledTimes(1);
        expect(cb).toHaveBeenCalledWith('test');
    });
    test('should handle Enter on key press', async() => {
        const cb = jest.fn();

        render(<Search cb={cb}/>);

        const input = screen.getByRole('searchbox');

        await userEvent.type(input, 'test{enter}');

        expect(cb).toHaveBeenCalledWith('test');
    });
});