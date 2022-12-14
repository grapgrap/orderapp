import * as CommonStyled from '../Common/CommonStyled.jsx';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function MainPage({ user }) {
  const navigate = useNavigate();
  const goOrder = () => navigate('/orderapp/order');

  return (
    <CommonStyled.PageWrap>
      <MainPageDiv></MainPageDiv>
      <CommonStyled.PageButton onClick={goOrder}>
        주문하기
      </CommonStyled.PageButton>
    </CommonStyled.PageWrap>
  );
}

export default MainPage;

export const MainPageDiv = styled.div`
  flex: 1;
`;
