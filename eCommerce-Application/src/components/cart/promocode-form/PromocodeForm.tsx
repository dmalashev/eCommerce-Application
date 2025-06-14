import { Space, Input, Button } from 'antd';
import './promocode-form.css';

type PromocodeFormProperties = {
  onClick: () => void;
};

export const PromocodeForm = ({ onClick }: PromocodeFormProperties) => {
  return (
    <div className="promocode">
      <Space.Compact style={{ width: '100%' }}>
        <Input placeholder="Promocode" />
        <Button type="primary" className="button-submit" onClick={onClick}>
          Apply
        </Button>
      </Space.Compact>
    </div>
  );
};