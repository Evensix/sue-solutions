
import { FC } from "react";
import MiniLogo from "../assets/SueBrandMini.svg";
import Logo from "../assets/SueBrand.svg";

type Props = {
  size?: "mini" | "full";
};

const BrandLogo: FC<Props> = ({ size = "full" }) => {
  if (size === "mini") {
    return (
      <img src={MiniLogo} alt="Mini Logo" />
    );
  }
  return (
    <img src={Logo} alt="Full Logo" />
  );
};

export default BrandLogo;