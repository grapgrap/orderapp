import { useState } from 'react';
import * as Styled from './Styled.jsx';

function OrderHistory({ menuList }) {
  const orderList = [];
  let resultPrice = 0;

  for (let i = 0; i < menuList.length; i++) {
    orderList.push(
      <Styled.OrderHistoryContent key={menuList[i].id}>
        <Styled.OrderHistoryContentSpan>
          {menuList[i].name}
        </Styled.OrderHistoryContentSpan>
        <Styled.OrderHistoryContentSpan>
          {menuList[i].price
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          원
        </Styled.OrderHistoryContentSpan>
      </Styled.OrderHistoryContent>
    );

    resultPrice = resultPrice + menuList[i].price;

    if (i === menuList.length - 1) {
      orderList.push(
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
    <Styled.OrderHistoryWrap>
      <Styled.OrderHistoryTitle>배달 주문 내역</Styled.OrderHistoryTitle>
      <Styled.OrderHistorySection>{orderList}</Styled.OrderHistorySection>
    </Styled.OrderHistoryWrap>
  );
}

export default OrderHistory;
