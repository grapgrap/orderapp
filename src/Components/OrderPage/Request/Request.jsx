import { useState } from 'react';
import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

const CUSTOM_VALUE = 'CUSTOM';

function Request({
  user,
  requestOption,
  isCustom,
  setIsCustom,
  setOrderRequest,
}) {
  // 주문요청사항 기본 옵션
  const requestList = [];
  const [custom, setCustom] = useState('');

  for (let i = 0; i < requestOption.length; i++) {
    if (i !== requestOption.length - 1) {
      requestList.push(
        <Styled.RequestSelectOption
          key={requestOption[i].id}
          value={requestOption[i].value}
        >
          {requestOption[i].label}
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
          key={requestOption[i].id}
          value={requestOption[i].value}
        >
          {requestOption[i].label}
        </Styled.RequestSelectOption>
      );
    }
  }

  // Request Select 변경 함수
  const onChangeSelect = event => {
    if (event.target.value === CUSTOM_VALUE) setIsCustom(true);
    else {
      setIsCustom(false);
      setOrderRequest(event.target[event.target.value].innerText);
    }
  };

  // Request Custom 변경 함수
  const onChangeCustom = event => {
    setCustom(event.target.value);
    setOrderRequest(event.target.value);
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
          <Styled.CustomTextArea
            defaultValue={custom || ''}
            onChange={onChangeCustom}
          />
          <Styled.CustomTextLength>{custom.length}/60</Styled.CustomTextLength>
        </>
      ) : (
        <></>
      )}
    </CommonStyled.OrderPageSection>
  );
}

export default Request;