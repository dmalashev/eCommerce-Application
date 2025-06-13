import { describe, it, expect, vi, beforeEach } from 'vitest';
import { changePassword } from './change-password';
import { login } from './autorizate-customer';
import { logout } from './logout';

const mockExecuteGet = vi.fn();
const mockExecutePost = vi.fn();

const mockPost = vi.fn(() => ({
  execute: mockExecutePost,
}));

const mockPassword = vi.fn(() => ({
  post: mockPost,
}));

const mockGet = vi.fn(() => ({
  execute: mockExecuteGet,
}));

const mockMe = vi.fn(() => ({
  get: mockGet,
  password: mockPassword,
}));

vi.mock('../client/client', () => ({
  apiRootCustomer: {
    withProjectKey: vi.fn(() => ({
      me: mockMe,
    })),
  },
  projectKey: 'test-project-key',
}));

vi.mock('./autorizate-customer', () => ({
  login: vi.fn(),
}));

vi.mock('./logout', () => ({
  logout: vi.fn(),
}));

describe('changePassword', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockExecuteGet.mockResolvedValue({
      body: {
        version: 1,
        email: 'test@example.com',
      },
    });

    mockExecutePost.mockResolvedValue({});
  });

  it('changes password and logs in again', async () => {
    await changePassword({ currentPassword: 'oldPass123', newPassword: 'newPass456' });

    expect(mockExecuteGet).toHaveBeenCalled();
    expect(mockPost).toHaveBeenCalledWith({
      body: {
        version: 1,
        currentPassword: 'oldPass123',
        newPassword: 'newPass456',
      },
    });
    expect(logout).toHaveBeenCalled();
    expect(login).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'newPass456',
    });
  });
});
