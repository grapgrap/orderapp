import styled from 'styled-components';

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
    <UserInfoWrap>
      <UserInfoTitle>주문자 정보</UserInfoTitle>
      <UserAddress>{userInfo.address}</UserAddress>
      <UserInput
        name="detail"
        type="text"
        value={userInfo.detail}
        onChange={onChangeAddress}
      />
      <UserInput
        name="phoneNum"
        type="text"
        value={userInfo.phoneNum}
        onChange={onChangePhoneNum}
      />
    </UserInfoWrap>
  );
}

export default UserInfo;

export const UserInfoWrap = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const UserInfoTitle = styled.span`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const UserAddress = styled.span`
  margin-top: 0.5rem;
`;

export const UserInput = styled.input`
  height: 1.5rem;
  margin-top: 0.5rem;
`;
