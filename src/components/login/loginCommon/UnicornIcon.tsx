import Logo2 from "../../../assets/icons/logo2.svg";
import styled from "styled-components";

const UnicornIcon = () => {
  return (
    <UnicornIconContainer>
      <img src={Logo2} alt="Logo" />
    </UnicornIconContainer>
  );
};

export default UnicornIcon;

const UnicornIconContainer = styled.div`
  width: 100%;
`;
