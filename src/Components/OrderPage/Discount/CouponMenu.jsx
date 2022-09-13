import * as Styled from './Styled.jsx';
import * as CommonStyled from '../../Common/CommonStyled.jsx';
import { COUPON, FIXED, RATED } from '../../../Constants.js';

function CouponMenu({ coupon, result, setResult, setIsMenu }) {
  const onUseCoupon = event => {
    const type = coupon
      .map(coupon => {
        if (coupon.id === event.target.id) return coupon.type;
      })
      .filter(value => value !== undefined)[0];

    const name = coupon
      .map(coupon => {
        if (coupon.id === event.target.id) return coupon.name;
      })
      .filter(value => value !== undefined)[0];

    let mount = coupon
      .map(coupon => {
        if (coupon.id === event.target.id) return coupon.value;
      })
      .filter(value => value !== undefined)[0];

    if (mount > result.total_price) mount = result.total_price;

    setResult(current => ({
      ...current,
      discount: COUPON,
      coupon_id: event.target.id,
      coupon_name: name,
      dicount_type: type,
      discount_mount: mount,
    }));

    setIsMenu(false);
  };
  // 쿠폰 리스트
  const couponList = coupon.map(coupon => {
    if (coupon.type === FIXED)
      return (
        <Styled.DiscountCouponMenuContent key={coupon.id} onClick={onUseCoupon}>
          <Styled.DiscountCouponValue id={coupon.id}>
            {coupon.value} 원
          </Styled.DiscountCouponValue>
          <Styled.DiscountCouponName id={coupon.id}>
            {coupon.name}
          </Styled.DiscountCouponName>
        </Styled.DiscountCouponMenuContent>
      );
    else if (coupon.type === RATED)
      return (
        <Styled.DiscountCouponMenuContent key={coupon.id} onClick={onUseCoupon}>
          <Styled.DiscountCouponValue id={coupon.id}>
            {coupon.value} %
          </Styled.DiscountCouponValue>
          <Styled.DiscountCouponName id={coupon.id}>
            {coupon.name}
          </Styled.DiscountCouponName>
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
