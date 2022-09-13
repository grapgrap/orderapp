import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as CommonStyled from '../Common/CommonStyled.jsx';
import Discount from './Discount/Discount.jsx';
import Orderer from './Orderer/Orderer.jsx';
import Payment from './Payment/Payment.jsx';
import Request from './Request/Request.jsx';
import { NONE, COUPON, POINT } from '../../Constants.js';
import CouponMenu from './Discount/CouponMenu.jsx';
import OrderHistory from './OrderHistory/OrderHistory.jsx';

// 기본 정보
const basicRequestOption = [
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

// 장바구니
const orderList = [
  { id: 0, name: '태백시 감자올리브', price: 18000 },
  { id: 1, name: '태백산 감자버거', price: 5400 },
  { id: 2, name: '황지동 감자족발', price: 32000 },
];

function OrderPage({ user, setUser }) {
  const navigate = useNavigate();

  // 결과 State
  // 주문자 : 주소, 상세주소, 전화번호
  // 주문 요청 사항
  // 결제 수단
  // 할인 수단
  // 총 결제 금액
  const [result, setResult] = useState({
    orderer: {
      address: user.address,
      additional_address: user.additional_address,
      phone_number: user.phone_number,
    },
    request: '',
    payment: '',
    discount: NONE,
    coupon_id: '',
    coupon_name: '',
    dicount_type: '',
    discount_mount: 0,
    discount_price: 0,
    total_price: 0,
  });

  // REQUEST
  // 직접 입력 State
  const [isCustom, setIsCustom] = useState(false);

  // 쿠폰 스테이트
  const [coupon, setCoupon] = useState(null);
  const [isMenu, setIsMenu] = useState(false);
  // 쿠폰 데이터 받아오기
  const getCoupon = async () => {
    const couponList = [];
    for (let i = 0; i < user.coupons.length; i++) {
      await axios
        .get(`http://localhost:4000/coupons/${user.coupons[i]}`)
        .then(response => {
          couponList.push({
            id: user.coupons[i],
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

  // 결제하기
  const onCompletePayment = () => {
    alert(
      `주소: ${result.orderer.address}\n상세주소: ${
        result.orderer.additional_address
      }\n전화번호: ${result.orderer.phone_number}\n주문 요청 사항: ${
        result.request
      }\n결제 수단: ${result.payment}\n할인 수단: ${
        result.discount
      }\n총 결제 금액: ${(result.total_price - result.discount_price)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원\n결제완료!`
    );

    // 사용자가 직접입력을 선택했을 경우
    if (isCustom) {
      if (user.additional_requests.length >= 3) user.additional_requests.pop();
      setUser(current => ({
        ...current,
        additional_requests: [result.request, ...current.additional_requests],
      }));
    }

    // 사용자가 쿠폰을 사용하여 결제를 했을 경우
    if (result.discount === COUPON) {
      const remainCoupon = user.coupons.filter(
        coupon => coupon !== result.coupon_id
      );
      setUser(current => ({
        ...current,
        coupons: remainCoupon,
      }));
    }

    // 사용자가 포인트를 이용하여 결제를 했을 경우
    if (result.discount === POINT) {
      setUser(current => ({
        ...current,
        points: current.points - result.discount_mount,
      }));
    }
    console.log(result);
    navigate('/orderapp');
  };

  if (coupon) {
    return (
      <CommonStyled.PageWrap>
        <Orderer user={user} result={result} setResult={setResult} />
        <Request
          user={user}
          basicRequestOption={basicRequestOption}
          isCustom={isCustom}
          setIsCustom={setIsCustom}
          setResult={setResult}
        />
        <Payment user={user} setResult={setResult} />
        <Discount
          user={user}
          result={result}
          setResult={setResult}
          setIsMenu={setIsMenu}
        />
        {isMenu ? (
          <CouponMenu
            coupon={coupon}
            result={result}
            setResult={setResult}
            setIsMenu={setIsMenu}
          />
        ) : (
          <></>
        )}
        <OrderHistory
          orderList={orderList}
          result={result}
          setResult={setResult}
        />
        <CommonStyled.PageButton onClick={onCompletePayment}>
          결제하기
        </CommonStyled.PageButton>
      </CommonStyled.PageWrap>
    );
  } else return null;
}

export default OrderPage;
