import { useState } from 'react';

import * as Styled from './Styled.jsx';

const CUSTOM_VALUE = 'CUSTOM';

function Requests({ option, isCustom, setIsCustom, setOrderRequest }) {
  const requests = [];
  const [custom, setCustom] = useState('');

  for (let i = 0; i < option.length; i++) {
    requests.push(
      <Styled.RequestsSelectOption key={option[i].id} value={option[i].value}>
        {option[i].label}
      </Styled.RequestsSelectOption>
    );
  }

  // Select 변경 함수
  const onChangeSelect = event => {
    if (event.target.value === CUSTOM_VALUE) setIsCustom(true);
  };

  // 직접 입력 변경 함수
  const onChangeCustom = event => {
    setCustom(event.target.value);
    setOrderRequest(event.target.value);
  };

  return (
    <Styled.ReuestsWrap>
      <Styled.ReuestsTitle>주문 요청 사항</Styled.ReuestsTitle>
      <Styled.RequestsSelect onChange={onChangeSelect}>
        {requests}
      </Styled.RequestsSelect>
      {isCustom ? (
        <>
          <Styled.CustomTextArea value={custom} onChange={onChangeCustom} />
          <Styled.CustomTextLength>{custom.length}/60</Styled.CustomTextLength>
        </>
      ) : (
        <></>
      )}
    </Styled.ReuestsWrap>
  );
}

export default Requests;
