import { Space, Input, Button } from 'antd';
import './promocode-form.css';
import { useState } from 'react';

type PromocodeFormProperties = {
  onClick: (promocode: string) => void;
  disabled: boolean;
};

export const PromocodeForm = ({ onClick, disabled }: PromocodeFormProperties) => {
  const [promocode, setPromocode] = useState('');
  return (
    <div className="promocode">
      <Space.Compact style={{ width: '100%' }}>
        <Input
          disabled={disabled}
          placeholder="Promocode"
          value={promocode}
          onChange={(event) => setPromocode(event.target.value)}
        />
        <Button
          type="primary"
          className="button-submit"
          disabled={disabled}
          onClick={() => {
            onClick(promocode);
          }}
        >
          Apply
        </Button>
      </Space.Compact>
    </div>
  );
};
