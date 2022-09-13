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
  width: 13rem;
`;

export const DiscountBtn = styled.button`
  width: 5rem;
  height: 1.5rem;
  border: none;
  background: rgb(134, 134, 252);
  color: white;
`;
