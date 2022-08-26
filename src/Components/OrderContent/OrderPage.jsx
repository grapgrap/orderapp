import styled from 'styled-components';
import Payment from './Payment';
import Requests from './Requests';
import UserInfo from './UserInfo';
import Discount from './Discount';
import OrderInfo from './OrderInfo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPage({ userInfo, setUserInfo, option, setOption }) {
  let userNav = useNavigate();

  // 주문 요청 사항
  const [orderRequest, setOrderRequest] = useState('벨은 누르지 말아주세요!');
  const [isCustom, setIsCustom] = useState(false);
  // 여기까지 주문 요청 사항

  const onOrderCheck = () => {
    alert(
      `주소: ${userInfo.address} ${userInfo.detail}\n
      전화번호: ${userInfo.phoneNum}\n
      주문 요청 사항: ${orderRequest}`
    );

    if (isCustom === true) {
      // 정렬하는 법 찾아야 함
      if (option.length <= 7) {
        setOption([
          ...option,
          {
            key: option.length - 1,
            value: option.length - 1,
            label: orderRequest,
          },
        ]);
        // sort를 쓸 것인가
        // 아니면 temp를 써서 확인해보기
      } else {
        // 7 이상인 경우 하나 제거 후 하나 생성
      }
    }

    userNav('/orderapp/');
  };
  return (
    <OrderPageWrap>
      <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
      <Requests
        setOrderRequest={setOrderRequest}
        isCustom={isCustom}
        setIsCustom={setIsCustom}
        option={option}
      />
      <Payment />
      <Discount />
      <OrderInfo />
      <OrderBtn onClick={onOrderCheck}>결제하기</OrderBtn>
    </OrderPageWrap>
  );
}

export default OrderPage;

export const OrderPageWrap = styled.div`
  background-color: rgb(250, 250, 236);
  min-width: 20rem;
  max-width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const OrderBtn = styled.button`
  margin-bottom: 2rem;
  height: 2rem;
  border-radius: 2rem;
  border: none;
  background: rgb(134, 134, 252);
  color: white;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    background: rgb(252, 134, 189);
  }
`;
