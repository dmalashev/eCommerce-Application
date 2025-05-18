import logoImg from '../../assets/images/logo.png';

export default function Logo() {
  return (
    <a href="/">
      <img src={logoImg} alt="The Records Store" style={{ height: '64px' }} />
    </a>
  );
}
