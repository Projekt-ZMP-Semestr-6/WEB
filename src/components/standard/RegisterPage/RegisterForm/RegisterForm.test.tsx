import { ROUTES } from '@constants';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterForm from './RegisterForm';

const renderWithRouter = (component: JSX.Element) => {
  render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('<RegisterForm /> component tests', () => {
  beforeEach(() => {
    act(() => {
      renderWithRouter(<RegisterForm />);
    });
  });

  it('correctly display header test', () => {
    const element = screen.getByText(/rejestracja/i);

    expect(element).toBeInTheDocument();
  });

  it('correctly display 4 inputs', () => {
    const expectedNumberOfInputs = 4;
    const element = screen.getAllByTestId('text-input');

    expect(element).toHaveLength(expectedNumberOfInputs);
  });

  it('correctly display submit button', () => {
    const element = screen.getByRole('button');

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/zarejestruj się/i);
    expect(element).toHaveAttribute('type', 'submit');
  });

  it('correctly display text under button', () => {
    const textElement = screen.getByText(/posiadasz/i);
    const linkElement = screen.getByRole('link');

    expect(textElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', ROUTES.login);
  });
});
