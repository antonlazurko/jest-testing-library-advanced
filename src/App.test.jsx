import { screen } from "@testing-library/react";
import { renderWithRouter } from "./utils/testing";
import App from "./App";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    BrowserRouter: ({children}) => <div>{children}</div>,
}))
jest.mock('./pages/Home', () => ({
    Home: () => <div data-testid="Home">Home</div>
}) )
jest.mock('./pages/About', () => ({
    About: () => <div data-testid="About">About</div>
}) )
jest.mock('./pages/Contact', () => ({
    Contact: () => <div data-testid="Contact">Contact</div>
}) )
jest.mock('./pages/Recipe', () => ({
    Recipe: () => <div data-testid="Recipe">Recipe</div>
}) )
jest.mock('./pages/NotFound', () => ({
    NotFound: () => <div data-testid="NotFound">NotFound</div>
}) )

describe('App', () => {
    test('should render', () => {
        renderWithRouter(<App />)
        expect(screen.getByTestId('Home')).toBeInTheDocument()
    })

    test('should render NotFound', () => {
        renderWithRouter(<App />, {
            initialEntries: ['/test']
        })
        expect(screen.getByTestId('NotFound')).toBeInTheDocument()
    })

    test('should render Recipe', () => {
        renderWithRouter(<App />, {
            initialEntries: ['/meal/52977']
        })
        expect(screen.getByTestId('Recipe')).toBeInTheDocument()
    })
    test('should render Category', () => {
        renderWithRouter(<App />, {
            initialEntries: ['/category/Beef']
        })
        expect(screen.getByTestId('Category')).toBeInTheDocument()
    })


})