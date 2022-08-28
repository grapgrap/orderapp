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

  const onOrderCheck = async () => {
    alert(
      `주소: ${userInfo.address} ${userInfo.detail}\n
      전화번호: ${userInfo.phoneNum}\n
      주문 요청 사항: ${orderRequest}`
    );

    if (isCustom === true) {
      if (option.length < 7) {
        setOption([
          ...option,
          {
            key: option.length - 1,
            value: option.length - 1,
            label: orderRequest,
          },
        ]);
      } else {
        // 의미 없는 변수명 변수명에 대해 한 번 더 생각해 보고 네이밍을 해보자
        const tempOption = option;
        const defaultArr = [];
        setOption([]);
        for (let i = 0; i < 3; i++) {
          defaultArr.push(tempOption[i]);
          if (i === 2) defaultArr.push(tempOption[6]);
        }
        for (let i = 3; i < 5; i++) {
          defaultArr.push({
            key: i,
            value: i,
            label: tempOption[i + 1].label,
          });
        }
        setOption([
          ...defaultArr,
          {
            key: 5,
            value: 5,
            label: orderRequest,
          },
        ]);
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
