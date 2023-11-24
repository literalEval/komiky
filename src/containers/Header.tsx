import { useMediaQuery } from "react-responsive";
import Logo from "../components/Logo";

import "./header.css";

const Header = (props: any): JSX.Element => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <header
      className="header"
      style={{
        ...props.style,
      }}
    >
      <Logo width={isDesktopOrLaptop ? "14%" : "42%"}></Logo>
      <div>{props.children}</div>
    </header>
  );
};

export default Header;
