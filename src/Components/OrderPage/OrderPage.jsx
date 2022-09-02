import styled from 'styled-components';
import Requests from './Requests/Requests';
import UserInfo from './UserInfo/UserInfo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment/Payment';
import Discount from './Discount/Discount';
import OrderHistory from './OrderHistory/OrderHistory';

function OrderPage({ user, setUser }) {
  let userNav = useNavigate();

  // 주문 요청 사항 옵션
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

  // 주문 요청 사항 state
  const [orderRequest, setOrderRequest] = useState('벨은 누르지 말아주세요!');
  const [isCustom, setIsCustom] = useState(false);

  // 결제 수단 state
  const [pay, setPay] = useState(user.payment_methods[0].vendor_name);

  const onOrderCheck = () => {
    alert(
      `주소: ${user.info.address} ${user.info.additional_address}\n전화번호: ${user.info.phone_number}\n주문 요청 사항: ${orderRequest}\n결제 수단: ${pay}`
    );

    if (isCustom === true) {
      if (user.requestList.length < 3) {
        setUser(current => ({
          ...current,
          requestList: [orderRequest, ...current.requestList],
        }));
      } else {
        user.requestList.pop();
        setUser(current => ({
          ...current,
          requestList: [orderRequest, ...current.requestList],
        }));
      }
    }

    userNav('/orderapp/');
  };

  // console.log(user);

  // 할인 수단 선택
  const [discountHistory, setDiscountHistory] = useState('');
  const [isDiscountmenu, setIsDiscountMenu] = useState(false);
  const couponList = [];
  for (let i = 0; i < user.discount.coupon.length; i++) {
    couponList.push(
      <DiscountCouponMenuContent key={user.discount.coupon[i].coupon_id}>
        {user.discount.coupon[i].coupon_name}
      </DiscountCouponMenuContent>
    );
  }

  // 주문 내역
  const menuList = [
    { id: 0, name: 'BBQ 황금올리브', price: 18000 },
    { id: 1, name: '맘스터치 싸이버거', price: 5400 },
    { id: 2, name: '장충동 왕족발', price: 32000 },
  ];

  return (
    <OrderPageWrap>
      <UserInfo user={user} setUser={setUser} />
      <Requests
        option={option}
        additionalRequest={user.requestList}
        isCustom={isCustom}
        setIsCustom={setIsCustom}
        setOrderRequest={setOrderRequest}
      />
      <Payment paymentMethods={user.payment_methods} setPay={setPay} />
      <Discount
        discount={user.discount}
        isDiscountmenu={isDiscountmenu}
        setDiscountMethods={setDiscountHistory}
        setIsDiscountMenu={setIsDiscountMenu}
      />
      {isDiscountmenu ? (
        <DiscountCouponMenuWrap onClick={() => setIsDiscountMenu(false)}>
          <DiscountCouponMenu>{couponList}</DiscountCouponMenu>
        </DiscountCouponMenuWrap>
      ) : (
        <></>
      )}
      <OrderHistory menuList={menuList} />
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

export const DiscountCouponMenuWrap = styled.div`
  position: absolute;
  min-width: 20rem;
  max-width: 30rem;
  height: 100%;
  background: rgb(128, 128, 128, 0.5);
`;

export const DiscountCouponMenu = styled.div`
  position: absolute;
  bottom: 0;
  min-width: 18rem;
  max-width: 28rem;
  height: 15rem;
  background: white;
  margin: 0 1rem;
`;

export const DiscountCouponMenuContent = styled.div``;
