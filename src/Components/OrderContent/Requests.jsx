import styled from 'styled-components';

function Requests({ setOrderRequest }) {
  const onChangeRequest = event => {
    if (event.target.value === '3') {
      setOrderRequest('직접입력');
    } else {
      setOrderRequest(event.target[event.target.value].innerText);
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

  option {
  }
`;
