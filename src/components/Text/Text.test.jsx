import {render, screen} from '@testing-library/react';
import {Text} from './Text';

describe('Text component', () => {
    test('should render text with children', () => {
        const testText = 'Test';

        render(<Text>{testText}</Text>);
        const text = screen.getByText(testText);

        expect(text).toBeInTheDocument();
    });
    test('should render text with className', () => {
        const testText = 'Test';
        const testClassName = 'test-class';

        render(<Text className={testClassName}>{testText}</Text>);
        const text = screen.getByText(testText);

        expect(text).toBeInTheDocument();
        expect(text).toHaveClass(testClassName);
        expect(text).toHaveClass('text');
    });
    test('should render text with isError', () => {
        const testText = 'Test';
        const testIsError = true;

        render(<Text isError={testIsError}>{testText}</Text>);
        const text = screen.getByText(testText);

        expect(text).toBeInTheDocument();
        expect(text).toHaveClass('error');
    });
    test('should render text with isSuccess', () => {
        const testText = 'Test';
        const testIsSuccess = true;

        render(<Text isSuccess={testIsSuccess}>{testText}</Text>);
        const text = screen.getByText(testText);

        expect(text).toBeInTheDocument();
        expect(text).toHaveClass('success');
    });
})