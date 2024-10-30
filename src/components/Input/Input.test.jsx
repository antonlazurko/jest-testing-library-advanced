import { render, screen, fireEvent } from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import { Input } from './Input';

const testPlaceholder = 'Enter your name';

function renderComponent(props) {
  return render(<Input {...props} placeholder={testPlaceholder}/>);
}

describe('Input component', () => {
  test('should render input', () => {
    render(<Input placeholder={testPlaceholder}/>);
    const input = screen.getByPlaceholderText(testPlaceholder);
    expect(input).toBeInTheDocument();
  });

  test('should render input with correct type', () => {
    // render(<Input placeholder={testPlaceholder} type='checkbox'/>);
    renderComponent({type: 'checkbox'});
    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();
  });

  test('renders input with custom container and input class names', () => {
    // const { container } = render(
    // <Input
    //     containerClassName="containerTest"
    //     inputClassName="custom-input"
    //     placeholder={testPlaceholder}/>
    // );
    const { container } = renderComponent({inputClassName: 'custom-input', containerClassName: 'containerTest'});

    const containerEl = container.querySelector('.formControl.containerTest');
    expect(containerEl).toBeInTheDocument();

    const inputEl = screen.getByPlaceholderText(testPlaceholder);
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('custom-input');

  });

  test('renders input with without label', () => {
    // render(<Input placeholder={testPlaceholder} label={false}/>);
    renderComponent({label: false});
    expect(screen.queryByTestId('input-label')).not.toBeInTheDocument();
  });

  test('renders input with correct label', () => {
    // render(<Input placeholder={testPlaceholder} label="Test label"/>);
    renderComponent({label: 'Test label'});

    const label = screen.getByLabelText('Test label');
    expect(label).toBeInTheDocument();
  });
  test('should render input with the correct value', () => {
    const testValue = 'Test value';

    // render(<Input placeholder={testPlaceholder} value={testValue}/>);
    renderComponent({value: testValue});

    const input = screen.getByDisplayValue(testValue);
    expect(input).toBeInTheDocument()
  });

  test('should invoke onChange when input value changes', () => {
    const onChange = jest.fn();
    // render(<Input placeholder={testPlaceholder} onChange={onChange}/>);
    renderComponent({onChange});
    const input = screen.getByPlaceholderText(testPlaceholder);
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('should invoke onChange when input value changes. Alternative way', async() => {
    const onChange = jest.fn();

    // render(<Input placeholder={testPlaceholder} onChange={onChange}/>);
    renderComponent({onChange});

    const input = screen.getByPlaceholderText(testPlaceholder);

    await userEvent.type(input, 'New');
    expect(onChange).toHaveBeenCalledTimes(3);
  });
});