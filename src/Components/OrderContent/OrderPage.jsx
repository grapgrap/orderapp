import styled from 'styled-components';
import Payment from './Payment';
import Requests from './Requests';
import UserInfo from './UserInfo';
import Discount from './Discount';
import OrderInfo from './OrderInfo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPage({ userInfo, setUserInfo }) {
  let userNav = useNavigate();

  // 주문 요청 사항 옵션
  const option = [
    {
      key: 0,
      value: 0,
      label: '벨은 누르지 말아주세요!',
    },
    {
      key: 1,
      value: 1,
      label: '문 앞에 놓아 주시고 연락 주세요.',
    },
    {
      key: 2,
      value: 2,
      label: '반찬은 안 주셔도 되요.',
    },
    {
      key: 'CUSTOM',
      value: 'CUSTOM',
      label: '직접 입력',
    },
  ];

  // 주문 요청 사항 state
  const [orderRequest, setOrderRequest] = useState('벨은 누르지 말아주세요!');
  const [additionalRequest, setAdditionalRequest] = useState([]);
  const [isCustom, setIsCustom] = useState(false);

  const onOrderCheck = () => {
    alert(
      `주소: ${userInfo.address} ${userInfo.detail}\n전화번호: ${userInfo.phoneNum}\n주문 요청 사항: ${orderRequest}`
    );

    if (isCustom === true) {
      setAdditionalRequest([
        ...additionalRequest,
        {
          key: option.length - 1,
          value: option.length - 1,
          label: orderRequest,
        },
      ]);
    }
    //userNav('/orderapp/');
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
