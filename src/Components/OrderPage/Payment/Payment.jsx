import * as Styled from './Styled.jsx';
import * as CommonStyled from '../../Common/Styled.jsx';

function Payment({ user, setPay }) {
  const cardList = [];

  // 카드 선택 시 버튼 disable 구현하기
  const onSelectPayment = event => {
    setPay(user.payment_methods[event.target.id].vendor_name);
    alert(`${user.payment_methods[event.target.id].vendor_name} 선택 완료`);
  };

  if (user.payment_methods) {
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
