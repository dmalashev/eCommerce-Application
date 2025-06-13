import { Button, Flex, Typography } from 'antd';
import { User } from '../../../types/types';
type Properties = {
  user: User | undefined;
  onEdit: () => void;
};
export const PersonalInfo = ({ user, onEdit }: Properties) => {
  return (
    <>
      <Flex vertical>
        <Typography.Text id="firstName" style={{ fontSize: '16px' }}>{`${user?.firstName}`}</Typography.Text>
        <Typography.Text style={{ fontSize: '16px' }}>{`${user?.lastName}`}</Typography.Text>
        <Typography.Text type="secondary">{user?.email}</Typography.Text>
        <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
          {user?.dateOfBirth}
        </Typography.Text>
      </Flex>
      <Flex vertical style={{ alignItems: 'start', justifyContent: 'space-between' }} gap={15}>
        <Button
          className="button-submit"
          style={{ backgroundColor: '#DB4444' }}
          type="primary"
          htmlType="submit"
          onClick={onEdit}
        >
          Edit personal info
        </Button>
      </Flex>
    </>
  );
};
