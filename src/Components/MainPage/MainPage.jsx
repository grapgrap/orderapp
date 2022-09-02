import * as Styled from './Styled.jsx';
import { useNavigate } from 'react-router-dom';

function MainPage({ menu, setMenu }) {
  let userNav = useNavigate();

  return (
    <Styled.MainPageWrap>
      <Styled.OrderMenu></Styled.OrderMenu>
      <Styled.OrderBtn
        onClick={() => {
          // if (!menu) {
          //   alert('메뉴를 선택해주세요!');
          // } else {
          //   userNav('/orderapp/order');
          // }

          userNav('/orderapp/order');
        }}
      >
        주문하기
      </Styled.OrderBtn>
    </Styled.MainPageWrap>
  );
}

export default MainPage;
