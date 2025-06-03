import { Button, Flex } from 'antd';
import { PersonalInfo } from '../../components/profile/personal-info/PersonalInfo';
import { Addresses } from '../../components/profile/addresses/Addresses';
import './profile.css';
import { useUserSession } from '../../store/userSession.store';
import { Navigate } from 'react-router';
import { PageRoutes } from '../../types/enums';
import { useAuth } from '../../hooks/hooks';

export default function Profile() {
  const auth = useAuth();
  const { user } = useUserSession();
  return auth.isLoggedIn ? (
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
  ) : (
    <Navigate to={PageRoutes.MAIN} replace={true} />
  );
}
