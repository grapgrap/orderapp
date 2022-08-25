import { useState } from 'react';
import styled from 'styled-components';

function Requests({ setOrderRequest }) {
  const [isCustom, setIsCustom] = useState(false);
  const [customLength, setCustomLength] = useState(0);

  const onChangeRequest = event => {
    if (event.target.value === '3') {
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
        <option value="0">벨은 누르지 말아주세요!</option>
        <option value="1">문 앞에 놓아 주시고 연락 주세요.</option>
        <option value="2">반찬은 안 주셔도 되요.</option>
        <option value="3">직접 입력</option>
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
  flex: 1;
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

export const CustomTextArea = styled.textarea`
  margin-top: 0.5rem;
  height: 5rem;
`;

export const CustomTextNum = styled.label`
  font-size: 0.8rem;
  text-align: right;
`;
