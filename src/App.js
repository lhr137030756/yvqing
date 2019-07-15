import React from 'react';
import { Menu, Icon,Layout } from 'antd';
// import {ReactDOM} from 'react-dom'
import './App.css'
import Headers from './Header'
import {HashRouter, Switch, Route, NavLink} from 'react-router-dom'
import EventTrace from './Component/EventTrace.jsx'
import Expert from './Component/Expert.jsx'
import PublicManage from './Component/PublicManage.jsx'
import PublicMonitor from './Component/PublicMonitor.jsx'
import Report from './Component/Report.jsx'
import RiskAssessment from './Component/RiskAssessment.jsx'

import RiskAssessDetails from './Component/RiskAssessDetails.jsx'
import CutPapper from './CutPapper.jsx'
const {  Content,  Sider } = Layout;

class SiderDemo extends React.Component {
  render() {
    return (
      <HashRouter>
      <Layout style={{ minHeight: '900px' }}>
        <Sider>
          <Menu  className="menu" defaultSelectedKeys={['1']} mode="inline">
            <CutPapper></CutPapper>
            <Menu.Item key="1"><Icon type="pie-chart" /><span><NavLink to='/Component/EventTrace' style={{color: 'white'}}>事件追踪</NavLink></span></Menu.Item>
            <Menu.Item key="2"><Icon type="desktop" /><span><NavLink to='/Component/PublicMonitor' style={{color: 'white'}}>舆情监控</NavLink></span></Menu.Item>
            <Menu.Item key="3"><Icon type="desktop" /><span><NavLink to='/Component/RiskAssessment' style={{color: 'white'}}>风险评估</NavLink></span></Menu.Item>
            <Menu.Item key="4"><Icon type="desktop" /><span><NavLink to='/Component/PublicManage' style={{color: 'white'}}>舆情处置</NavLink></span></Menu.Item>
            <Menu.Item key="5"><Icon type="desktop" /><span><NavLink to='/Component/Report' style={{color: 'white'}}>一键报告</NavLink></span></Menu.Item>
            <Menu.Item key="6"><Icon type="desktop" /><span><NavLink to='/Component/Expert' style={{color: 'white'}}>专家急诊</NavLink></span></Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Headers style={{ background: '#fff', padding: 0 }}></Headers>
          <Content style={{ margin: '0 16px' }}>
            {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div> */}
            <Switch>
              <Route path='/Component/EventTrace' component={EventTrace}></Route>
              <Route path='/Component/Expert' component={Expert}></Route>
              <Route path='/Component/PublicManage' component={PublicManage}></Route>
              <Route path='/Component/PublicMonitor' component={PublicMonitor}></Route>
              <Route path='/Component/Report' component={Report}></Route>
              <Route path='/Component/RiskAssessment' component={RiskAssessment}></Route>

              <Route path='/Component/RiskAssessDetails' component={RiskAssessDetails}></Route>
            </Switch>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
      </HashRouter>
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
