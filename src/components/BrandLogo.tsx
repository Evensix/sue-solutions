
import { FC } from "react";
import MiniLogo from "../assets/SueBrandMini.svg";
import Logo from "../assets/SueBrand.svg";

type Props = {
  mini?: boolean;
};

const BrandLogo: FC<Props> = ({ mini = false }) => {
  if (mini) {
    return (
      <img src={MiniLogo} alt="Mini Logo" />
    );
  } else
  return (
    <img src={Logo} alt="Full Logo" />
  );
};

export default BrandLogo;