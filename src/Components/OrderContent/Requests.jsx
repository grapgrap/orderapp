import { useState } from 'react';
import styled from 'styled-components';

const CUSTOM_VALUE = '6';

function Requests({ option, isCustom, setIsCustom, setOrderRequest }) {
  const [customLength, setCustomLength] = useState(0);

  // 접근은 좋으나 확장성이 좋지 않다.
  // 예전에 노마드 코더에서 배운 것처럼 CUSTOM 전역 변수를 써서 바꿔볼까?
  // 아니면 다른 방법이 있으면 생각해봐야 겠다.
  const onChangeRequest = event => {
    if (event.target.value === CUSTOM_VALUE) {
      setIsCustom(true);
      setOrderRequest('');
    } else {
      setOrderRequest(event.target[event.target.value].innerText);
      setIsCustom(false);
    }
  };
  const onChangeCustom = event => {
    if (event.target.value.length <= 60) {
      setOrderRequest(event.target.value);
      setCustomLength(event.target.value.length);
    } else if (event.target.value.length > 60) {
      // 60개까지만 출력
      event.target.value = event.target.value.slice(0, -1);
    }
  };

  return (
    <ReuestsWrap>
      <ReuestsTitle>주문 요청 사항</ReuestsTitle>
      <RequestsSelect onChange={onChangeRequest}>
        {option.map(option => {
          return (
            <RequestsSelectOption key={option.key} value={option.value}>
              {option.label}
            </RequestsSelectOption>
          );
        })}
      </RequestsSelect>
      {isCustom ? (
        <>
          <CustomTextArea onChange={onChangeCustom} />
          <CustomTextNum>{customLength}/60</CustomTextNum>
        </>
      ) : (
        <></>
      )}
    </ReuestsWrap>
  );
}

export default Requests;

export const ReuestsWrap = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ReuestsTitle = styled.span`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const RequestsSelect = styled.select`
  margin-top: 0.5rem;
`;

export const RequestsSelectOption = styled.option``;

export const CustomTextArea = styled.textarea`
  margin-top: 0.5rem;
  height: 5rem;
`;

export const CustomTextNum = styled.label`
  font-size: 0.8rem;
  text-align: right;
`;
