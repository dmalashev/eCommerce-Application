import { Typography } from 'antd';
import AboutUsCard from '../../components/about-us-card/AboutUsCard';

const { Title } = Typography;

export default function AboutUs() {
  return (
    <>
      <Title>About Us</Title>
      <AboutUsCard />
      <AboutUsCard />
      <AboutUsCard />
    </>
  );
}
