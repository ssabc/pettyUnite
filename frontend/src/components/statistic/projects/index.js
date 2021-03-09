import ProjectsWrap from './style.js'
import { Checkbox, Row } from 'antd';
import React, { useState, useEffect } from 'react';

export default function Projects() {
    const sourcelist = []
    const arry = [1,2,3,4,5,6,7,8,9]
    arry.map(item => {
        sourcelist.push({
            name: '大数据平台' + item,
            value: 'dsj'+ item
        })
    })
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(sourcelist)
    }, []);
    
    function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    }

    function CheckboxList(props) {
      const list = props.list
      return (
          <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
            {
              list.map((item) =>
                <Row key={item.name}><Checkbox value={item.value}>{item.name}</Checkbox></Row>
              )
            }
          </Checkbox.Group>
      )
    }

    return (
        <ProjectsWrap>
            <div className="desc-wrap">
                <div className="section-title">项目列表</div>
                <div className="like-btn-wrap">
                  <span className="like-btn active">全选</span><span className="like-btn">全不选</span></div>
            </div>
            <CheckboxList list={list}></CheckboxList>
        </ProjectsWrap>
    );
}
  