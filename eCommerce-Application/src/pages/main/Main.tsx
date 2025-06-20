import { Button, Typography } from 'antd';
import './main.css';
import { useNavigate } from 'react-router';
import { PageRoutes } from '../../types/enums';
export default function Main() {
  const navigate = useNavigate();

  const openCatalog = () => {
    navigate(PageRoutes.CATALOG);
  };

  return (
    <div className="main">
      <Typography.Title level={1} style={{ borderRadius: '5px', color: 'white', textAlign: 'center' }}>
        Welcome to The Records Store
      </Typography.Title>
      <Typography.Text style={{ borderRadius: '5px', color: 'white', width: '300px', textAlign: 'center' }}>
        The Records Store is a unique shop specializing in rare vinyl records, CDs, and even cassette tapes
      </Typography.Text>
      <Button className="button-promocode" onClick={openCatalog} style={{ maxWidth: '100%' }} ghost>
        Use promocode BLACKFRIDAY to get 10% off all items price
      </Button>
      <Button className="button-catalog" onClick={openCatalog} color="danger" variant="solid">
        Go shopping
      </Button>
    </div>
  );
}
