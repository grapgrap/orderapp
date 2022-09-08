import * as CommonStyled from '../../Common/CommonStyled.jsx';
import * as Styled from './Styled.jsx';

function Discount({
  user,
  totalPrice,
  coupon,
  point,
  setPoint,
  setDiscountMethod,
}) {
  // 포인트 사용 함수
  const onUsePoint = event => {
    if (event.target.value === 0) {
      setDiscountMethod(0);
    } else {
      if (event.target.value >= 100) {
        console.log('100보다 큼');
      } else {
      }
    }

    if (totalPrice < event.target.value) {
      alert('총 결제 금액보다 입력 포인트가 더 많습니다!');
      setPoint(0);
      event.target.value = 0;
    } else {
      if (user.points < event.target.value) {
        alert('보유 포인트보다 입력 포인트가 더 많습니다!');
        setPoint(0);
        event.target.value = 0;
      } else {
        setPoint(event.target.value);
        setDiscountMethod(2);
      }
    }
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
          <Styled.DiscountInput type="button" value="선택" />
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
            defaultValue={point || ''}
            onChange={onUsePoint}
          />
          <Styled.DiscountInput type="button" value="모두 사용" />
        </Styled.DiscountInputWrap>
      </Styled.DiscountSection>
    </CommonStyled.OrderPageSection>
  );
}

export default Discount;
