import { useState } from 'react';
import * as CommonStyled from '../Common/CommonStyled.jsx';
import Request from './Request/Request.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment/Payment.jsx';
import OrderHistory from './OrderHistory/OrderHistory.jsx';
import Discount from './Discount/Discount.jsx';
import axios from 'axios';
import { useEffect } from 'react';

function OrderPage({ user, setUser }) {
  let userNav = useNavigate();

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

  // 결제 수단 선택
  const [pay, setPay] = useState(null);

  // 할인 수단 선택
  // 쿠폰 State
  const [coupon, setCoupon] = useState(null);

  // 쿠폰 get
  const getCoupon = async () => {
    const couponList = [];
    for (let i = 0; i < user.coupons.length; i++) {
      await axios
        .get(`http://localhost:4000/coupons/${user.coupons[i]}`)
        .then(response => {
          couponList.push({
            type: response.data.type,
            name: response.data.name,
            value: response.data.value,
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
    setCoupon(couponList);
  };

  useEffect(() => {
    getCoupon();
  }, []);

  // 쿠폰 사용인지 포인트 사용인지
  // 둘다 사용하지 않고 있을 경우 null
  // 쿠폰 사용일 경우 true, 포인트 사용일 경우 false
  const [isDiscountMethod, setIsDiscountMethod] = useState(null);

  // 포인트
  const [point, setPoint] = useState(0);

  // 배달 주문 내역
  // 장바구니
  const orderList = [
    { id: 0, name: 'BBQ 황금올리브', price: 18000 },
    { id: 1, name: '태백산 감자버거', price: 5400 },
    { id: 2, name: '장충동 왕족발', price: 32000 },
  ];
  // 총 결제 금액
  const [totalPrice, setTotalPrice] = useState(0);

  // 결제하기
  const onOrderCheck = () => {
    if (pay) {
      alert(
        `주소: ${user.address}\n상세주소: ${
          user.additional_address
        }\n전화번호: ${
          user.phone_number
        }\n주문 요청 사항: ${orderRequest}\n결제 수단: ${pay}\n총 결제 금액: ${totalPrice
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원\n결제완료!`
      );

      // 사용자가 직접입력을 선택했을 경우
      if (isCustom) {
        if (user.additional_requests.length >= 3)
          user.additional_requests.pop();
        setUser(current => ({
          ...current,
          additional_requests: [orderRequest, ...current.additional_requests],
        }));
      }

      userNav('/orderapp');
    } else {
      alert(`결제하실 카드를 선택해주세요!`);
    }
  };

  return (
    <CommonStyled.PageWrap>
      <UserInfo user={user} setUser={setUser} />
      <Request
        user={user}
        requestOption={requestOption}
        isCustom={isCustom}
        setIsCustom={setIsCustom}
        setOrderRequest={setOrderRequest}
      />
      <Payment user={user} setPay={setPay} />
      {coupon ? (
        <>
          <Discount
            user={user}
            totalPrice={totalPrice}
            coupon={coupon}
            point={point}
            setPoint={setPoint}
            setIsDiscountMethod={setIsDiscountMethod}
          />
        </>
      ) : (
        <></>
      )}
      <OrderHistory orderList={orderList} setTotalPrice={setTotalPrice} />
      <CommonStyled.PageButton onClick={onOrderCheck}>
        결제하기
      </CommonStyled.PageButton>
    </CommonStyled.PageWrap>
  );
}

export default OrderPage;
