import ProjectsWrap from './style.js'
import { Progress } from 'antd';
import React, { useState, useEffect } from 'react';

export default function Projects() {
    const sourcelist = []
    const arry = [1,2,3,4,5,6,7,8,9]
    arry.map(item => {
        sourcelist.push({
            name: '大数据平台' + item,
            value: item
        })
    })
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(sourcelist)
    }, []);
    
    function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    }

    function List(props) {
      const list = props.list
      return (
          <div className="list-ul" onChange={onChange}>
            {
              list.map((item) =>
                <div className="list-li" key={item.name}>
                  <div className="info"><span className="name-span">{item.name}</span><span  className="value-span">{item.value}</span></div>
                  <Progress percent={70} size="small" />
                </div>
              )
            }
          </div>
      )
    }

    return (
        <ProjectsWrap>
            <div className="desc-wrap">
                <div className="section-title">项目统计</div>
                <div className="like-btn-wrap">
                  <span className="like-btn big active">周粒度</span><span className="like-btn big">月粒度</span></div>
            </div>
            <List list={list}></List>
        </ProjectsWrap>
    );
}
  