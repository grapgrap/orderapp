import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function Orderer({ user, setUser }) {
  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        사용자 정보
      </CommonStyled.OrderPageSectionTitle>
      <Styled.UserAddress>{user.address}</Styled.UserAddress>
      <Styled.UserInput
        name="detail"
        type="text"
        value={user.additional_address}
      />
      <Styled.UserInput name="phoneNum" type="text" value={user.phone_number} />
    </CommonStyled.OrderPageSection>
  );
}

export default Orderer;
