import {REGULAR_TITLE_SUCCESS_FULL} from "../../constants";

import {NotificationWrapper, StyledText} from "./styled";

const SuccessCreditNotification = () => {
  return (
    <NotificationWrapper>
      <StyledText>{REGULAR_TITLE_SUCCESS_FULL}</StyledText>
    </NotificationWrapper>
  );
};

export default SuccessCreditNotification;
