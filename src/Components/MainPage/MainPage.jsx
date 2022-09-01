import * as Styled from './Styled.jsx';
import { useNavigate } from 'react-router-dom';

function MainPage({ menu, setMenu }) {
  let userNav = useNavigate();

  return (
    <Styled.MainPageWrap>
      <Styled.OrderMenu>
        <Styled.OrderMenuCheck type="checkbox" name="menu01" />
        <Styled.OrderMenuLabel htmlFor="menu01">
          BBQ 황금올리브
        </Styled.OrderMenuLabel>
      </Styled.OrderMenu>
      <Styled.OrderMenu>
        <Styled.OrderMenuCheck type="checkbox" name="menu02" />
        <Styled.OrderMenuLabel htmlFor="menu02">
          맘스터치 싸이버거
        </Styled.OrderMenuLabel>
      </Styled.OrderMenu>
      <Styled.OrderMenu>
        <Styled.OrderMenuCheck type="checkbox" name="menu02" />
        <Styled.OrderMenuLabel htmlFor="menu02">
          도미노피자 포테이토 피자
        </Styled.OrderMenuLabel>
      </Styled.OrderMenu>
      {/* 버튼 선택 시 메뉴 setting */}
      <Styled.OrderBtn
        onClick={() => {
          if (!menu) {
            alert('메뉴를 선택해주세요!');
          } else {
            userNav('/orderapp/order');
          }
        }}
      >
        주문하기
      </Styled.OrderBtn>
    </Styled.MainPageWrap>
  );
}

export default MainPage;
