import * as Styled from './Styled.jsx';
import * as CommonStyled from '../../Common/CommonStyled.jsx';

function CouponMenu() {
  const fixedCoupon = [];
  const ratedCoupon = [];
  return (
    <Styled.DiscountCouponMenuWrap>
      <Styled.DiscountCouponMenu>
        <CommonStyled.OrderPageSectionTitle>
          보유 쿠폰
        </CommonStyled.OrderPageSectionTitle>
        {fixedCoupon}
        {ratedCoupon}
      </Styled.DiscountCouponMenu>
    </Styled.DiscountCouponMenuWrap>
  );
}
export default CouponMenu;
