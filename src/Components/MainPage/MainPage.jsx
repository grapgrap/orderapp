function MainPage({ user }) {
  return (
    <div>
      메인페이지입니다.
      {user.coupons.length}
    </div>
  );
}

export default MainPage;
