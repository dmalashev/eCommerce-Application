import { beforeAll, describe, expect, it, vi } from 'vitest';
import { fireEvent, waitFor, screen } from '@testing-library/react';
import { RegistrationForm } from './RegistrationForm';
import { renderWithRouter } from '../../utils/test-utilities';

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

//name input
describe('NameInput', () => {
  it('should render and accept input', () => {
    renderWithRouter(<RegistrationForm />);

    const nameInput = screen.getByTestId('name-input') as HTMLInputElement;
    expect(nameInput.value).toBe('');

    nameInput.value = 'Name';
    nameInput.dispatchEvent(new Event('input', { bubbles: true }));

    expect(nameInput.value).toBe('Name');
  });

  it('shows error message for name with numbers', async () => {
    renderWithRouter(<RegistrationForm />);

    const nameInput = screen.getByTestId('name-input') as HTMLInputElement;
    expect(nameInput.value).toBe('');

    fireEvent.change(nameInput, { target: { value: 'nameWithNumbers1' } });
    fireEvent.blur(nameInput);

    await waitFor(() => {
      expect(screen.getByText('First name must contain only letters')).toBeInTheDocument();
    });
  });

  it('shows error message for empty name', async () => {
    renderWithRouter(<RegistrationForm />);

    const nameInput = screen.getByTestId('name-input') as HTMLInputElement;
    expect(nameInput.value).toBe('');

    fireEvent.change(nameInput, { target: { value: ' ' } });
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.blur(nameInput);

    await waitFor(() => {
      expect(screen.getByText('Please, type your first name')).toBeInTheDocument();
    });
  });
});

// lastname input
describe('LastNameInput', () => {
  it('should render and accept input', () => {
    renderWithRouter(<RegistrationForm />);

    const lastNameInput = screen.getByTestId('lastname-input') as HTMLInputElement;
    expect(lastNameInput.value).toBe('');

    lastNameInput.value = 'LastName';
    lastNameInput.dispatchEvent(new Event('input', { bubbles: true }));

    expect(lastNameInput.value).toBe('LastName');
  });

  it('shows error message for lastname with numbers', async () => {
    renderWithRouter(<RegistrationForm />);

    const lastNameInput = screen.getByTestId('lastname-input') as HTMLInputElement;
    expect(lastNameInput.value).toBe('');

    fireEvent.change(lastNameInput, { target: { value: 'lastnameWithNumbers1' } });
    fireEvent.blur(lastNameInput);

    await waitFor(() => {
      expect(screen.getByText('Last name must contain only letters')).toBeInTheDocument();
    });
  });

  it('shows error message for empty lastname', async () => {
    renderWithRouter(<RegistrationForm />);

    const lastNameInput = screen.getByTestId('lastname-input') as HTMLInputElement;
    expect(lastNameInput.value).toBe('');

    fireEvent.change(lastNameInput, { target: { value: ' ' } });
    fireEvent.change(lastNameInput, { target: { value: '' } });
    fireEvent.blur(lastNameInput);

    await waitFor(() => {
      expect(screen.getByText('Please, type your last name')).toBeInTheDocument();
    });
  });
});
