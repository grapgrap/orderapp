import * as Styled from './Styled.jsx';

function Discount() {
  return (
    <Styled.DiscountWrap>
      <Styled.DiscountTitle>할인 수단 선택</Styled.DiscountTitle>
      <Styled.DiscountSection>
        <Styled.DiscountSpan>쿠폰</Styled.DiscountSpan>
        <Styled.DiscountInput />
        <Styled.DiscountBtn>선택</Styled.DiscountBtn>
      </Styled.DiscountSection>
      <Styled.DiscountSection>
        <Styled.DiscountSpan>포인트</Styled.DiscountSpan>
        <Styled.DiscountInput />
        <Styled.DiscountBtn>선택</Styled.DiscountBtn>
      </Styled.DiscountSection>
    </Styled.DiscountWrap>
  );
}

export default Discount;
