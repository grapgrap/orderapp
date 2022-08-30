import styled from 'styled-components';
import Requests from './Requests/Requests';
import UserInfo from './UserInfo/UserInfo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPage({ user, setUser }) {
  let userNav = useNavigate();

  // 주문 요청 사항 옵션
  const option = [
    {
      id: 0,
      label: '벨은 누르지 말아주세요!',
    },
    {
      id: 1,
      label: '문 앞에 놓아 주시고 연락 주세요.',
    },
    {
      id: 2,
      label: '반찬은 안 주셔도 되요.',
    },
    {
      id: 'CUSTOM',
      label: '직접 입력',
    },
  ];

  // 주문 요청 사항 state
  const [orderRequest, setOrderRequest] = useState('벨은 누르지 말아주세요!');
  const [isCustom, setIsCustom] = useState(false);

  const onOrderCheck = () => {
    alert(
      `주소: ${user.address} ${user.additional_address}\n전화번호: ${user.phone_number}\n주문 요청 사항: ${orderRequest}`
    );

    //userNav('/orderapp/');
  };

  return (
    <OrderPageWrap>
      <UserInfo user={user} setUser={setUser} />
      <Requests />
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
