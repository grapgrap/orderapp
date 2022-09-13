import { useState } from 'react';
import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function Discount({ user, result, coupon }) {
  const [point, setPoint] = useState(0);
  // 포인트 모두 사용 기능
  const onUsePointAll = event => {
    if (user.points >= result.total_price) setPoint(result.total_price);
    else setPoint(user.points);
  };

  return (
    <CommonStyled.OrderPageSection>
      <CommonStyled.OrderPageSectionTitle>
        할인 수단 선택
      </CommonStyled.OrderPageSectionTitle>

      <Styled.DiscountSection>
        <Styled.DiscountSpanWrap>
          <Styled.DiscountSectionSpan>쿠폰</Styled.DiscountSectionSpan>
          <Styled.DiscountSectionSpan color="rgb(134, 134, 252)">
            사용 가능한 쿠폰 {user.coupons.length}장
          </Styled.DiscountSectionSpan>
        </Styled.DiscountSpanWrap>
        <Styled.DiscountInputWrap>
          <Styled.DiscountInput
            type="text"
            placeholder="쿠폰을 선택해주세요."
            defaultValue={''}
          />
          <Styled.DiscountBtn>선택</Styled.DiscountBtn>
        </Styled.DiscountInputWrap>
      </Styled.DiscountSection>
      <Styled.DiscountSection>
        <Styled.DiscountSpanWrap>
          <Styled.DiscountSectionSpan>포인트</Styled.DiscountSectionSpan>
          <Styled.DiscountSectionSpan color="rgb(134, 134, 252)">
            {user.points
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
            포인트 보유
          </Styled.DiscountSectionSpan>
        </Styled.DiscountSpanWrap>
        <Styled.DiscountInputWrap>
          <Styled.DiscountInput
            type="number"
            min="1000"
            step="100"
            value={point}
          ></Styled.DiscountInput>
          <Styled.DiscountBtn onClick={onUsePointAll}>
            모두 사용
          </Styled.DiscountBtn>
        </Styled.DiscountInputWrap>
      </Styled.DiscountSection>
    </CommonStyled.OrderPageSection>
  );
}

export default Discount;
