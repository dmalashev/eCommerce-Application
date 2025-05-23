import { beforeAll, describe, expect, it, vi } from 'vitest';
import { fireEvent, waitFor, screen } from '@testing-library/react';
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

    emailInput.value = 'test@test.com';
    emailInput.dispatchEvent(new Event('input', { bubbles: true }));

    expect(emailInput.value).toBe('test@test.com');
  });

  it('shows error message for invalid email', async () => {
    renderWithRouter(<LoginForm />);

    const emailInput = screen.getByTestId('email-input') as HTMLInputElement;
    expect(emailInput.value).toBe('');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText('Email must contain an @ symbol and a domain name')).toBeInTheDocument();
    });
  });

  it('shows error message for email with trailing or leading spaces', async () => {
    renderWithRouter(<LoginForm />);

    const emailInput = screen.getByTestId('email-input') as HTMLInputElement;
    expect(emailInput.value).toBe('');

    fireEvent.change(emailInput, { target: { value: ' test@test.com ' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText('Please, delete leading or trailing spaces')).toBeInTheDocument();
    });

    fireEvent.change(emailInput, { target: { value: ' test@test.com' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText('Please, delete leading or trailing spaces')).toBeInTheDocument();
    });

    fireEvent.change(emailInput, { target: { value: 'test@test.com ' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText('Please, delete leading or trailing spaces')).toBeInTheDocument();
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
