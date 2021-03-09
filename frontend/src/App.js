import './App.css';
import './style/common.css'
import './style/iconfont.css'
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/index'
import Home from './pages/home/index'
import Statistic from './pages/statistic/index'
import EditProject from './pages/editProject/index'
import Team from './pages/team/index'
import Login from './pages/login/index'
import Register from './pages/register/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter
        basename={'/'}>
          <Header></Header>
          <div className="content-wrap">
            <Route exact path="/" component={Home} />
            <Route path="/statistic" component={Statistic} />
            <Route path="/editProject" component={EditProject} />
            <Route path="/team" component={Team} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
