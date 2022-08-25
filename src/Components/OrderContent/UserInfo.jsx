import styled from 'styled-components';

function UserInfo({ userInfo, setUserInfo }) {
  const onChangeDetails = event => {
    const { name, value } = event.target;

    if (name === 'detail') {
      setUserInfo({
        address: userInfo.address,
        detail: value,
        phoneNum: userInfo.phoneNum,
      });
    } else if (name === 'phoneNum') {
      setUserInfo({
        address: userInfo.address,
        detail: userInfo.detail,
        phoneNum: value,
      });
    }
  };

  return (
    <UserInfoWrap>
      <UserInfoTitle>주문자 정보</UserInfoTitle>
      <UserAddress>{userInfo.address}</UserAddress>
      <UserInput
        name="detail"
        type="text"
        value={userInfo.detail}
        onChange={onChangeDetails}
      />
      <UserInput
        name="phoneNum"
        type="text"
        value={userInfo.phoneNum}
        onChange={onChangeDetails}
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
