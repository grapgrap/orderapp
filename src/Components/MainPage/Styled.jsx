import styled from 'styled-components';

export const MainPageWrap = styled.div`
  min-width: 20rem;
  max-width: 30rem;
  height: 100%;
  background-color: rgb(250, 250, 236);
  display: flex;
  flex-direction: column;
`;

export const MainPageDiv = styled.div`
  flex: 1;
`;

export const MainPageBtn = styled.button`
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
