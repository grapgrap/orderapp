import styled from 'styled-components';

export const DiscountWrap = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const DiscountTitle = styled.span`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

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
`;
