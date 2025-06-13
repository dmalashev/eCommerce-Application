import logoImg from '../../assets/images/logo.png';
import { Typography, Image } from 'antd';

const { Link } = Typography;

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logoImg} alt="The Records Store" preview={false} height="64px" />
    </Link>
  );
}
