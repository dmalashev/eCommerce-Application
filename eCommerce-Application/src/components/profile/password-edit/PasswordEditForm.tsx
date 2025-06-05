import { Button, Flex, Form, FormProps, Input, message } from 'antd';
import { FieldType, User } from '../../../types/types';
import EyeTwoTone from '@ant-design/icons/lib/icons/EyeTwoTone';
import EyeInvisibleOutlined from '@ant-design/icons/lib/icons/EyeInvisibleOutlined';

type PasswordEditFormValues = {
  user: User | undefined;
  onSave: (values: Record<string, string>) => void;
};

export const PasswordEditForm = ({ user, onSave }: PasswordEditFormValues) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = () => {
    const valuesObject: Record<string, string> = form.getFieldsValue();
    form.resetFields();
    onSave(valuesObject);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
    error();
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
        <Form
          form={form}
          style={{ maxWidth: 400, display: 'flex', flexDirection: 'column' }}
          initialValues={{
            variant: 'filled',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
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
                message: 'Minimum 8 characters, at least one digit, at least one uppercase and one lowercase letter',
              },
              {
                pattern: new RegExp(`^${user?.password}$`),
                message: 'Wrong Password',
              },
            ]}
          >
            <Input.Password
              variant="underlined"
              placeholder="Passord"
              data-testid="password-input"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item
            name="newPassword"
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
              variant="underlined"
              placeholder="New Password"
              data-testid="new-password-input"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The password that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password
              variant="underlined"
              placeholder="Confirm New Password"
              data-testid="confirm-password-input"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Flex className="buttons-container" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Button className="button-submit" type="primary" htmlType="submit">
              Save password
            </Button>
          </Flex>
        </Form>
      </div>
    </>
  );
};
