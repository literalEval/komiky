import LogoSvg from "../img/logo_w.svg";

const Logo = (props: any): JSX.Element => {
  return <img width={props.width} alt="komiky-logo" src={LogoSvg}></img>;
};

export default Logo;
