import styled from 'styled-components';

// 할인 수단 선택 Styled-Components
export const DiscountSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiscountSpanWrap = styled.div``;

export const DiscountSectionSpan = styled.span`
  margin-right: 0.5rem;
  color: ${props => props.color || 'black'};
`;

export const DiscountInputWrap = styled.div``;

export const DiscountInput = styled.input`
  margin-right: 0.5rem;
  width: 13rem;
`;

export const DiscountBtn = styled.button`
  width: 5rem;
  height: 1.5rem;
  border: none;
  background: rgb(134, 134, 252);
  color: white;
  cursor: pointer;
`;

// 쿠폰 메뉴 Styled-Components
export const DiscountCouponMenuWrap = styled.div`
  position: absolute;
  min-width: 20rem;
  max-width: 30rem;
  height: 100%;
  background: rgb(128, 128, 128, 0.5);
`;

export const DiscountCouponMenu = styled.div`
  position: absolute;
  bottom: 0;
  min-width: 18rem;
  max-width: 28rem;
  height: 15rem;
  background: white;
  margin: 0 1rem;
`;

export const DiscountCouponMenuContent = styled.div`
  margin: 0.2rem 0.5rem;
  min-width: 16rem;
  max-width: 26rem;
  height: 3.5rem;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  :hover {
    background: rgb(252, 134, 189, 0.3);
  }
`;

export const DiscountCouponValue = styled.span`
  color: rgb(134, 134, 252);
  font-weight: bold;
  flex: 1;
`;

export const DiscountCouponName = styled.span`
  font-size: 0.8rem;
  flex: 1;
`;
