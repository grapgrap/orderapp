import * as Styled from './Styled.jsx';

function UserInfo({ user, setUser }) {
  const userInfo = user.info;

  const onChangeAddress = event => {
    setUser(current => ({
      ...current,
      info: {
        ...current.info,
        additional_address: event.target.value,
      },
    }));
  };

  const onChangePhoneNum = event => {
    setUser(current => ({
      ...current,
      info: {
        ...current.info,
        phone_number: event.target.value,
      },
    }));
  };

  return (
    <Styled.UserInfoWrap>
      <Styled.UserInfoTitle>주문자 정보</Styled.UserInfoTitle>
      <Styled.UserAddress>{userInfo.address || ''}</Styled.UserAddress>
      <Styled.UserInput
        name="detail"
        type="text"
        value={userInfo.additional_address || ''}
        onChange={onChangeAddress}
      />
      <Styled.UserInput
        name="phoneNum"
        type="text"
        value={userInfo.phone_number || ''}
        onChange={onChangePhoneNum}
      />
    </Styled.UserInfoWrap>
  );
}

export default UserInfo;
