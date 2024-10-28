import {fireEvent, render, waitFor} from '@testing-library/react';
import {Form} from './Form';

describe('Form component', () => {
    test('should render form', () => {
        const {container, getByTestId} = render(<Form><div data-testid="test"></div></Form>);
        expect(getByTestId('test')).toBeInTheDocument();
        expect(container.querySelector('form')).toBeInTheDocument();
    });
    test('should invoke onSubmit when form is submitted', () => {
        const onSubmit = jest.fn();
        const { container } = render(<Form onSubmit={onSubmit}></Form>);
        const form = container.querySelector('form')
        fireEvent.submit(form);

        expect(onSubmit).toHaveBeenCalledTimes(1);

    })
    test('should invoke onSuccess callback ', async() => {
        const onSuccess = jest.fn();
        const { container } = render(<Form onSubmit={jest.fn()} onSuccess={onSuccess}></Form>);
        const form = container.querySelector('form')
        fireEvent.submit(form);

        await waitFor(() => {
            expect(onSuccess).toHaveBeenCalledTimes(1);
        })
    })

    test('should invoke onError callback ', async() => {
        const onError = jest.fn();
        const { container } = render(<Form onSubmit={() => Promise.reject('error')} onError={onError}></Form>);
        const form = container.querySelector('form')
        fireEvent.submit(form);

        await waitFor(() => {
            expect(onError).toHaveBeenCalledTimes(1);
        })
    })

})