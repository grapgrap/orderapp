import * as CommonStyled from '../Common/CommonStyled.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';

function OrderPage({ user, setUser }) {
  // 결제하기
  const onOrderCheck = () => {
    alert(`결제완료!`);
  };

  return (
    <CommonStyled.PageWrap>
      <UserInfo user={user} setUser={setUser} />
      <CommonStyled.PageButton onClick={onOrderCheck}>
        결제하기
      </CommonStyled.PageButton>
    </CommonStyled.PageWrap>
  );
}

export default OrderPage;
