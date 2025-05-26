import { Form, Input } from 'antd';
import './password-input.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export const PasswordInput = () => {
  return (
    <Form.Item
      name="password"
      rules={[
        { required: true, message: 'Please, type password' },
        {
          pattern: new RegExp(/^(?!\s)(?!.*\s$).+/),
          message: 'Please, delete leading or trailing spaces',
        },
        {
          pattern: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
          message:
            'Password must contain minimum 8 characters, at least one digit, at least one uppercase and one lowercase letter',
        },
      ]}
    >
      <Input.Password
        className="form-item"
        variant="underlined"
        placeholder="password"
        data-testid="password-input"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </Form.Item>
  );
};
