import {render, screen} from '@testing-library/react';
import {Title} from './Title';

describe('Title component', () => {
    test('should render title with children', () => {
        const testText = 'Test';

        render(<Title>{testText}</Title>);
        const title = screen.getByText(testText);

        expect(title).toBeInTheDocument();
    });

    test('should render title with level', () => {
        const testText = 'Test';
        const testLevel = 2;

        const {container} = render(<Title level={testLevel}>{testText}</Title>);
        const title = container.querySelector(`h${testLevel}`);

        expect(title).toBeInTheDocument();
    });
    test('should render title with className', () => {
        const testText = 'Test';
        const testClassName = 'test-class';

        render(<Title className={testClassName}>{testText}</Title>);
        const title = screen.getByText(testText);

        expect(title).toBeInTheDocument();
        expect(title).toHaveClass(testClassName);
        expect(title).toHaveClass('title');

    });
})