import { fireEvent, act, render, screen } from "@testing-library/react";
import { passwordValidationErrors } from './constants/validation';

import App from "./App";
import * as waitMock from './helpers/wait';

const waitSpy = jest.spyOn(waitMock, 'wait');

describe("App", () => {

    test("should render App with form and title", () => {
        const {container} = render(<App />);
        expect(screen.getByTestId('app')).toBeInTheDocument()

        const userNameInput = screen.getByLabelText(/User name/);
        const passwordInput = screen.getByLabelText(/Password/);
        const submitButton = screen.getByRole('button', { name: /Create user/ });
        const title = container.querySelector('h1');

        expect(passwordInput).toBeInTheDocument();
        expect(userNameInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });

    test('should render App with error message when form was submit with weak  password', async () => {
        render(<App />);
        const userNameInput = screen.getByLabelText(/User name/);
        const passwordInput = screen.getByLabelText(/Password/);
        const submitButton = screen.getByRole('button', { name: /Create user/ });

        const successMessage = screen.queryByText(/created with password/);
        const errorMessage = screen.queryByText(passwordValidationErrors.length);

        expect(successMessage).not.toBeInTheDocument();
        expect(errorMessage).not.toBeInTheDocument();

        act(() => {
            fireEvent.change(userNameInput, {target: {value: 'test'}});
            fireEvent.change(passwordInput, {target: {value: '1234567'}});
            fireEvent.click(submitButton);
        })
        const errorMessageAfterSubmit = await screen.findByText(passwordValidationErrors.length);
        expect(errorMessageAfterSubmit).toBeInTheDocument();
    })

    test('should render App with success message when form was submit with strong  password', async () => {
        render(<App />);
        const userNameInput = screen.getByLabelText(/User name/);
        const passwordInput = screen.getByLabelText(/Password/);
        const submitButton = screen.getByRole('button', { name: /Create user/ });

        const successMessage = screen.queryByText(/created with password/);
        const errorMessage = screen.queryByText(passwordValidationErrors.length);

        expect(successMessage).not.toBeInTheDocument();
        expect(errorMessage).not.toBeInTheDocument();

        const promise = Promise.resolve();

        waitSpy.mockImplementationOnce(() => (promise));

        act(() => {
            fireEvent.change(userNameInput, {target: {value: 'test'}});
            fireEvent.change(passwordInput, {target: {value: '1234567Pp!'}});
            fireEvent.click(submitButton);
        })
        const successMessageAfterSubmit = await screen.findByText(/created with password/);
        expect(successMessageAfterSubmit).toBeInTheDocument();
    })
})