import HeaderWrap from './style.js'

import { NavLink, withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const activeStyle = {
    fontWeight: 'bold'
};
function NavLinkList(props) {
    const list = props.list
    return (
        <div className="nav-link-wrap">
            {
                list.map((navItem) =>
                    <NavLink exact key={navItem.name} to={navItem.path} activeStyle={activeStyle}>{navItem.name}</NavLink >
                )
            }
        </div>
    )
}
function Header(props) {
    const list = [{
        name: '统计',
        path: '/statistic'
    },{
        name: '项目编辑',
        path: '/editProject'
    },{
        name: '我的团队',
        path: '/team'
    },{
        name: '登录',
        path: '/login'
    },{
        name: '注册',
        path: '/register'
    }]
    const [navList, setNavList] = useState([]);

    useEffect(() => {
        setNavList(list)
    }, []);

    /**
     * 点击头部logo
     */
    function logoClickFn() {
        props.history.push("/")
    }
    return (
        <HeaderWrap>
            <div className="title" onClick={logoClickFn}>小团捷</div>
            <NavLinkList list={navList}></NavLinkList>
        </HeaderWrap>
    );
}

export default withRouter(Header)