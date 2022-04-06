import { Fragment } from "react";

import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
