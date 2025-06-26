import { Col, Row, Typography } from 'antd';
import { cart_titles_array } from '../../../types/enums';
import './cart-titles.css';

const { Text } = Typography;
const getSpan = (index: number) => {
  if (index === 0) return 8;
  if (index === 1) return 4;
  return 6;
};

export const CartTitles = () => {
  return (
    <Row className="titles" justify="center" align="middle" gutter={16}>
      {cart_titles_array.map((item, index) => (
        <Col span={getSpan(index)} className="gutter-row">
          <Text className="title" strong>
            {item}
          </Text>
        </Col>
      ))}
    </Row>
  );
};
