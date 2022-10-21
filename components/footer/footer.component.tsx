import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { MouseEventType } from "../../utils/interfaces/interfaces";
import StyledFooter from "./footer.styles";
const Footer = () => {
  return (
    <StyledFooter>
      <span>&copy; NGSilvestre.com 2022</span>
    </StyledFooter>
  );
};

export default Footer;
