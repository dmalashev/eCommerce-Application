import { Button, Flex, Form, FormProps, message } from 'antd';
import { FieldType, User } from '../../../types/types';
import { PasswordInput } from '../../inputs/password-input/PasswordInput';

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
          <PasswordInput name="password" />
          <PasswordInput name="new password" />
          <PasswordInput name="confirm new password" />
          <Flex className="buttons-container" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Button className="button-submit" type="primary" htmlType="submit">
              Save personal info
            </Button>
          </Flex>
        </Form>
      </div>
    </>
  );
};
