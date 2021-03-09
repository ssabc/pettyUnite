import MainWrap from './style.js'
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import option from './charts'

// 主图
var myChart = null
function drawChart() {
        // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.getElementById('zoushi'));
    // 绘制图表
    myChart.setOption(option);
}
export default function Main() {
    useEffect(() => {
        drawChart()
        window.onresize = function(){
            myChart.resize()
        }
    }, []);

    return (
        <MainWrap>
            <div className="bloard-wrap">
                <div className='hd chart-wrap'>
                    <div id="zoushi" style={{ height: 160, width: '100%' }}></div>
                </div>
                <div className="sub-hd">
                    <span className="date-1">03-03</span>
                    <span className="date-2">正月二十</span></div>
                <div className="bd">
                    
                </div>
                <div className="bt">
                    <div className="add-icon"><span className="iconfont icon-jia"></span></div>
                </div>
            </div>
        </MainWrap>
    );
}
  