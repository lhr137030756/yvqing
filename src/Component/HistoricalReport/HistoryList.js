//历史报告里的list
import React from 'react';
import {Checkbox,Row,Col,Button,Icon} from 'antd';
import './HistoryList.css';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

// const datalist=[];

class ListBlock extends React.Component{
	render(){
		return(
			<div className="listCell">
			<Row>
				<Col span={4}>
					<div className="checkbox"><Checkbox onChange={onChange} ></Checkbox></div>
				</Col>
				<Col span={14}>
					<div className="listCellContent">
					<Icon type="file-word" style={{color:"rgb(42,86,153)",fontSize:"25px"}}/>
					<text>20190707 每日舆情扫描</text>
					<p className="eventTime">生成事件：2018-10-12 18：23</p>
					</div>
				</Col>
				<Col span={6}>
					<div className="button"><Button type="primary" size="small">下载</Button></div>
				</Col>
			</Row>
			</div>
		);
	}
}
export default class HistoryList extends React.Component{
	render(){
		return(
			<div>
				<ListBlock />
				<ListBlock />
				<ListBlock />
			</div>
			
		)
	}
}