import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';
import { NONE, COUPON, POINT, FIXED, RATED } from '../../../Constants.js';
import { useEffect } from 'react';

function OrderHistory({ orderList, result, setResult }) {
  let totalPrice = 0;

  // 장바구니
  const orderBasket = orderList.map(order => {
    totalPrice = totalPrice + order.price;
    return (
      <Styled.OrderHistoryContent key={order.id}>
        <Styled.OrderHistoryContentSpan>
          {order.name}
        </Styled.OrderHistoryContentSpan>
        <Styled.OrderHistoryContentSpan>
          {order.price} 원
        </Styled.OrderHistoryContentSpan>
      </Styled.OrderHistoryContent>
    );
  });

  // 할인
  let discount = [];
  let discountPrice = 0;
  switch (result.discount) {
    case NONE:
      discount = [];
      discountPrice = 0;
      break;
    case COUPON:
      switch (result.dicount_type) {
        case FIXED:
          if (totalPrice >= result.discount_mount)
            discountPrice = result.discount_mount;
          else discountPrice = totalPrice;

          discount = (
            <Styled.OrderHistoryContent key={result.coupon_id}>
              <Styled.OrderHistoryContentSpan>
                * 쿠폰
              </Styled.OrderHistoryContentSpan>
              <Styled.OrderHistoryContentSpan>
                - {discountPrice} 원
              </Styled.OrderHistoryContentSpan>
            </Styled.OrderHistoryContent>
          );
          break;
        case RATED:
          discountPrice = Math.ceil((totalPrice * result.discount_mount) / 100);
          discount = (
            <Styled.OrderHistoryContent key={result.coupon_id}>
              <Styled.OrderHistoryContentSpan>
                * 쿠폰
              </Styled.OrderHistoryContentSpan>
              <Styled.OrderHistoryContentSpan>
                - {discountPrice} 원
              </Styled.OrderHistoryContentSpan>
            </Styled.OrderHistoryContent>
          );
          break;
        default:
          break;
      }
      break;
    case POINT:
      discountPrice = result.discount_mount;
      discount = (
        <Styled.OrderHistoryContent key={POINT}>
          <Styled.OrderHistoryContentSpan>
            * 포인트
          </Styled.OrderHistoryContentSpan>
          <Styled.OrderHistoryContentSpan>
            -{discountPrice} 원
          </Styled.OrderHistoryContentSpan>
        </Styled.OrderHistoryContent>
      );
      break;
    default:
      break;
  }

  useEffect(() => {
    setResult(current => ({
      ...current,
      total_price: totalPrice,
    }));
  }, []);

  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        배달 주문 내역
      </CommonStyled.OrderPageSectionTitle>
      <Styled.OrderHistorySection>
        {orderBasket}
        {discount}
        <Styled.OrderHistoryContent key="RESULT">
          <Styled.OrderHistoryContentSpan>
            총 결제 금액
          </Styled.OrderHistoryContentSpan>
          <Styled.OrderHistoryContentSpan>
            {totalPrice - discountPrice} 원
          </Styled.OrderHistoryContentSpan>
        </Styled.OrderHistoryContent>
      </Styled.OrderHistorySection>
    </CommonStyled.OrderPageSection>
  );
}

export default OrderHistory;
