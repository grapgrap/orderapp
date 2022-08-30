import * as Styled from './Styled.jsx';

function UserInfo({ userInfo, setUserInfo }) {
  // 상세 주소와 전화 번호를 변경하는 함수 2개를 만들어야 겠다.
  const onChangeAddress = event => {
    setUserInfo({
      address: userInfo.address,
      detail: event.target.value,
      phoneNum: userInfo.phoneNum,
    });
  };

  const onChangePhoneNum = event => {
    setUserInfo({
      address: userInfo.address,
      detail: userInfo.detail,
      phoneNum: event.target.value,
    });
  };

  return (
    <Styled.UserInfoWrap>
      <Styled.UserInfoTitle>주문자 정보</Styled.UserInfoTitle>
      <Styled.UserAddress>{userInfo.address}</Styled.UserAddress>
      <Styled.UserInput
        name="detail"
        type="text"
        value={userInfo.detail}
        onChange={onChangeAddress}
      />
      <Styled.UserInput
        name="phoneNum"
        type="text"
        value={userInfo.phoneNum}
        onChange={onChangePhoneNum}
      />
    </Styled.UserInfoWrap>
  );
}

export default UserInfo;
