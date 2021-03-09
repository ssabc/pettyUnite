import HomeWrap from './style.js'

import Members from '../../components/home/members/index'
import Projects from '../../components/home/projects/index'
import Main from '../../components/home/main/index'

function Home() {
    return (
      <HomeWrap>
        <div className="main-layout">
            <div className="lf"><Members></Members></div>
            <div className="md"><Main></Main></div>
            <div className="rg"><Projects></Projects></div>
        </div>
      </HomeWrap>
    );
}
  
export default Home;
  