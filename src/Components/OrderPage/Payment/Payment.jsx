import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function Payment({ user, setResult }) {
  const cardList = [];

  // 카드 선택 기능
  const onSelectPayment = event => {
    setResult(current => ({
      ...current,
      payment: user.payment_methods[event.target.id].vendor_name,
    }));
    alert(`${user.payment_methods[event.target.id].vendor_name} 선택 완료`);
  };

  for (let i = 0; i < user.payment_methods.length; i++) {
    cardList.push(
      <Styled.PaymentCard key={user.payment_methods[i].id}>
        <Styled.VendorNameSpan>
          {user.payment_methods[i].vendor_name}
        </Styled.VendorNameSpan>
        <Styled.CardNumberSpan>
          {user.payment_methods[i].card_number}
        </Styled.CardNumberSpan>
        <Styled.PaymentCardBtn id={i} onClick={onSelectPayment}>
          선택
        </Styled.PaymentCardBtn>
      </Styled.PaymentCard>
    );
  }
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
