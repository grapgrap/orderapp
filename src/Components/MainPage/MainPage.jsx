import * as Styled from './Styled.jsx';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  let userNav = useNavigate();
  const onHandlerOrder = () => userNav('/orderapp/order');

  return (
    <Styled.MainPageWrap>
      <Styled.MainPageDiv></Styled.MainPageDiv>
      <Styled.MainPageBtn onClick={onHandlerOrder}>결제하기</Styled.MainPageBtn>
    </Styled.MainPageWrap>
  );
}

export default MainPage;
