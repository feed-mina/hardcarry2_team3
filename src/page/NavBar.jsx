import React from 'react';
import { isMobile } from 'react-device-detect';

function NavBar() {

  const renderItems = () => {
    if(isMobile) {
      return <div>MOBILE</div>
    }
      return <div>WEB</div>
  }

  return(
    <div>
      {renderItems()}
    </div>
  )
}

export default NavBar;