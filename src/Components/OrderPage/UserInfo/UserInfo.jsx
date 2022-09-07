import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function UserInfo() {
  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        사용자 정보
      </CommonStyled.OrderPageSectionTitle>
      <Styled.UserAddress></Styled.UserAddress>
      <Styled.UserInput name="detail" type="text" />
      <Styled.UserInput name="phoneNum" type="text" />
    </CommonStyled.OrderPageSection>
  );
}

export default UserInfo;
