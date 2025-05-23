import { beforeAll, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { renderWithRouter } from '../../../tests/test-utilities';

beforeAll(() => {
  Object.defineProperty(globalThis, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: undefined,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe('EmailInput', () => {
  it('should render and accept input', () => {
    renderWithRouter(<LoginForm />);

    const emailInput = screen.getByTestId('email-input') as HTMLInputElement;
    expect(emailInput.value).toBe('');

    emailInput.value = 'ramaldanova_sh@mail.ru';
    emailInput.dispatchEvent(new Event('input', { bubbles: true }));

    expect(emailInput.value).toBe('ramaldanova_sh@mail.ru');
  });

  it('shows error message for invalid email', async () => {
    renderWithRouter(<LoginForm />);

    const emailInput = screen.getByTestId('email-input') as HTMLInputElement;
    expect(emailInput.value).toBe('');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText('Wrong email format')).toBeInTheDocument();
    });
  });

  it('shows error message for empty email', async () => {
    renderWithRouter(<LoginForm />);

    const emailInput = screen.getByTestId('email-input') as HTMLInputElement;
    expect(emailInput.value).toBe('');

    fireEvent.change(emailInput, { target: { value: ' ' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText('Please, type your email address')).toBeInTheDocument();
    });
  });
});
