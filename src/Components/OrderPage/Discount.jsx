import styled from 'styled-components';

function Discount() {
  return (
    <DiscountWrap>
      <DiscountTitle>할인 수단 선택</DiscountTitle>
      <DiscountWayWrap>
        <DiscountWaySpan>쿠폰</DiscountWaySpan>
        <DiscountWayInputWrap>
          <DiscountWayInput type="text"></DiscountWayInput>
          <DiscountWayInput type="button" value="선택" />
        </DiscountWayInputWrap>
      </DiscountWayWrap>
      <DiscountWayWrap>
        <DiscountWaySpan>포인트</DiscountWaySpan>
        <DiscountWayInputWrap>
          <DiscountWayInput type="text"></DiscountWayInput>
          <DiscountWayInput type="button" value="모두 사용" />
        </DiscountWayInputWrap>
      </DiscountWayWrap>
    </DiscountWrap>
  );
}

export default Discount;

export const DiscountWrap = styled.div``;

export const DiscountTitle = styled.span`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const DiscountWayWrap = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
`;

export const DiscountWaySpan = styled.span``;

export const DiscountWayInputWrap = styled.div``;

export const DiscountWayInput = styled.input``;
