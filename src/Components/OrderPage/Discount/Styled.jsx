import styled from 'styled-components';

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
