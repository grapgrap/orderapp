import * as Styled from './Styled.jsx';
import * as CommonStyled from '../Common/Styled.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';
import Requests from './Requests/Requests.jsx';
import { useState } from 'react';
import Payment from './Payment/Payment.jsx';

function OrderPage({ user, setUser }) {
  // 주문 요청 사항
  const option = [
    {
      id: 0,
      value: 0,
      label: '벨은 누르지 말아주세요!',
    },
    {
      id: 1,
      value: 1,
      label: '문 앞에 놓아 주시고 연락 주세요.',
    },
    {
      id: 2,
      value: 2,
      label: '반찬은 안 주셔도 되요.',
    },
    {
      id: 'CUSTOM',
      value: 'CUSTOM',
      label: '직접 입력',
    },
  ];
  const [orderRequest, setOrderRequest] = useState('벨은 누르지 말아주세요!');
  const [isCustom, setIsCustom] = useState(false);

  return (
    <CommonStyled.PageWrap>
      <UserInfo user={user} setUser={setUser} />
      <Requests
        additional_requests={user.additional_requests}
        option={option}
        isCustom={isCustom}
        setIsCustom={setIsCustom}
        setOrderRequest={setOrderRequest}
      />
      <Payment user={user} />
    </CommonStyled.PageWrap>
  );
}

export default OrderPage;
