import * as Styled from './Styled.jsx';

function Payment({ paymentMethods, setPay }) {
  const card = [];

  const onSelectPayment = event => {
    // console.log(event.target.id);
    setPay(paymentMethods[event.target.id].vendor_name);
  };

  // for문 길이는 나중에 수정해보자
  // 이 부분 수정 안하면 나중에 추가 시 문제가 될 수 있음
  for (let i = 0; i < paymentMethods.length; i++) {
    card.push(
      <Styled.PaymentCard key={paymentMethods[i].id}>
        {paymentMethods[i].vendor_name} {paymentMethods[i].card_number}
        <Styled.PaymentCardBtn id={i} onClick={onSelectPayment}>
          선택
        </Styled.PaymentCardBtn>
      </Styled.PaymentCard>
    );
  }

  // console.log(paymentMethods.length);

  return (
    <Styled.PaymentWrap>
      <Styled.PaymentTitle>결제 수단 선택</Styled.PaymentTitle>
      <Styled.PaymentSlide>{card}</Styled.PaymentSlide>
    </Styled.PaymentWrap>
  );
}

export default Payment;
