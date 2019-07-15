//历史报告
import React from 'react';
import {DatePicker,Col,Row} from 'antd';
import {Link} from 'react-router-dom';
import moment from 'moment';
import './HistoricalReport.css';
import HistoryList from './HistoryList.js';

const dateFormat='YYYY/MM/DD';

export default class HistoricalReport extends React.Component{
	render(){
		return(
			<div>
				<div className="dataInput">
					<text>日期：</text>
					<DatePicker defaultValue={moment('2019/01/01',dateFormat)} format={dateFormat} placeholder="请选择日期"/>
				</div>
				<div className="listbody">
					<Row className="listbodyCell">
						<Col span={8} className="historyList">
							<p className="listTitle">【 每日扫描 】</p>
							<HistoryList />
						</Col>
						<Col span={8} className="historyList">
							<p className="listTitle">【 事件简报 】</p>
							<HistoryList />
						</Col>
						<Col span={8} className="historyList">
							<p className="listTitle">【 事件专报 】</p>
							<HistoryList />
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}