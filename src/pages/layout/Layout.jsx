import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    // 비로그인 회원이 My페이지에 접근을 못하게 하는 방법
    const location = useLocation();
    const dispatch = useDispatch()
    
    const path = location.pathname + location.search;
    
    if(path != "/my"){
      dispatch(setPrivousUrl(path))
    }
    console.log("경로", path)

    
  return (
    <div>
      <header>
        <Link to={"/"}>메인</Link> | <Link to={"/job"}>직업</Link> | <Link to={"/intro"}>소개</Link>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>여기는 푸터!</footer>
    </div>
  );
};

export default Layout;