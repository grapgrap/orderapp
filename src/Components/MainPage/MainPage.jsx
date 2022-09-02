import * as Styled from './Styled.jsx';
import { useNavigate } from 'react-router-dom';

function MainPage({ menu, setMenu }) {
  let userNav = useNavigate();
  const menuList = {
    menu01: {
      name: 'BBQ 황금올리브',
      price: 18000,
    },
    menu02: {
      name: '맘스터치 싸이버거',
      price: 5400,
    },
    menu03: {
      name: '도미노 포테이토피자',
      price: 12000,
    },
    menu04: {
      name: '캐비어',
      price: 1000000,
    },
  };

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
