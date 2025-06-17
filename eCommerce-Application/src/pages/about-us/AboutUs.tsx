import { Typography, Flex } from 'antd';
import AboutUsCard from '../../components/about-us-card/AboutUsCard';
import artyomPhoto from '../../assets/images/developers-photos/artyom.jpg';
import shakhriPhoto from '../../assets/images/developers-photos/shakhri.jpg';
import dmitriyPhoto from '../../assets/images/developers-photos/dmitriy.jpg';
import rsLogo from '../../assets/images/rs_school_js.svg';

const { Title, Link } = Typography;

export default function AboutUs() {
  return (
    <Flex vertical align="center" gap={20} style={{ padding: 20 }}>
      <Title>About Us</Title>
      <AboutUsCard
        photo={artyomPhoto}
        name="Artyom Migalev"
        role="Frontend Developer"
        description="I am a frontend developer with experience in creating modern, responsive and interactive web applications. I specialize in JavaScript, HTML, CSS, TypeScript. My goal is to create convenient, productive and visually attractive interfaces that improve user experience. In my work, I pay attention to code cleanliness, performance optimization and cross-browser compatibility. I constantly study new technologies and tools to stay up to date with the latest trends in web development."
        contribution={['Set up CommerceTools', 'ALL of the API functions(!)', 'Make product list', 'Unit tests']}
        githubName="artmigalev"
        githubLink="https://github.com/artmigalev"
      />
      <AboutUsCard
        photo={shakhriPhoto}
        name="Shakhperi Ramaldanova"
        role="Frontend Developer"
        description="I would like to be a front-end developer and work for a big company. I've had experience in developing. I used to develop android applications and now I am more interested in web developing"
        contribution={['Login page', 'Registration page', 'User profile page', 'Cart page', 'Main page', 'UI tests']}
        githubName="Shakhrii"
        githubLink="https://github.com/Shakhrii"
      />
      <AboutUsCard
        photo={dmitriyPhoto}
        name="Dmitriy Malashev"
        role="Frontend Developer, TeamLead"
        description="I had experience in coding with Fortran and Visual Basic and after that I realized that I enjoy creating user interfaces. So now I’m learning front-end development. With more diving to this field I become more and more interested in it, so I really want to learn front-end and work as a developer."
        contribution={[
          'Set up the project repository',
          'General layout and header',
          'Catalog page',
          'Detailed product page',
          'About us page',
        ]}
        githubName="dmalashev"
        githubLink="https://github.com/dmalashev"
      />
      <Title level={4}>
        To provide joint work in the team and separate tasks we used Jira dashboard. We decomposited tasks to clearly
        define goals and noted them to understand who is working on what. Each pull request was checked and approved by
        teammates. We made calls to analize tasks and take them on. To notify about a new pull-request, solve short
        problems quickly or share useful information we corresponded in chat. It was also useful because most of
        teammates are really busy. In the end we've got this app for your assessment!{' '}
      </Title>
      <Link href="https://rs.school/courses/javascript-ru" target="_blank">
        <img src={rsLogo} alt="RS Logo" width={300} />
      </Link>
    </Flex>
  );
}
