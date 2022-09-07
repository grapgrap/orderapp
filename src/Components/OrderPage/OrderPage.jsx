import { useState } from 'react';
import * as CommonStyled from '../Common/CommonStyled.jsx';
import Request from './Request/Request.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';

function OrderPage({ user, setUser }) {
  // 주문 요청 사항
  // 기본 주문 요청 사항 리스트
  const requestOption = [
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
  // 결제 시 주문 요청 사항
  const [orderRequest, setOrderRequest] = useState('벨은 누르지 말아주세요!');
  // 직접 입력인지 아닌지
  const [isCustom, setIsCustom] = useState(false);

  // 결제하기
  const onOrderCheck = () => {
    alert(
      `주소: ${user.address}\n상세주소: ${user.additional_address}\n전화번호: ${user.phone_number}\n결제완료!`
    );
  };

  return (
    <CommonStyled.PageWrap>
      <UserInfo user={user} setUser={setUser} />
      <Request requestOption={requestOption} />
      <CommonStyled.PageButton onClick={onOrderCheck}>
        결제하기
      </CommonStyled.PageButton>
    </CommonStyled.PageWrap>
  );
}

export default OrderPage;
