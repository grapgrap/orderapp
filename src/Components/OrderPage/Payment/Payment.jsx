import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function Payment({ user, setResult }) {
  // 카드 선택 기능
  const onSelectPayment = event => {
    setResult(current => ({
      ...current,
      payment: user.payment_methods[event.target.id].vendor_name,
    }));
    alert(`${user.payment_methods[event.target.id].vendor_name} 선택 완료`);
  };

  const cardList = user.payment_methods.map((card, index) => {
    return (
      <Styled.PaymentCard key={card.id}>
        <Styled.VendorNameSpan>{card.vendor_name}</Styled.VendorNameSpan>
        <Styled.CardNumberSpan>{card.card_number}</Styled.CardNumberSpan>
        <Styled.PaymentCardBtn id={index} onClick={onSelectPayment}>
          선택
        </Styled.PaymentCardBtn>
      </Styled.PaymentCard>
    );
  });

  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        결제 수단 선택
      </CommonStyled.OrderPageSectionTitle>
      <Styled.PaymentSlide>{cardList}</Styled.PaymentSlide>
    </CommonStyled.OrderPageSection>
  );
}

export default Payment;
