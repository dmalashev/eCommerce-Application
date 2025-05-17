import React from 'react';
import { Button, Form, type FormInstance } from 'antd';
import './submit-button.css';

interface SubmitButtonProperties {
  form: FormInstance;
}

export const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProperties>> = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button className="button-submit" type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};
