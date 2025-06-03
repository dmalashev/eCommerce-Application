import { Button, Flex } from 'antd';
import { PersonalInfo } from '../../components/profile/personal-info/PersonalInfo';
import { Addresses } from '../../components/profile/addresses/Addresses';
import './profile.css';
import { useUserSession } from '../../store/userSession.store';

export default function Profile() {
  const { user } = useUserSession();
  return (
    <div className="profile">
      <div className="profile-info">
        <PersonalInfo user={user} />
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
        <Addresses user={user} />
        <Button className="button-submit" type="primary" style={{ backgroundColor: '#DB4444', alignSelf: 'start' }}>
          Edit addresses
        </Button>
      </div>
    </div>
  );
}
