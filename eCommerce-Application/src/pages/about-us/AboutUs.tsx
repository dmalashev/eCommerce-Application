import { Typography } from 'antd';
import AboutUsCard from '../../components/about-us-card/AboutUsCard';
import artyomPhoto from '../../assets/images/developers-photos/artyom.jpg';
import shakhriPhoto from '../../assets/images/developers-photos/shakhri.jpg';

const { Title } = Typography;

export default function AboutUs() {
  return (
    <>
      <Title>About Us</Title>
      <AboutUsCard
        photo={artyomPhoto}
        name="Artyom Migalev"
        description="I am a frontend developer with experience in creating modern, responsive and interactive web applications. I specialize in JavaScript, HTML, CSS, TypeScript. My goal is to create convenient, productive and visually attractive interfaces that improve user experience.
In my work, I pay attention to code cleanliness, performance optimization and cross-browser compatibility. I constantly study new technologies and tools to stay up to date with the latest trends in web development.

Skills:

JavaScript (ES6+)

HTML5, CSS3, SASS/SCSS

Build tools (Webpack, Vite)

Version control systems (Git, GitHub)

Cross-browser and responsive layout

Basic knowledge of TypeScript"
      />
      <AboutUsCard
        photo={shakhriPhoto}
        name="Shakhperi Ramaldanova"
        description="I would like to be a front-end developer and work for a big company. I've had experience in developing. I used to develop android applications and now I am more interested in web developing"
      />
      {/* <AboutUsCard /> */}
    </>
  );
}
