import { Button, Flex, Form, FormProps, message, Typography } from 'antd';
import { FieldType } from '../../types/types';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { PageRoutes } from '../../types/enums';
import { useNavigate } from 'react-router';
import './login-form.css';
import { login } from '../../api/customer/autorizate-customer';
import { CustomerDraft } from '@commercetools/platform-sdk';
import { checkingError } from '../../api/handleError/checking-errors';
import { useAuth } from '../../hooks/hooks';
import { PasswordInput } from '../inputs/password-input/PasswordInput';
import { EmailInput } from '../inputs/email-input/EmailInput';

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
          navigate(PageRoutes.MAIN);
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
          <EmailInput />
          <PasswordInput />

          <Flex className="buttons-container" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Button className="button-submit" type="primary" htmlType="submit" data-testid="button-submit">
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
