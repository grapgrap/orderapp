import * as Styled from './Styled.jsx';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  let userNav = useNavigate();

  return (
    <Styled.MainPageWrap>
      <Styled.OrderMenu></Styled.OrderMenu>
      <Styled.OrderBtn onClick={() => userNav('/orderapp/order')}>
        주문하기
      </Styled.OrderBtn>
    </Styled.MainPageWrap>
  );
}

export default MainPage;
