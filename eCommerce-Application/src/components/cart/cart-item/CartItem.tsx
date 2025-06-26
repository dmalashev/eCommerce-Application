import { Col, Row, Image, InputNumber, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './cart-item.css';

type CartProduct = {
  id: string;
  name: string;
  author: string;
  cover: string;
  price: number;
  discount?: number;
  quantity: number;
};

type CartItemProperties = {
  cartItem: CartProduct;
  changeQuantities: (id: string, quantities: number) => void;
  deleteItem: (id: string) => void;
};

export const CartItem = ({ cartItem, changeQuantities, deleteItem }: CartItemProperties) => {
  const [quantities, setQuantities] = useState(cartItem.quantity);
  const getSubTotal = () => {
    const price = cartItem.discount ?? cartItem.price;
    return price * quantities;
  };
  const onChangeQuantity = (value: number | null) => {
    if (value) {
      setQuantities(value);
      changeQuantities(cartItem.id, value);
    }
  };

  const onDeleteItem = () => {
    deleteItem(cartItem.id);
  };

  return (
    <Row className="items" justify="center" gutter={[16, 0]}>
      <Col className="gutter-row" sm={{ span: 8, order: 0 }} xs={{ span: 12, order: 0 }}>
        <div className="item product">
          <div className="cover">
            <Image className="cover-image" src={cartItem.cover} style={{ borderRadius: '2px' }} />
          </div>
          <div className="description">
            <p className="author">{cartItem.author}</p>
            <p className="name">{cartItem.name}</p>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" sm={{ span: 4, order: 0 }} xs={{ span: 12, order: 3 }}>
        <div className="item">
          <p className="price">
            <span className="label">price: </span>{' '}
            <span className={`${cartItem.discount ? 'price-crossed' : ''}`}>${cartItem.price}</span>
            {cartItem.discount && <span className="discount"> ${cartItem.discount}</span>}
          </p>
        </div>
      </Col>

      <Col className="gutter-row" sm={{ span: 6, order: 0, offset: 0 }} xs={{ span: 6, order: 1, offset: 1 }}>
        <div className="item">
          <InputNumber min={1} max={10} value={quantities} onChange={onChangeQuantity} />
        </div>
      </Col>

      <Col className="gutter-row" sm={{ span: 4, order: 0 }} xs={{ span: 5, order: 2 }}>
        <div className="item">
          <p className="subtotal">
            <span className="label">subtotal: </span>${getSubTotal()}
          </p>
        </div>
      </Col>

      <Col
        className="gutter-row"
        sm={{ span: 2, order: 0, offset: 0 }}
        xs={{ span: 2, order: 4, offset: 8 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button icon={<DeleteOutlined style={{ fontSize: '18px' }} />} shape="circle" onClick={onDeleteItem} />
      </Col>
    </Row>
  );
};
