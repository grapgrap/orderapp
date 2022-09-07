import * as CommonStyled from '../Common/CommonStyled.jsx';

function OrderPage({ user }) {
  // 결제하기
  const onOrderCheck = () => {
    alert(`결제완료!`);
  };

  return (
    <CommonStyled.PageWrap>
      <CommonStyled.PageButton onClick={onOrderCheck}>
        결제하기
      </CommonStyled.PageButton>
    </CommonStyled.PageWrap>
  );
}

export default OrderPage;
