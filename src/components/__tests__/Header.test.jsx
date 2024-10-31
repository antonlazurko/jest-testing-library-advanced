import { screen } from '@testing-library/react';
import { renderWithRouter } from "../../utils/testing";
import { Header } from '../Header';

describe('Header', () => {
    test('should render', () => {
        renderWithRouter(<Header />);
        expect(screen.getByText('React Food')).toBeInTheDocument();
        expect(screen.getAllByRole('link')).toHaveLength(3);
    });
})