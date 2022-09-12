import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function Orderer({ user, result, setResult }) {
  // 상세 주소 변경
  const onChange_Additional_address = event => {
    setResult(current => ({
      ...current,
      orderer: {
        ...current.orderer,
        additional_address: event.target.value,
      },
    }));
  };
  // 전화번호 변경
  const onChange_Phone_Number = event => {
    setResult(current => ({
      ...current,
      orderer: {
        ...current.orderer,
        phone_number: event.target.value,
      },
    }));
  };

  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        주문자 정보
      </CommonStyled.OrderPageSectionTitle>
      <Styled.UserAddress>{user.address}</Styled.UserAddress>
      <Styled.UserInput
        name="detail"
        type="text"
        defaultValue={
          result.orderer.additional_address || user.additional_address
        }
        onChange={onChange_Additional_address}
      />
      <Styled.UserInput
        name="phoneNum"
        type="text"
        defaultValue={result.orderer.phone_number || user.phone_number}
        onChange={onChange_Phone_Number}
      />
    </CommonStyled.OrderPageSection>
  );
}

export default Orderer;
