import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as CommonStyled from '../Common/CommonStyled.jsx';
import Orderer from './Orderer/Orderer.jsx';

function OrderPage({ user, setUser }) {
  let userNav = useNavigate();

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
    discount: '',
    total_price: 0,
  });

  // 쿠폰 스테이트
  const [coupon, setCoupon] = useState(null);
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
      }\n총 결제 금액: ${result.total_price
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원\n결제완료!`
    );

    userNav('/orderapp');
  };

  if (coupon) {
    return (
      <CommonStyled.PageWrap>
        <Orderer user={user} result={result} setResult={setResult} />
        <CommonStyled.PageButton onClick={onCompletePayment}>
          결제하기
        </CommonStyled.PageButton>
      </CommonStyled.PageWrap>
    );
  } else return null;
}

export default OrderPage;
