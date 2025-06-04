import { JSX } from 'react';
import { Modal } from 'antd';

interface ModalViewProperties {
  children: JSX.Element;
  title: string;
  ok: () => void;
  cancel: () => void;
  isModalOpen: boolean;
}

export const ModalView = ({ children, title, ok, cancel, isModalOpen }: ModalViewProperties) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    // setIsModalOpen(false);
    ok();
  };

  const handleCancel = () => {
    // setIsModalOpen(false);
    cancel();
  };

  return (
    <>
      <Modal
        closable={{ 'aria-label': 'Custom Close Button' }}
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // it isn't work without null because it is an Ant Design's rule
        // eslint-disable-next-line unicorn/no-null
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};
