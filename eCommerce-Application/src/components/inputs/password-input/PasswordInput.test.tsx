import { beforeAll, describe, expect, it, vi } from 'vitest';
import { fireEvent, waitFor, screen, render } from '@testing-library/react';
import { Form } from 'antd';
import { PasswordInput } from './PasswordInput';

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

describe('PasswordInput', () => {
  it('should render and accept input', () => {
    render(
      <Form>
        <PasswordInput />
      </Form>,
    );

    const passwordInput = screen.getByTestId('password-input') as HTMLInputElement;
    expect(passwordInput.value).toBe('');

    passwordInput.value = 'Password1';
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }));

    expect(passwordInput.value).toBe('Password1');
  });

  it('shows error message for invalid password', async () => {
    render(
      <Form>
        <PasswordInput />
      </Form>,
    );

    const passwordInput = screen.getByTestId('password-input') as HTMLInputElement;
    expect(passwordInput.value).toBe('');

    fireEvent.change(passwordInput, { target: { value: 'passWithoutNumber' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(
        screen.getByText(
          'Password must contain minimum 8 characters, at least one digit, at least one uppercase and one lowercase letter',
        ),
      ).toBeInTheDocument();
    });

    fireEvent.change(passwordInput, { target: { value: 'passwithoutuppercase1' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(
        screen.getByText(
          'Password must contain minimum 8 characters, at least one digit, at least one uppercase and one lowercase letter',
        ),
      ).toBeInTheDocument();
    });

    fireEvent.change(passwordInput, { target: { value: 'PASSWITHOUTLOWERCASE1' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(
        screen.getByText(
          'Password must contain minimum 8 characters, at least one digit, at least one uppercase and one lowercase letter',
        ),
      ).toBeInTheDocument();
    });
  });

  it('shows error message for password with trailing or leading spaces', async () => {
    render(
      <Form>
        <PasswordInput />
      </Form>,
    );

    const passwordInput = screen.getByTestId('password-input') as HTMLInputElement;
    expect(passwordInput.value).toBe('');

    fireEvent.change(passwordInput, { target: { value: ' Password1 ' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(screen.getByText('Please, delete leading or trailing spaces')).toBeInTheDocument();
    });

    fireEvent.change(passwordInput, { target: { value: ' Password1' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(screen.getByText('Please, delete leading or trailing spaces')).toBeInTheDocument();
    });

    fireEvent.change(passwordInput, { target: { value: 'Password1 ' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(screen.getByText('Please, delete leading or trailing spaces')).toBeInTheDocument();
    });
  });

  it('shows error message for empty password', async () => {
    render(
      <Form>
        <PasswordInput />
      </Form>,
    );

    const passwordInput = screen.getByTestId('password-input') as HTMLInputElement;
    expect(passwordInput.value).toBe('');

    fireEvent.change(passwordInput, { target: { value: ' ' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(screen.getByText('Please, type password')).toBeInTheDocument();
    });
  });
});
