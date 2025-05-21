import { button, input } from 'ant-design-testing';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { LoginForm } from '../src/components/login-form/LoginForm';

describe('LoginForm', () => {
  it('correct data', () => {
    const function_ = vi.fn();
    const { container } = render(<LoginForm onSubmit={function_} />);

    const email = input.query(container)!;
    const password = input.query(container, 1)!;

    input.fireChange(email, 'ramaldanova_sh@mail.ru');
    input.fireChange(password, '212121aA');

    button.fireClick(container);

    expect(function_).toHaveBeenCalledWith({
      username: 'ramaldanova_sh@mail.ru',
      password: '212121aA',
    });
  });
});
