import StatisticWrap from './style.js'

import Members from '../../components/statistic/members/index'
import Projects from '../../components/statistic/projects/index'
import Main from '../../components/statistic/main/index'

export default function Statistic() {
    return (
      <StatisticWrap>
        <div className="tp-desc-title">统计看板</div>
        <div className="main-layout">
            <div className="lf"><Members></Members></div>
            <div className="md"><Main></Main></div>
            <div className="rg"><Projects></Projects></div>
        </div>
      </StatisticWrap>
    );
}
  