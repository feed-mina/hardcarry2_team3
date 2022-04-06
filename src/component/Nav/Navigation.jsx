import React, { useState, useEffect } from 'react';
import "./Navigation.css";
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Navigation() {
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

  // const [tabState, setTabState] = useState({
  //   tabHome: true,
  //   tabmap1: false,
  //   tabmap2: false,
  //   tabmap3: false,
  // });

  // const tabHandler = (event) => {
  //   if (!isWideTab) {
  //     setWideTab(!isWideTab);
  //   }
  // };
// const MenuList = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const NavTop = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   button {
//     background: black;
//     border: none;
//   }
// `;

  return (
    <div>
      <p className="Navigation">Navigation</p>
    
          <Button type="primary" onClick={toggleChange} style={{ marginBottom: 16 }}>
            { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
          </Button>
        <BrowserView>
        { toggleMenu &&
          <Menu
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
          </Menu>
        }
</BrowserView>    </div>
  );
}

export default Navigation;
