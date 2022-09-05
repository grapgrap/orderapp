import * as Styled from './Styled.jsx';
import * as CommonStyled from '../Common/Styled.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';

function OrderPage({ user, setUser }) {
  return (
    <CommonStyled.PageWrap>
      <UserInfo user={user} setUser={setUser} />
    </CommonStyled.PageWrap>
  );
}

export default OrderPage;
