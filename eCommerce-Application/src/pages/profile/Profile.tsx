import { Button, Flex } from 'antd';
import { PersonalInfo } from '../../components/profile/personal-info/PersonalInfo';
import { Addresses } from '../../components/profile/addresses/Addresses';
import './profile.css';

export default function Profile() {
  const addresses = [
    'Russia, Moscow, Marata Street, 192000',
    'USA, Vashington, Palm Street, 12234',
    'Russia, Saint-Petersburg, Nevskiy Prospect, 191000',
  ];
  return (
    <div className="profile">
      <div className="profile-info">
        <PersonalInfo />
        <Flex vertical style={{ alignItems: 'start', justifyContent: 'space-between' }} gap={15}>
          <Button className="button-submit" style={{ backgroundColor: '#DB4444' }} type="primary" htmlType="submit">
            Edit personal info
          </Button>

          <Button className="button-submit" type="primary" style={{ backgroundColor: '#DB4444' }}>
            Change password
          </Button>
        </Flex>
      </div>
      <div className="profile-addresses">
        <Addresses addresses={addresses} />
        <Button className="button-submit" type="primary" style={{ backgroundColor: '#DB4444' }}>
          Edit addresses
        </Button>
      </div>
    </div>
  );
}
