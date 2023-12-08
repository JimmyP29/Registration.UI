import { render, screen } from '@testing-library/react';
import App from './App';
import { LOGIN, REGISTER, RETRIEVE_USERS } from './constants';

describe('App', () => {
  it(`renders a ${REGISTER} component`, () => {
    render(<App />);
    const registerComponent = screen.getByLabelText(REGISTER);
    expect(registerComponent).toBeInTheDocument();
  });

  it(`renders a ${LOGIN} component`, () => {
    render(<App />);
    const registerComponent = screen.getByLabelText(LOGIN);
    expect(registerComponent).toBeInTheDocument();
  });

  it(`renders a ${RETRIEVE_USERS} button`, () => {
    render(<App />);
    const registerComponent = screen.getByLabelText(RETRIEVE_USERS);
    expect(registerComponent).toBeInTheDocument();
  });
});

