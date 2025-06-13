import { Form, Input } from 'antd';
import './email-input.css';

export const EmailInput = () => {
  return (
    <Form.Item
      name="email"
      rules={[
        { required: true, message: 'Please, type your email address' },
        {
          pattern: new RegExp(/^(?!\s)(?!.*\s$).+/),
          message: 'Please, delete leading or trailing spaces',
        },
        {
          pattern: new RegExp(/^\s*([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?\s*$/),
          message: 'Email must contain an @ symbol and a domain name',
        },
      ]}
    >
      <Input className="form-item" variant="underlined" placeholder="email" data-testid="email-input" />
    </Form.Item>
  );
};
