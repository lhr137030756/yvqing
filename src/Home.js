import React from 'react';
import { Menu, Icon,Layout } from 'antd';
// import {ReactDOM} from 'react-dom'
import './Home.css'
import Headers from './Common/Header'
import { Switch, Route, NavLink} from 'react-router-dom'
import EventTrace from './Component/EventTrace/EventTrace.jsx'
import Expert from './Component/Expert/Expert.jsx'
import PublicManage from './Component/PublicManage/PublicManage/PublicManage.jsx'
import PublicMonitor from './Component/PublicMonitor/PublicMonitor.jsx'
import Report from './Component/Report/Report.jsx'
import RiskAssessment from './Component/RiskAssessment/RiskAssessment.jsx'

import RiskAssessDetails from './Component/RiskAssessment/RiskAssessDetails.jsx'

import StartPage from './Component/PublicManage/PublicManage/StartPage/StartPage.jsx'
import DisposalReference from './Component/PublicManage/PublicManage/DisposalReference/DisposalReference.jsx'
import DisposalAdvice from './Component/PublicManage/PublicManage/DisposalAdvice/DisposalAdvice.jsx'
import AftereffectEvaluation from './Component/PublicManage/PublicManage/AftereffectEvaluation/AftereffectEvaluation.jsx'
import CutPapper from './Common/CutPapper.jsx'
const {  Content,  Sider } = Layout;

class SiderDemo extends React.Component {
  render() {
    return (
      // <HashRouter>
      <Layout style={{ minHeight: '900px' }}>
        <Sider>
          <Menu  className="menu" defaultSelectedKeys={['1']} mode="inline">
            <CutPapper></CutPapper>
            <Menu.Item key="1"><Icon type="pie-chart" /><span><NavLink to='/home/EventTrace' style={{color: 'white'}}>事件追踪</NavLink></span></Menu.Item>
            <Menu.Item key="2"><Icon type="desktop" /><span><NavLink to='/home/PublicMonitor' style={{color: 'white'}}>舆情监控</NavLink></span></Menu.Item>
            <Menu.Item key="3"><Icon type="desktop" /><span><NavLink to='/home/RiskAssessment' style={{color: 'white'}}>风险评估</NavLink></span></Menu.Item>
            <Menu.Item key="4"><Icon type="desktop" /><span><NavLink to='/home/PublicManage' style={{color: 'white'}}>舆情处置</NavLink></span></Menu.Item>
            <Menu.Item key="5"><Icon type="desktop" /><span><NavLink to='/home/Report' style={{color: 'white'}}>一键报告</NavLink></span></Menu.Item>
            <Menu.Item key="6"><Icon type="desktop" /><span><NavLink to='/home/Expert' style={{color: 'white'}}>专家急诊</NavLink></span></Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Headers style={{ background: '#fff', padding: 0 }}></Headers>
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route path='/home/EventTrace' component={EventTrace}></Route>
              <Route path='/home/Expert' component={Expert}></Route>
              {/* <Route path='/home/PublicManage' component={PublicManage}></Route> */}

              <Route path='/home/PublicManage' 
                render= {() => (
                  <PublicManage>
                    <Route
                      exact path="/home/PublicManage/" component={StartPage}
                    />
                    <Route path="/home/PublicManage/DisposalReference" component={DisposalReference}
                    />
                    <Route path="/home/PublicManage/DisposalAdvice" component={DisposalAdvice}
                    />
                    <Route path="/home/PublicManage/AftereffectEvaluation" component={AftereffectEvaluation}
                    />
                  </PublicManage>
                )}
              ></Route>

              <Route path='/home/PublicMonitor' component={PublicMonitor}></Route>
              <Route path='/home/Report' component={Report}></Route>
              <Route path='/home/RiskAssessment' component={RiskAssessment}></Route>

              <Route path='/home/RiskAssessDetails' component={RiskAssessDetails}></Route>
            </Switch>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
      // </HashRouter>
    );
  }
}
function App() {
  return (
    <div >
      <SiderDemo></SiderDemo>
    </div>
  );
}

export default App;
