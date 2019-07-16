import React from 'react';
// import { Menu, Icon,Col,Row,List,Tabs} from 'antd';
import {Tabs} from 'antd'
// import {Link,Switch,Route} from 'react-router-dom';
import './Report.css';
import TodayScan from './TodayScan/TodayScan.js';
import EventBriefing from './EventBriefing/EventBriefing.js';
import EventReport from './EventReport/EventReport.js';
import HistoricalReport from './HistoricalReport/HistoricalReport.js';

// const { SubMenu } = Menu;

// class NavBar extends React.Component {
//   state = {
//     current: 'TodayScan',
//   };

//   handleClick = e => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//   };
//   render(){
//   	return(
//   		<div>
//   		<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
//   			<Menu.Item key="TodayScan">
//           		<Link to="/Component/OneClickReport/TodayScan">
//           		&nbsp;&nbsp;&nbsp;&nbsp;今日扫描&nbsp;&nbsp;&nbsp;&nbsp;
//           		</Link>
//         	</Menu.Item>
// 			<Menu.Item key="EventBriefing">
//           		<Link to="/Component/OneClickReport/EventBriefing">
//           		&nbsp;&nbsp;&nbsp;&nbsp;事件简报&nbsp;&nbsp;&nbsp;&nbsp;
//           		</Link>
//         	</Menu.Item>
//         	<Menu.Item key="EventReport">
//           		<Link to="/Component/OneClickReport/EventReport">
//           		&nbsp;&nbsp;&nbsp;&nbsp;事件专报&nbsp;&nbsp;&nbsp;&nbsp;
//           		</Link>
//         	</Menu.Item>
//         	<Menu.Item key="HistoricalReport">
//           		<Link to="/Component/OneClickReport/HistoricalReport">
//           		&nbsp;&nbsp;&nbsp;&nbsp;历史报告&nbsp;&nbsp;&nbsp;&nbsp;
//           		</Link>
//         	</Menu.Item>
//   		</Menu>
//   		<Switch>
//   			<Route 
//   				exact
//   				path="/OneClickReport/TodayScan"
//   				Component={TodayScan} 
//   			/>
//   			<Route 
//   				path="/OneClickReport/EventBriefing"
//   				Component={EventBriefing}
//   			/>
//   			<Route 
//   				path="/OneClickReport/EventReport"
//   				Component={EventReport}
//   			/>
//   			<Route 
//   				path="/OneClickReport/HistoricalReport"
//   				Component={HistoricalReport}
//   			/>
//   		</Switch>
//   		</div>
//   	)
//   }
// };
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
class NavBar extends React.Component{
render(){
  return(
    <div className="body">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="今日扫描" key="1">
      <TodayScan />
    </TabPane>
    <TabPane tab="事件简报" key="2">
      <EventBriefing />
    </TabPane>
    <TabPane tab="事件专报" key="3">
      <EventReport />
    </TabPane>
    <TabPane tab="历史报告" key="4">
      <HistoricalReport />
    </TabPane>
  </Tabs>
  </div>
    )
};
}
class Report extends React.Component {
    render() {
        return (
            <div className="body">
                <NavBar />
            </div>
        )
    }
}
export default Report