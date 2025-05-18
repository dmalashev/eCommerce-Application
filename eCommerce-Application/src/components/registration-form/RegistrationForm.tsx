import './registration-form.css';
import React from 'react';
import { useNavigate } from 'react-router';
import { countries } from '../../utils/countries';
import { PageRoutes } from '../../utils/page-routes';
import {
  Button,
  Checkbox,
  CheckboxProps,
  DatePicker,
  DatePickerProps,
  Divider,
  Flex,
  Form,
  FormProps,
  Input,
  message,
  Select,
  Typography,
} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FieldType, PostalCodeFormat } from '../../types/types';
import { isOlderThan13 } from '../../utils/common';
import { createdCustomer, singUp } from '../../api/customer/create-customer';
import { MyCustomerDraft } from '@commercetools/platform-sdk';

const { Title } = Typography;

const enum AddressType {
  SHIPPING = 'shipping',
  BILLING = 'billing',
}

const enum PostalCodeMessages {
  Russia = 'Postal code must contain 6 digits (123456)',
  USA = 'Postal code must contain 5 digits (12345)',
}

enum PostalCodePattern {
  RUSSIA = '^(?=.\\d).{6}$',
  USA = '^(?=.*\\d).{5}$',
}

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const onChangeDefaultShippingAddress: CheckboxProps['onChange'] = (event) => {
  console.log(`checked = ${event.target.checked}`);
};

const onChangeDefaultBillingAddress: CheckboxProps['onChange'] = (event) => {
  console.log(`checked = ${event.target.checked}`);
};

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [isVisibleBillingAddress, setVisibleBillingAddress] = React.useState(true);
  const [shippingPostalCodeFormat, setShippingPostalCodeFormat] = React.useState<PostalCodeFormat>();
  const [billingPostalCodeFormat, setBillingPostalCodeFormat] = React.useState<PostalCodeFormat>();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    success();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
    error();
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'You have created an account',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'You must fix some fields',
    });
  };

  const onShippingCountryChange = (value: string) => {
    onCountryChange(AddressType.SHIPPING, value);
  };

  const onBillingCountryChange = (value: string) => {
    onCountryChange(AddressType.BILLING, value);
  };

  const onCountryChange = (addressType: AddressType, value: string) => {
    let pattern: RegExp;
    let message = '';
    switch (value) {
      case 'USA': {
        pattern = new RegExp(PostalCodePattern.USA);
        message = PostalCodeMessages.USA;
        break;
      }
      case 'Russia': {
        pattern = new RegExp(PostalCodePattern.RUSSIA);
        message = PostalCodeMessages.Russia;
        break;
      }
      default: {
        pattern = new RegExp(PostalCodePattern.USA);
        message = PostalCodeMessages.USA;
        break;
      }
    }

    if (addressType === AddressType.SHIPPING) {
      setShippingPostalCodeFormat({
        pattern: pattern,
        message: message,
      });
    } else if (addressType === AddressType.BILLING) {
      setBillingPostalCodeFormat({
        pattern: pattern,
        message: message,
      });
    }
  };

  const onChangeDefaultShippingAndBillingAddress: CheckboxProps['onChange'] = (event) => {
    console.log(`checked = ${event.target.checked}`);
    setVisibleBillingAddress(!event.target.checked);
  };

  return (
    <>
      <div className="form-container">
        {contextHolder}
        <Title level={3}>Create an account</Title>
        <Form
          form={form}
          style={{ maxWidth: 400, display: 'flex', flexDirection: 'column' }}
          initialValues={{ variant: 'filled' }}
          onFinish={onFinish}
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
            <Input className="form-item" variant="underlined" placeholder="first name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: 'Please, type your last name' },
              { min: 1, message: 'Last name must contain more than 1 letter' },
              { pattern: /^[A-Za-zА-Яа-яЁё\s]+$/, message: 'Last name must contain only letters' },
            ]}
          >
            <Input className="form-item" variant="underlined" placeholder="last name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please, type your email address' },
              { pattern: new RegExp(/^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/), message: 'Wrong email format' },
            ]}
          >
            <Input className="form-item" variant="underlined" placeholder="email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please, type password' },
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
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

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
            <DatePicker className="form-item" placeholder="date of birth" onChange={onChange} variant="underlined" />
          </Form.Item>

          <Divider className="form-item" style={{ borderColor: '#000' }}>
            Shipping address
          </Divider>

          <Form.Item name="shippingStreet" rules={[{ required: true, message: 'Please, type  street' }]}>
            <Input className="form-item-address" variant="underlined" placeholder="street" />
          </Form.Item>

          <Form.Item
            name="shippingCity"
            rules={[
              { required: true, message: 'Please, type city' },
              { pattern: /^[A-Za-zА-Яа-яЁё\s]+$/, message: 'City must contain only letters' },
            ]}
          >
            <Input className="form-item-address" variant="underlined" placeholder="city" />
          </Form.Item>

          <Form.Item name="shippingCountry" rules={[{ required: true, message: 'Please, select  country' }]}>
            <Select
              onChange={onShippingCountryChange}
              className="form-item-address"
              variant="underlined"
              placeholder="country"
            >
              {countries.map((country, index) => (
                <Select.Option key={index} value={country}>
                  {country}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="shippingPostalcode"
            rules={[
              { required: true, message: 'Please, type  postal code' },
              { pattern: shippingPostalCodeFormat?.pattern, message: shippingPostalCodeFormat?.message },
            ]}
          >
            <Input className="form-item-address" variant="underlined" placeholder="postal code" />
          </Form.Item>

          <Form.Item name="defaultShippingAddressChecker">
            <Checkbox className="form-item-checker" onChange={onChangeDefaultShippingAddress}>
              as shipping default address
            </Checkbox>
          </Form.Item>
          <Form.Item name="defaultShippingBillingAddressChecker">
            <Checkbox className="form-item-checker" onChange={onChangeDefaultShippingAndBillingAddress}>
              as the same address for billing and shipping
            </Checkbox>
          </Form.Item>

          {isVisibleBillingAddress && (
            <Flex vertical>
              <Divider className="form-item" style={{ borderColor: '#000' }}>
                Billing address
              </Divider>
              <Form.Item name="billingStreet" rules={[{ required: true, message: 'Please, type  street' }]}>
                <Input className="form-item-address" variant="underlined" placeholder="street" />
              </Form.Item>

              <Form.Item
                name="billingCity"
                rules={[
                  { required: true, message: 'Please, type city' },
                  { pattern: /^[A-Za-zА-Яа-яЁё\s]+$/, message: 'City must contain only letters' },
                ]}
              >
                <Input className="form-item-address" variant="underlined" placeholder="city" />
              </Form.Item>

              <Form.Item name="billingCountry" rules={[{ required: true, message: 'Please, select  country' }]}>
                <Select
                  onChange={onBillingCountryChange}
                  className="form-item-address"
                  variant="underlined"
                  placeholder="country"
                >
                  {countries.map((country, index) => (
                    <Select.Option key={index} value={country}>
                      {country}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="billingPostalcode"
                rules={[
                  { required: true, message: 'Please, type  postal code' },
                  { pattern: billingPostalCodeFormat?.pattern, message: billingPostalCodeFormat?.message },
                ]}
              >
                <Input className="form-item-address" variant="underlined" placeholder="postal code" />
              </Form.Item>

              <Form.Item name="defaultBillingAddressChecker">
                <Checkbox className="form-item-checker" onChange={onChangeDefaultBillingAddress}>
                  as billing default address
                </Checkbox>
              </Form.Item>
            </Flex>
          )}

          <Flex className="buttons-container" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Button onClick={() => {
              const valuesObject: Record<string,string> = form.getFieldsValue();
              singUp(valuesObject);
            }} className="button-submit" type="primary" htmlType="submit">
              Create an account
            </Button>

            <Button
              onClick={() => navigate(PageRoutes.LOGIN)}
              color="default"
              className="button-login"
              style={{ color: '#DB4444' }}
              variant="link"
            >
              Already have an account? Login
            </Button>
          </Flex>
        </Form>
      </div>
    </>
  );
};
