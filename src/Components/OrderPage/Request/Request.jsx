import { useState } from 'react';
import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function Request({ user, basicRequestOption }) {
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

  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        주문 요청 사항
      </CommonStyled.OrderPageSectionTitle>
      <Styled.RequestSelect>{requestList}</Styled.RequestSelect>
    </CommonStyled.OrderPageSection>
  );
}

export default Request;
