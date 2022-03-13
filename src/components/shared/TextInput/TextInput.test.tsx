import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './TextInput';
import { FormProvider, useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';

const TEST_NAME = 'test_name';
const TEST_LABEL = 'Test Label';

function TestForm() {
  const formMethods = useForm();

  const onSubmit = () => {};

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <TextInput name={TEST_NAME} label={TEST_LABEL} />
        <button type="submit">submit</button>
      </form>
    </FormProvider>
  );
}

function setupTest() {
  render(<TestForm />);
}

describe('<TextInput /> component tests', () => {
  beforeEach(() => setupTest());

  it('render component with input and label', () => {
    const testElement = screen.getByTestId('text-input');
    expect(testElement).toBeInTheDocument();
    expect(testElement).toContainHTML('label');
    expect(testElement).toContainHTML('input');
  });

  it('component has a label with correct text', () => {
    const testElement = screen.getByLabelText(TEST_LABEL);
    expect(testElement).toBeInTheDocument();
  });

  it('component has a input with correct name', () => {
    const testElement = screen.getByRole('textbox');
    expect(testElement).toHaveAttribute('name', TEST_NAME);
  });

  it('component correctly change value', () => {
    const testElement = screen.getByRole('textbox');
    const expectedValue = 'test string';

    expect(testElement).toHaveValue('');
    userEvent.type(testElement, expectedValue);
    expect(testElement).toHaveValue(expectedValue);
  });
});
