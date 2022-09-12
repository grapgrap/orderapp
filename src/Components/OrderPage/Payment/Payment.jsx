import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function Payment({ user }) {
  const cardList = [];

  for (let i = 0; i < user.payment_methods.length; i++) {
    cardList.push(
      <Styled.PaymentCard key={user.payment_methods[i].id}>
        <Styled.VendorNameSpan>
          {user.payment_methods[i].vendor_name}
        </Styled.VendorNameSpan>
        <Styled.CardNumberSpan>
          {user.payment_methods[i].card_number}
        </Styled.CardNumberSpan>
        <Styled.PaymentCardBtn id={i}>선택</Styled.PaymentCardBtn>
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
