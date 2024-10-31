import { screen, render } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
    test('should render', () => {
        render(<Footer />);
        expect(screen.getByText(/Copyright Text/)).toBeInTheDocument();
        expect(screen.getByRole('link', { href: 'https://github.com/michey85/react-food' })).toBeInTheDocument();
    });
});