import React from 'react';
import Link from 'next/link';
import {Button} from "antd";

const Layout = ({children}) => (
  <div>
    <header>
      <Link href='/a?id=1' as='/a/1'>
        <Button>Header</Button>
      </Link>
    </header>
    {children}
  </div>
);

export default Layout;