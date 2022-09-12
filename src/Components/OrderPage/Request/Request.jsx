import { useState } from 'react';
import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';
import { CUSTOM } from '../../../Constants.js';

function Request({
  user,
  basicRequestOption,
  isCustom,
  setIsCustom,
  setResult,
}) {
  const requestList = [];
  const [custom, setCustom] = useState('');

  for (let i = 0; i < basicRequestOption.length; i++) {
    if (i !== basicRequestOption.length - 1) {
      requestList.push(
        <Styled.RequestSelectOption
          key={basicRequestOption[i].id}
          value={basicRequestOption[i].value}
        >
          {basicRequestOption[i].label}
        </Styled.RequestSelectOption>
      );
    } else {
      for (let j = 3; j < user.additional_requests.length + 3; j++) {
        requestList.push(
          <Styled.RequestSelectOption key={j} value={j}>
            {user.additional_requests[j - 3]}
          </Styled.RequestSelectOption>
        );
      }
      requestList.push(
        <Styled.RequestSelectOption
          key={basicRequestOption[i].id}
          value={basicRequestOption[i].value}
        >
          {basicRequestOption[i].label}
        </Styled.RequestSelectOption>
      );
    }
  }

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
      <Styled.RequestSelect onChange={onChangeSelect}>
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
