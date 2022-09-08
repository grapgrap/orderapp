import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function CouponMenu({ coupon }) {
  const couponList = [];

  for (let i = 0; i < coupon.length; i++) {
    couponList.push(
      <Styled.DiscountCouponMenuContent key={coupon[i].id}>
        {coupon[i].name}
      </Styled.DiscountCouponMenuContent>
    );
  }

  return (
    <Styled.DiscountCouponMenuWrap>
      <Styled.DiscountCouponMenu>{couponList}</Styled.DiscountCouponMenu>
    </Styled.DiscountCouponMenuWrap>
  );
}

export default CouponMenu;
