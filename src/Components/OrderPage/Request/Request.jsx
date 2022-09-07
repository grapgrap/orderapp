import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function Request({ requestOption }) {
  // 주문요청사항 기본 옵션
  const requestList = [];
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
