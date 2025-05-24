import { Button, Flex, Form, FormProps, Input, message, Typography } from 'antd';
import { FieldType } from '../../types/types';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { PageRoutes } from '../../utils/page-routes';
import { useNavigate } from 'react-router';
import './login-form.css';
import { login } from '../../api/customer/autorizate-customer';
import { CustomerDraft } from '@commercetools/platform-sdk';
import { checkingError } from '../../api/handleError/checking-errors';
import { useAuth } from '../../utils/hooks';

const { Title } = Typography;
export const LoginForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const auth = useAuth();
  const onFinish: FormProps<FieldType>['onFinish'] = () => {
    const valuesObject: CustomerDraft = form.getFieldsValue();
    login(valuesObject)
      .then(() => {
        success();
        if (auth && auth.setIsLoggedIn) {
          auth.setIsLoggedIn(true);
        }
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch((error_) => error(checkingError(error_)));
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
    error();
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'You are login',
    });
  };

  const error = (message = 'You must fix some fields') => {
    messageApi.open({
      type: 'error',
      content: message,
    });
  };

  return (
    <>
      <div className="form-container">
        {contextHolder}
        <Title level={3}>Sign in</Title>
        <Form
          form={form}
          style={{ maxWidth: 400, display: 'flex', flexDirection: 'column' }}
          initialValues={{ variant: 'filled' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
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

          <Flex className="buttons-container" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Button className="button-submit" type="primary" htmlType="submit">
              Sign in
            </Button>

            <Button
              onClick={() => navigate(PageRoutes.REGISTRATION)}
              color="default"
              className="button-signup"
              style={{ color: '#DB4444' }}
              variant="link"
            >
              Don't have an account yet? Sign up
            </Button>
          </Flex>
        </Form>
      </div>
    </>
  );
};
