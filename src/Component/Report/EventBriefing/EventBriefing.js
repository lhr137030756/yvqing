//事件简报
import React from 'react';
// import {Menu,Col,Row} from 'antd';
// import {Link} from 'react-router-dom';
import './EventBriefing.css';
import EventList from './EventList.js';
export default class EventBriefing extends React.Component{
	render(){
		return(
			<div>
				<div className="Title">
					事件列表
				</div>
				<div className="EventList">
					<EventList />
				</div>
			</div>
		)
	}
}