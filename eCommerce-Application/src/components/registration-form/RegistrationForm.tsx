import './registration-form.css';
import React from 'react';
import { countries } from '../../utils/countries';
import {
  Button,
  Checkbox,
  CheckboxProps,
  DatePicker,
  DatePickerProps,
  Divider,
  Flex,
  Form,
  Input,
  Select,
  Typography,
} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { SubmitButton } from '../submit-button/SubmitButton';

const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

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
  const [form] = Form.useForm();
  const [isVisibleBillingAddress, setVisibleBillingAddress] = React.useState(true);

  const onChangeDefaultShippingAndBillingAddress: CheckboxProps['onChange'] = (event) => {
    console.log(`checked = ${event.target.checked}`);
    setVisibleBillingAddress(!event.target.checked);
  };

  return (
    <>
      <div className="form-container">
        <Title level={3}>Create an account</Title>
        <Form
          {...formItemLayout}
          form={form}
          style={{ maxWidth: 400, display: 'flex', flexDirection: 'column' }}
          initialValues={{ variant: 'filled' }}
        >
          <Form.Item name="name" rules={[{ required: true, message: 'Please, type your first name' }]}>
            <Input className="form-item" variant="underlined" placeholder="first name" />
          </Form.Item>

          <Form.Item name="last-name" rules={[{ required: true, message: 'Please, type your last name' }]}>
            <Input className="form-item" variant="underlined" placeholder="last name" />
          </Form.Item>

          <Form.Item name="email" rules={[{ required: true, message: 'Please, type your email address' }]}>
            <Input className="form-item" variant="underlined" placeholder="email" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Please, type password' }]}>
            <Input.Password
              className="form-item"
              variant="underlined"
              placeholder="password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item name="date" rules={[{ required: true, message: 'Please, select date' }]}>
            <DatePicker className="form-item" placeholder="date of birth" onChange={onChange} variant="underlined" />
          </Form.Item>

          <Divider className="form-item" style={{ borderColor: '#000' }}>
            Shipping address
          </Divider>

          <Form.Item name="shipping-street" rules={[{ required: true, message: 'Please, type  street' }]}>
            <Input className="form-item-address" variant="underlined" placeholder="street" />
          </Form.Item>

          <Form.Item name="shipping-city" rules={[{ required: true, message: 'Please, type city' }]}>
            <Input className="form-item-address" variant="underlined" placeholder="city" />
          </Form.Item>

          <Form.Item name="shipping-country" rules={[{ required: true, message: 'Please, type  country' }]}>
            <Select className="form-item-address" variant="underlined" placeholder="country">
              {countries.map((country, index) => (
                <Select.Option key={index} value={country}>
                  {country}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="shipping-postalcode" rules={[{ required: true, message: 'Please, type  postal code' }]}>
            <Input className="form-item-address" variant="underlined" placeholder="postal code" />
          </Form.Item>

          <Form.Item name="default-shipping-address-checker">
            <Checkbox className="form-item-checker" onChange={onChangeDefaultShippingAddress}>
              as shipping default address
            </Checkbox>
          </Form.Item>
          <Form.Item name="default-shipping-billing-address-checker">
            <Checkbox className="form-item-checker" onChange={onChangeDefaultShippingAndBillingAddress}>
              as the same address for billing and shipping
            </Checkbox>
          </Form.Item>

          {isVisibleBillingAddress && (
            <Flex vertical>
              <Divider className="form-item" style={{ borderColor: '#000' }}>
                Billing address
              </Divider>
              <Form.Item name="billing-street" rules={[{ required: true, message: 'Please, type  street' }]}>
                <Input className="form-item-address" variant="underlined" placeholder="street" />
              </Form.Item>

              <Form.Item name="billing-city" rules={[{ required: true, message: 'Please, type city' }]}>
                <Input className="form-item-address" variant="underlined" placeholder="city" />
              </Form.Item>

              <Form.Item name="billing-country" rules={[{ required: true, message: 'Please, type  country' }]}>
                <Select className="form-item-address" variant="underlined" placeholder="country">
                  {countries.map((country, index) => (
                    <Select.Option key={index} value={country}>
                      {country}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="billing-postalcode" rules={[{ required: true, message: 'Please, type  postal code' }]}>
                <Input className="form-item-address" variant="underlined" placeholder="postal code" />
              </Form.Item>

              <Form.Item name="default-billing-address-checker">
                <Checkbox className="form-item-checker" onChange={onChangeDefaultBillingAddress}>
                  as billing default address
                </Checkbox>
              </Form.Item>
            </Flex>
          )}

          <Flex className="btn-container" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <SubmitButton form={form}>create an account</SubmitButton>
            <Button color="default" style={{ color: '#DB4444' }} variant="link">
              Already have an account? Login
            </Button>
          </Flex>
        </Form>
      </div>
    </>
  );
};
