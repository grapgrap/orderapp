import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

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

  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        배달 주문 내역
      </CommonStyled.OrderPageSectionTitle>
      <Styled.OrderHistorySection>
        {orderBasket}
        <Styled.OrderHistoryContent key="RESULT">
          <Styled.OrderHistoryContentSpan>
            총 결제 금액
          </Styled.OrderHistoryContentSpan>
          <Styled.OrderHistoryContentSpan>
            {totalPrice} 원
          </Styled.OrderHistoryContentSpan>
        </Styled.OrderHistoryContent>
      </Styled.OrderHistorySection>
    </CommonStyled.OrderPageSection>
  );
}

export default OrderHistory;
