import * as CommonStyled from '../Common/CommonStyled.jsx';
import Request from './Request/Request.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';

function OrderPage({ user, setUser }) {
  // 결제하기
  const onOrderCheck = () => {
    alert(
      `주소: ${user.address}\n상세주소: ${user.additional_address}\n전화번호: ${user.phone_number}\n결제완료!`
    );
  };

  return (
    <CommonStyled.PageWrap>
      <UserInfo user={user} setUser={setUser} />
      <Request />
      <CommonStyled.PageButton onClick={onOrderCheck}>
        결제하기
      </CommonStyled.PageButton>
    </CommonStyled.PageWrap>
  );
}

export default OrderPage;
