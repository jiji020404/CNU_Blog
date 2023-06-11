import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;

  a {
    color: #777;
  }

  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        {/*todo (1) 프로필 꾸미기*/}
        <div>
          <ProfilePicture
            src="data:image/jpeg;base64,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"
            alt="프로필 사진"
          />
        </div>
        <div>
          <Name>오지현</Name>
          <Description>집 가고 싶어요</Description>
        </div>
      </Profile>
      <Nav>
        {/*todo (2) 메뉴 작성*/}
        <NavLink to={'/'}>포스트</NavLink>
        <NavLink to={'/resume'}>소개</NavLink>
      </Nav>

      <Outlet />
    </div>
  );
};

export default Layout;
