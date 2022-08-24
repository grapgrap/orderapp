import styled from 'styled-components';
import Payment from './Payment';
import OrderRequests from './OrderRequests';
import UserInfo from './UserInfo';
import Discount from './Discount';
import OrderInfo from './OrderInfo';

function OrderPage({ userInfo, setUserInfo }) {
  const onOrderCheck = () => {
    alert(
      `주소: ${userInfo.address} ${userInfo.detail}\n전화번호: ${userInfo.phoneNum}\n주문정보: `
    );
  };
  return (
    <OrderPageWrap>
      <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
      <OrderRequests />
      <Payment />
      <Discount />
      <OrderInfo />
      <OrderBtn onClick={onOrderCheck}>결제하기</OrderBtn>
    </OrderPageWrap>
  );
}

export default OrderPage;

export const OrderPageWrap = styled.div`
  background-color: rgb(250, 250, 236);
  min-width: 20rem;
  max-width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const OrderBtn = styled.button`
  margin-bottom: 2rem;
  height: 2rem;
  border-radius: 2rem;
  border: none;
  background: rgb(134, 134, 252);
  color: white;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    background: rgb(252, 134, 189);
  }
`;
