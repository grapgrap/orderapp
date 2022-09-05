import * as Styled from './Styled.jsx';
import * as CommonStyled from '../Common/Styled.jsx';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  let userNav = useNavigate();
  const onHandlerOrder = () => userNav('/orderapp/order');

  return (
    <CommonStyled.PageWrap>
      <Styled.MainPageDiv></Styled.MainPageDiv>
      <Styled.MainPageBtn onClick={onHandlerOrder}>결제하기</Styled.MainPageBtn>
    </CommonStyled.PageWrap>
  );
}

export default MainPage;
