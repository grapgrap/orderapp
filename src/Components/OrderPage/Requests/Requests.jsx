import { useState } from 'react';
import * as CommonStyled from '../../Common/Styled.jsx';
import * as Styled from './Styled.jsx';

const CUSTOM_VALUE = 'CUSTOM';

function Requests({
  additional_requests,
  option,
  isCustom,
  setIsCustom,
  setOrderRequest,
}) {
  const optionList = [];
  const [custom, setCustom] = useState('');

  for (let i = 0; i < option.length; i++) {
    if (i !== option.length - 1) {
      optionList.push(
        <Styled.RequestsSelectOption key={option[i].id} value={option[i].value}>
          {option[i].label}
        </Styled.RequestsSelectOption>
      );
    } else {
      if (additional_requests) {
        for (let j = 3; j < additional_requests.length + 3; j++) {
          optionList.push(
            <Styled.RequestsSelectOption key={j} value={j}>
              {additional_requests[j - 3]}
            </Styled.RequestsSelectOption>
          );
        }
        optionList.push(
          <Styled.RequestsSelectOption
            key={option[i].id}
            value={option[i].value}
          >
            {option[i].label}
          </Styled.RequestsSelectOption>
        );
      }
    }
  }

  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        주문 요청 사항
      </CommonStyled.OrderPageSectionTitle>
      <Styled.RequestsSelect>{optionList}</Styled.RequestsSelect>
      {isCustom ? (
        <>
          <Styled.CustomTextArea value={custom} />
          <Styled.CustomTextLength>{custom.length}/60</Styled.CustomTextLength>
        </>
      ) : (
        <></>
      )}
    </CommonStyled.OrderPageSection>
  );
}

export default Requests;
