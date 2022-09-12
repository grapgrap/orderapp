import styled from 'styled-components';

export const PageWrap = styled.div`
  min-width: 20rem;
  max-width: 30rem;
  height: 100%;
  background-color: rgb(250, 250, 236);
  display: flex;
  flex-direction: column;
`;

export const PageButton = styled.button`
  height: 2rem;
  margin-bottom: 2rem;
  border-radius: 2rem;
  border: none;
  background: rgb(134, 134, 252);
  color: white;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    background: rgb(252, 134, 189);
  }
`;

export const OrderPageSection = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const OrderPageSectionTitle = styled.span`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;
