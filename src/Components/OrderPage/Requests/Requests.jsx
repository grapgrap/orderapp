import { useState } from 'react';

import * as Styled from './Styled.jsx';

const CUSTOM_VALUE = 'CUSTOM';

function Requests({ option, isCustom, setIsCustom }) {
  const requests = [];

  for (let i = 0; i < option.length; i++) {
    requests.push(
      <Styled.RequestsSelectOption key={option[i].id} value={option[i].value}>
        {option[i].label}
      </Styled.RequestsSelectOption>
    );
  }

  const onChangeSelect = event => {
    if (event.target.value === CUSTOM_VALUE) setIsCustom(true);
  };

  return (
    <Styled.ReuestsWrap>
      <Styled.ReuestsTitle>주문 요청 사항</Styled.ReuestsTitle>
      <Styled.RequestsSelect onChange={onChangeSelect}>
        {requests}
      </Styled.RequestsSelect>
      {isCustom ? (
        <>
          <Styled.CustomTextArea />
          <Styled.CustomTextLength>/60</Styled.CustomTextLength>
        </>
      ) : (
        <></>
      )}
    </Styled.ReuestsWrap>
  );
}

export default Requests;
