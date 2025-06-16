import { Button, Typography } from 'antd';
import './main.css';
export default function Main() {
  return (
    <div className="main">
      <Typography.Title level={1} style={{ borderRadius: '5px', color: 'white' }}>
        Welcome to The Records Store
      </Typography.Title>
      <Typography.Text style={{ borderRadius: '5px', color: 'white', width: '300px', textAlign: 'center' }}>
        The Records Store is a unique shop specializing in rare vinyl records, CDs, and even cassette tapes
      </Typography.Text>
      {/* <Button className="button-promocode" type="default">
        Use promocode BLACKFRIDAY to get 10% off all items price
      </Button> */}
      <Button className="button-promocode" ghost>
        Use promocode BLACKFRIDAY to get 10% off all items price
      </Button>

      <Button className="button-catalog"  color='danger' variant='solid'>
        Go shopping
      </Button>
    </div>
  );
}
