import * as CommonStyled from '../Common/CommonStyled.jsx';
import { useNavigate } from 'react-router-dom';

function OrderPage({ user, setUser }) {
  let userNav = useNavigate();

  return (
    <CommonStyled.PageWrap>
      <CommonStyled.PageButton>결제하기</CommonStyled.PageButton>
    </CommonStyled.PageWrap>
  );
}

export default OrderPage;
