import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavTop = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: black;
    border: none;
  }
`;

function NavBar() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleBar, setToggleBar] = useState(true)

  const toggleChange = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  return(
    <div>
       { /* web */ }
       { /* mobile */ }
      <MobileView>
         
        <NavTop>
          <Button type="primary" onClick={toggleChange} style={{ marginBottom: 16 }}>
            { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
          </Button>
        </NavTop>
        { toggleMenu &&
        <MenuList>  <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="light"
            inlineCollapsed={toggleBar}
            onClick={onMenuClick}
          >
            <Menu.Item key="subs">
              구독하기
            </Menu.Item>
            <Menu.Item key="product">
              상품 보기
            </Menu.Item>
            <Menu.Item key="cs">
              고객센터
            </Menu.Item>
            <Menu.Item key="signin">
              <Link to="/login">
              로그인
              </Link>
            </Menu.Item>
            <Menu.Item key="signup">
              <Link to="/signup">
              회원가입
              </Link>
            </Menu.Item>
          </Menu></MenuList>
        }
      </MobileView>
    </div>
  )
}
export default NavBar;
