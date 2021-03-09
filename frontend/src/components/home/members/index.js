import MembersWrap from './style.js'

import React, { useState, useEffect } from 'react';

function MemberList(props) {
    const list = props.list
    return (
        <div className="members-ul">
            {
                list.map((item) =>
                    <div key={item.name} className="members-li">
                        <img src={item.img}></img>
                        <span className="name-span">{item.name}</span>
                    </div>
                )
            }
        </div>
    )
}
const imgHref = 'https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/70d01864c2fed7157494e87fe38dc18c~300x300.image'
export default function Members() {
    const sourcelist = []
    const arry = [1,2,3,4,5,6,7,8,9]
    arry.map(item => {
        sourcelist.push({
            name: '王源' + item,
            img: imgHref
        })
    })
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(sourcelist)
    }, []);
      
    return (
        <MembersWrap>
            <div className="desc-wrap">
                <div className="section-title">团队成员</div>
            </div>
            <MemberList list={list}></MemberList>
        </MembersWrap>
    );
}
  