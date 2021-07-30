import React, { Children } from 'react';
import style from './layout.css'

const Layout = (props: any) => {
    const { children } = props
    return (
        <div id={style.root}>
            {children}
        </div>
    );
};

export default Layout;

