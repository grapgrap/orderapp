import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

const FIXED = 'fixed';
const RATED = 'rated';

function CouponMenu({ coupon }) {
  // 정액형 쿠폰
  const fixedCoupon = [];
  // 정률형 쿠폰
  const ratedCoupon = [];

  for (let i = 0; i < coupon.length; i++) {
    if (coupon[i].type === FIXED) {
      fixedCoupon.push(
        <Styled.DiscountCouponMenuContent key={coupon[i].id}>
          <Styled.DiscountCouponValue>
            {coupon[i].value
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            원
          </Styled.DiscountCouponValue>
          <Styled.DiscountCouponName>
            {coupon[i].name}
          </Styled.DiscountCouponName>
        </Styled.DiscountCouponMenuContent>
      );
    } else if (coupon[i].type === RATED) {
      ratedCoupon.push(
        <Styled.DiscountCouponMenuContent key={coupon[i].id}>
          <Styled.DiscountCouponValue>
            {coupon[i].value}%
          </Styled.DiscountCouponValue>
          <Styled.DiscountCouponName>
            {coupon[i].name}
          </Styled.DiscountCouponName>
        </Styled.DiscountCouponMenuContent>
      );
    }
  }

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
