import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function OrderHistory({ orderList }) {
  // 배달 주문 내역
  const orderHistory = [];
  let resultPrice = 0;

  for (let i = 0; i < orderList.length; i++) {
    orderHistory.push(
      <Styled.OrderHistoryContent key={orderList[i].id}>
        <Styled.OrderHistoryContentSpan>
          {orderList[i].name}
        </Styled.OrderHistoryContentSpan>
        <Styled.OrderHistoryContentSpan>
          {orderList[i].price
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          원
        </Styled.OrderHistoryContentSpan>
      </Styled.OrderHistoryContent>
    );
    resultPrice = resultPrice + orderList[i].price;
    if (i === orderList.length - 1) {
      orderHistory.push(
        <Styled.OrderHistoryContent key="Result">
          <Styled.OrderHistoryContentSpan>
            총 결제 금액
          </Styled.OrderHistoryContentSpan>
          <Styled.OrderHistoryContentSpan>
            {resultPrice
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            원
          </Styled.OrderHistoryContentSpan>
        </Styled.OrderHistoryContent>
      );
    }
  }

  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        배달 주문 내역
      </CommonStyled.OrderPageSectionTitle>
      <Styled.OrderHistorySection>{orderHistory}</Styled.OrderHistorySection>
    </CommonStyled.OrderPageSection>
  );
}

export default OrderHistory;
