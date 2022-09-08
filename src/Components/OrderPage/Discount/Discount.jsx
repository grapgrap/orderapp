import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function Discount({ coupon }) {
  console.log(coupon);
  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        할인 수단 선택
      </CommonStyled.OrderPageSectionTitle>
    </CommonStyled.OrderPageSection>
  );
}

export default Discount;
