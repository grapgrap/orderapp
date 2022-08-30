import * as Styled from './Styled.jsx';

function UserInfo({ user, setUser }) {
  const onChangeAddress = event => {
    setUser(current => ({
      ...current,
      additional_address: event.target.value,
    }));
  };

  const onChangePhoneNum = event => {
    setUser(current => ({
      ...current,
      phone_number: event.target.value,
    }));
  };

  return (
    <Styled.UserInfoWrap>
      <Styled.UserInfoTitle>주문자 정보</Styled.UserInfoTitle>
      <Styled.UserAddress>{user.address}</Styled.UserAddress>
      <Styled.UserInput
        name="detail"
        type="text"
        value={user.additional_address || ''}
        onChange={onChangeAddress}
      />
      <Styled.UserInput
        name="phoneNum"
        type="text"
        value={user.phone_number || ''}
        onChange={onChangePhoneNum}
      />
    </Styled.UserInfoWrap>
  );
}

export default UserInfo;
