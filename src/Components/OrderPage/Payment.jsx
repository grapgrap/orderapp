import { useState } from 'react';
import styled from 'styled-components';

function Payment() {
  const [paymentList, setPaymentList] = useState([
    {
      id: 1,
      cardName: '농협카드',
      cardNum: '0123-4567-8912-3456',
    },
    {
      id: 2,
      cardName: '신한카드',
      cardNum: '0123-4567-8912-3456',
    },
    {
      id: 3,
      cardName: '국민카드',
      cardNum: '0123-4567-8912-3456',
    },
  ]);

  return (
    <PaymentWrap>
      <PaymentTitle>결제 수단</PaymentTitle>
      <PaymentSlideWrap>
        <PaymentSlideList>
          {paymentList.map(item => {
            return (
              <>
                {/* key prop 오류 내일 고쳐보자 */}
                <PaymentSlideContent key={item.id}>
                  {item.cardName}
                </PaymentSlideContent>
              </>
            );
          })}
        </PaymentSlideList>
      </PaymentSlideWrap>
      <PaymentSlideRadioWrap>
        {/* paymentList의 수만큼 라디오 버튼 만들기 */}
        <PaymentSlideRadio type="radio" name="radioBtn" />
        <PaymentSlideRadio type="radio" name="radioBtn" />
        <PaymentSlideRadio type="radio" name="radioBtn" />
      </PaymentSlideRadioWrap>
    </PaymentWrap>
  );
}

export default Payment;

export const PaymentWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const PaymentTitle = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const PaymentSlideWrap = styled.div`
  max-width: 90rem;
  overflow: hidden;
  margin: 1rem;
`;

export const PaymentSlideList = styled.ul`
  height: 9rem;
  margin: 0 auto;
  padding: 0;
  white-space: nowrap;
`;

export const PaymentSlideContent = styled.li`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: gray;
  border-radius: 1rem;
  transition: all 0.5s;
`;

export const PaymentSlideRadioWrap = styled.div`
  text-align: center;
`;

export const PaymentSlideRadio = styled.input``;
