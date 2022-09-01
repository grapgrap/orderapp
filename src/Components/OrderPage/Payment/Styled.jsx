import styled from 'styled-components';

export const PaymentWrap = styled.div``;

export const PaymentTitle = styled.span`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const PaymentSlide = styled.div`
  width: 100%;
  height: 10rem;
  overflow: scroll;
`;

export const PaymentCard = styled.div`
  width: 100%;
  height: 9rem;
  background: rgb(128, 128, 128, 0.5);
  white-space: nowrap;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VendorNameSpan = styled.span`
  margin-top: 0.5rem;
`;

export const CardNumberSpan = styled.span`
  flex: 1;
  text-align: center;
  padding-top: 2rem;
`;

export const PaymentCardBtn = styled.button`
  margin-bottom: 0.5rem;
  width: 10rem;
`;
