import MainWrap from './style.js'
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import option from './charts'

// 主图
var myChart = null
function drawChart() {
        // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.getElementById('statistic'));
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
            <div className="like-btn-wrap">
                <span className="like-btn big active">周粒度</span>
                <span className="like-btn big">本月</span>
                <span className="like-btn big">本季度</span>
                <span className="like-btn big">本年</span>
            </div>
            <div className="bloard-wrap">
                <div className='hd'>
                    <span className="title">时长统计</span>
                    <div className="like-btn-wrap">
                        <span className="like-btn">切换列表</span>
                        <span className="like-btn">导出</span>
                    </div>
                </div>
                <div className="sub-hd"><span>统计区间：2021-03-01~2021-03-06</span></div>
                <div className="bd chart-wrap">
                    <div id="statistic" style={{ height: 360, width: '100%' }}></div>
                </div>
            </div>
        </MainWrap>
    );
}
  