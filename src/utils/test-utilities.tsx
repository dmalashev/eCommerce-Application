import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';

export const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};
