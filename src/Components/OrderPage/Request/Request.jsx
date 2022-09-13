import { useState } from 'react';
import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';
import { CUSTOM, DEFAULT } from '../../../Constants.js';

function Request({
  user,
  basicRequestOption,
  isCustom,
  setIsCustom,
  setResult,
}) {
  const [custom, setCustom] = useState('');

  const addRequestList = user.additional_requests.map(option => {
    return (
      <Styled.RequestSelectOption key={option} value={option || ''}>
        {option}
      </Styled.RequestSelectOption>
    );
  });

  const requestList = basicRequestOption.map(option => {
    return (
      <Styled.RequestSelectOption key={option.id} value={option.value || ''}>
        {option.label}
      </Styled.RequestSelectOption>
    );
  });

  // Request Select 변경 함수
  const onChangeSelect = event => {
    if (event.target.value === CUSTOM) setIsCustom(true);
    else {
      setIsCustom(false);
      setResult(current => ({
        ...current,
        request: event.target[event.target.value].innerText,
      }));
    }
  };

  const onChangeCustom = event => {
    setCustom(event.target.value);
    setResult(current => ({
      ...current,
      request: event.target.value,
    }));
  };

  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        주문 요청 사항
      </CommonStyled.OrderPageSectionTitle>
      <Styled.RequestSelect onChange={onChangeSelect} defaultValue={DEFAULT}>
        <Styled.RequestSelectOption value={DEFAULT} disabled hidden>
          선택해주세요.
        </Styled.RequestSelectOption>
        {addRequestList}
        {requestList}
      </Styled.RequestSelect>
      {isCustom ? (
        <>
          <Styled.CustomTextArea value={custom} onChange={onChangeCustom} />
          <Styled.CustomTextLength>{custom.length}/60</Styled.CustomTextLength>
        </>
      ) : (
        <></>
      )}
    </CommonStyled.OrderPageSection>
  );
}

export default Request;
