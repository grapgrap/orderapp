import { useState } from 'react';

import * as Styled from './Styled.jsx';

const CUSTOM_VALUE = 'CUSTOM';

function Requests({
  additionalRequest,
  option,
  isCustom,
  setIsCustom,
  setOrderRequest,
}) {
  // 주문 요청 사항
  const optionList = [];
  optionList.push(
    additionalRequest.map(op => {
      return (
        <Styled.RequestsSelectOption key={op.key} value={op.value}>
          {op.label}
        </Styled.RequestsSelectOption>
      );
    })
  );
  console.log(additionalRequest);

  const [customLength, setCustomLength] = useState(0);
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
      event.target.value = event.target.value.slice(0, -1);
    }
  };

  return (
    <Styled.ReuestsWrap>
      <Styled.ReuestsTitle>주문 요청 사항</Styled.ReuestsTitle>
      <Styled.RequestsSelect onChange={onChangeRequest}>
        {optionList}
      </Styled.RequestsSelect>
      {isCustom ? (
        <>
          <Styled.CustomTextArea onChange={onChangeCustom} />
          <Styled.CustomTextNum>{customLength}/60</Styled.CustomTextNum>
        </>
      ) : (
        <></>
      )}
    </Styled.ReuestsWrap>
  );
}

export default Requests;
