import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

const testPlaceholder = 'Enter your name';

describe('Input component', () => {
  it('should render input', () => {
    render(<Input placeholder={testPlaceholder}/>);
    const input = screen.getByPlaceholderText(testPlaceholder);
    expect(input).toBeInTheDocument();
  });

  it('should render input with correct type', () => {
    render(<Input placeholder={testPlaceholder} type='checkbox'/>);
    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();
  });

  it('renders input with custom container and input class names', () => {
    const { container } = render(
    <Input
        containerClassName="containerTest"
        inputClassName="custom-input"
        placeholder={testPlaceholder}/>
    );
    const containerEl = container.querySelector('.formControl.containerTest');
    expect(containerEl).toBeInTheDocument();
    const inputEl = screen.getByPlaceholderText(testPlaceholder);
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('custom-input');

  });

  it('renders input with without label', () => {
    render(<Input placeholder={testPlaceholder} label={false}/>);
    expect(screen.queryByTestId('input-label')).not.toBeInTheDocument();
  });

  it('renders input with correct label', () => {
    render(<Input placeholder={testPlaceholder} label="Test label"/>);
    const label = screen.getByLabelText('Test label');
    expect(label).toBeInTheDocument();
  });
  test('should render input with the correct value', () => {
    const testValue = 'Test value';
    render(<Input placeholder={testPlaceholder} value={testValue}/>);
    const input = screen.getByDisplayValue(testValue);
    expect(input).toBeInTheDocument()
  });
  test('should invoke onChange when input value changes', () => {
    const onChange = jest.fn();
    render(<Input placeholder={testPlaceholder} onChange={onChange}/>);
    const input = screen.getByPlaceholderText(testPlaceholder);
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});