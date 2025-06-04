import { Button, DatePicker, Flex, Form, FormProps, Input, message } from 'antd';
import { FieldType, User } from '../../../types/types';
import { isOlderThan13 } from '../../../utils/is-older-than-13';
import { EmailInput } from '../../inputs/email-input/EmailInput';
import dayjs from 'dayjs';

type PersonalInfoEditFormValues = {
  user: User | undefined;
  onSave: () => void;
};

export const PersonalInfoEditForm = ({ user, onSave }: PersonalInfoEditFormValues) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

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
            name: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            date: dayjs('1992-10-07'),
          }}
          onFinish={onSave}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            rules={[
              { required: true, message: 'Please, type your first name' },
              { min: 1, message: 'First name must contain more than 1 letter' },
              { pattern: /^[A-Za-zА-Яа-яЁё\s]+$/, message: 'First name must contain only letters' },
            ]}
          >
            <Input
              className="form-item"
              variant="underlined"
              placeholder="first name"
              data-testid="name-input"
              value={user?.firstName}
            />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: 'Please, type your last name' },
              { min: 1, message: 'Last name must contain more than 1 letter' },
              { pattern: /^[A-Za-zА-Яа-яЁё\s]+$/, message: 'Last name must contain only letters' },
            ]}
          >
            <Input
              className="form-item"
              variant="underlined"
              placeholder="last name"
              data-testid="lastname-input"
              value={user?.lastName}
            />
          </Form.Item>

          <EmailInput />

          <Form.Item
            name="date"
            rules={[
              { required: true, message: 'Please, select date' },
              {
                validator: (_, value) =>
                  isOlderThan13(value) ? Promise.resolve() : Promise.reject(new Error('You must be over 13 years old')),
              },
            ]}
          >
            <DatePicker className="form-item" placeholder="date of birth" variant="underlined" />
          </Form.Item>

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
