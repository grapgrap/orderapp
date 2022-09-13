import * as Styled from './Styled.jsx';
import * as CommonStyled from '../../Common/CommonStyled.jsx';
import { FIXED, RATED } from '../../../Constants.js';

function CouponMenu({ coupon }) {
  // 쿠폰 리스트
  const couponList = coupon.map(coupon => {
    if (coupon.type === FIXED)
      return (
        <Styled.DiscountCouponMenuContent key={coupon.id}>
          <Styled.DiscountCouponValue>
            {coupon.value} 원
          </Styled.DiscountCouponValue>
          <Styled.DiscountCouponName>{coupon.name}</Styled.DiscountCouponName>
        </Styled.DiscountCouponMenuContent>
      );
    else if (coupon.type === RATED)
      return (
        <Styled.DiscountCouponMenuContent key={coupon.id}>
          <Styled.DiscountCouponValue>
            {coupon.value} %
          </Styled.DiscountCouponValue>
          <Styled.DiscountCouponName>{coupon.name}</Styled.DiscountCouponName>
        </Styled.DiscountCouponMenuContent>
      );
    return null;
  });

  return (
    <Styled.DiscountCouponMenuWrap>
      <Styled.DiscountCouponMenu>
        <CommonStyled.OrderPageSectionTitle>
          보유 쿠폰
        </CommonStyled.OrderPageSectionTitle>
        {couponList}
      </Styled.DiscountCouponMenu>
    </Styled.DiscountCouponMenuWrap>
  );
}
export default CouponMenu;
