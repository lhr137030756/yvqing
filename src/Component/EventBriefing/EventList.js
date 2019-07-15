//事件简报里面的列表
import React from 'react';
import './EventList.css';
import {Col,Row,Icon} from 'antd';
const dataList=[
	{
		eventTitle:"洁洁良事件",
		eventTime:"2019-4-10  16:33",
	},
];

class EventList extends React.Component{
	render(){
		return(
			<div>
			<div className="eventBlock">
				<Row>
					<Col span={8} >
						<p className="eventTitle">1.洁洁良事件</p>
					</Col>
					<Col span={8} >
						<p className="eventTime">2019-4-10  16:33</p>
					</Col>
					<Col span={8}>
						<p className="download">
						一键下载:
						<Icon type="file-word" style={{color:"rgb(42,86,153)",fontSize:"40px"}}/>
						<Icon type="file-pdf" style={{color:"red",fontSize:"40px"}}/>
						</p>
					</Col>
				</Row>
			</div>
			<div className="eventBlock">
				<Row>
					<Col span={8} >
						<p className="eventTitle">2.基因编辑事件</p>
					</Col>
					<Col span={8} >
						<p className="eventTime">2019-4-10  16:33</p>
					</Col>
					<Col span={8} >
						<p className="download">
						一键下载:
						<Icon type="file-word" style={{color:"rgb(42,86,153)",fontSize:"40px"}}/>
						<Icon type="file-pdf" style={{color:"red",fontSize:"40px"}}/>
						</p>
					</Col>
				</Row>
			</div>
			</div>
		)
	}
}
export default EventList