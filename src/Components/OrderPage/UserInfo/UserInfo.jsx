import * as CommonStyled from '../../Common/Styled.jsx';
import * as Styled from './Styled.jsx';

function UserInfo({ user, setUser }) {
  const onChange_Additional_address = event => {
    setUser({
      ...user,
      additional_address: event.target.value,
    });
  };
  const onChange_Phone_Number = event => {
    setUser({
      ...user,
      phone_number: event.target.value,
    });
  };

  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        사용자 정보
      </CommonStyled.OrderPageSectionTitle>
      <Styled.UserAddress>{user.address}</Styled.UserAddress>
      <Styled.UserInput
        name="detail"
        type="text"
        defaultValue={user.additional_address || ''}
        onChange={onChange_Additional_address}
      />
      <Styled.UserInput
        name="phoneNum"
        type="text"
        defaultValue={user.phone_number || ''}
        onChange={onChange_Phone_Number}
      />
    </CommonStyled.OrderPageSection>
  );
}

export default UserInfo;
