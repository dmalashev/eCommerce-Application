import { Button, Flex, message, Typography } from 'antd';
import { PersonalInfo } from '../../components/profile/personal-info/PersonalInfo';
import { Addresses } from '../../components/profile/addresses/Addresses';
import './profile.css';
import { useUserSession } from '../../store/userSession.store';
import { Navigate } from 'react-router';
import { PageRoutes } from '../../types/enums';
import { useAuth } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
import { PersonalInfoEditForm } from '../../components/profile/personal-info-edit/PersonalInfoEditForm';
import { ProfileOutlined, UserOutlined } from '@ant-design/icons';

export default function Profile() {
  const auth = useAuth();
  const { user } = useUserSession();
  const [isEditablePersonalInfo, setEditablePersonalInfo] = useState(false);
  const [isChangePassword, setChangePassword] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (showSuccessMessage) {
      success('Personal information is updated');
      setShowSuccessMessage(false);
    }
  }, [showSuccessMessage]);

  const success = (message: string) => {
    messageApi.open({
      type: 'success',
      content: message,
    });
  };

  const savePersonalInfo = () => {
    setEditablePersonalInfo(false);
    setShowSuccessMessage(true);
  };

  return auth.isLoggedIn ? (
    <div className="profile">
      {contextHolder}
      <div className="profile-info">
        <Flex justify="start" align="center" gap={10} style={{ marginBottom: '10px' }}>
          <Typography.Title level={4} style={{ margin: 0, color: '#DB4444' }}>
            personal information
          </Typography.Title>
          <UserOutlined style={{ width: '30px', height: '20px', fontSize: '20px', color: '#DB4444' }} />
        </Flex>
        {isEditablePersonalInfo ? (
          <PersonalInfoEditForm user={user} onSave={savePersonalInfo} />
        ) : (
          <PersonalInfo user={user} onEdit={() => setEditablePersonalInfo(true)} />
        )}
        <Button className="button-submit" type="primary" style={{ backgroundColor: '#DB4444', alignSelf: 'start' }}>
          Change password
        </Button>
      </div>
      <div className="profile-addresses">
        <Flex justify="start" align="center" gap={10} style={{ marginBottom: '10px' }}>
          <Typography.Title level={4} style={{ margin: 0, color: '#DB4444' }}>
            addresses
          </Typography.Title>
          <ProfileOutlined
            style={{ width: '30px', height: '20px', fontSize: '20px', color: '#DB4444', marginRight: 100 }}
          />
        </Flex>
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
