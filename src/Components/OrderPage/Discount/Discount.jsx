import * as Styled from './Styled.jsx';

function Discount({ discount, setDiscountMethods, setIsDiscountMenu }) {
  const onSelectDiscount = () => {
    setIsDiscountMenu(true);
  };

  return (
    <Styled.DiscountWrap>
      <Styled.DiscountTitle>할인 수단 선택</Styled.DiscountTitle>
      <Styled.DiscountSection>
        <Styled.DiscountSpanWrap>
          <Styled.DiscountSectionSpan>쿠폰</Styled.DiscountSectionSpan>
          <Styled.DiscountSectionSpan color="rgb(134, 134, 252)">
            사용 가능한 쿠폰 {discount.coupon.length}장
          </Styled.DiscountSectionSpan>
        </Styled.DiscountSpanWrap>
        <Styled.DiscountInputWrap>
          <Styled.DiscountInput
            type="text"
            placeholder="쿠폰을 선택해주세요."
            defaultValue={''}
          />
          <Styled.DiscountInput
            type="button"
            value="선택"
            onClick={onSelectDiscount}
          />
        </Styled.DiscountInputWrap>
      </Styled.DiscountSection>
      <Styled.DiscountSection>
        <Styled.DiscountSpanWrap>
          <Styled.DiscountSectionSpan>포인트</Styled.DiscountSectionSpan>
          <Styled.DiscountSectionSpan color="rgb(134, 134, 252)">
            {discount.points
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
            포인트 보유
          </Styled.DiscountSectionSpan>
        </Styled.DiscountSpanWrap>
        <Styled.DiscountInputWrap>
          <Styled.DiscountInput type="text" defaultValue={''} />
          <Styled.DiscountInput type="button" value="모두 사용" />
        </Styled.DiscountInputWrap>
      </Styled.DiscountSection>
    </Styled.DiscountWrap>
  );
}

export default Discount;
