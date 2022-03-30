import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

function Landing() {

  return(
    <div>
      { /* web */ }
       { /* web */ }
      <BrowserView>
        {/* <MenuList> */}
          <Menu selectedKeys="mail" mode="horizontal">
            <Menu.Item key="subs">
              구독하기
            </Menu.Item>
            <Menu.Item key="product">
              상품 보기
            </Menu.Item>
            <Menu.Item key="cs">
              고객센터
            </Menu.Item>
          </Menu>
          <Menu mode="horizontal">
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
        {/* </MenuList> */}
      </BrowserView>
     { /* mobile */ }
       <MobileView>
    
          <Button type="primary" onClick={toggleChange} style={{ marginBottom: 16 }}>
            { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
          </Button>
    
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
      </MobileView>
   </div>
  )
}

export default Landing;