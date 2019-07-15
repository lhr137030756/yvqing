//今日扫描
import React from 'react';
import {Icon,Col,Row} from 'antd';
// import {Link} from 'react-router-dom';
import './TodayScan.css';
import BlockList from './BlockList.js';
export default class TodayScan extends React.Component{
	render(){
		return(
			<div className="body">
				<div className="bodyHead">
					<Row>
						<Col span={12}>
							<p><a href>热度TOP10</a> / <a href>热度TOP50</a></p>
							<p>今日（X月X日）全网高校热度前10的内容为：</p>
						</Col>
						<Col>
							一键下载：
							<Icon type="file-word" style={{color:"rgb(42,86,153)",fontSize:"40px"}}/>
							<Icon type="file-pdf" style={{color:"red",fontSize:"40px"}}/>
							<Icon type="file-ppt" style={{color:"rgb(163,54,57)",fontSize:"40px"}}/>
						</Col>
					</Row>
					<BlockList />
					<BlockList />
					<BlockList />
					<BlockList />
					<BlockList />
				</div>
				<div className="bodyContent"></div>
			</div>
		)
	}
}

// const listData=[];
// for (let i=0;i<10;i++){
// 	listData.push({
// 		title:'${i}',
// 		content:'原始内容',
// 	});
// };

// export default class TodayScan extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<List 
// 					itemLayout="vertical"
// 					size="large"
// 					pagination={{
// 						onChange:page =>{
// 							console.log(page);
// 						},
// 						pageSize:5,
// 					}}
// 					dataSource={listData}

// 					renderItem={item =>(
// 						<List.Item
// 						key={item.title}
// 						>
// 						<List.Item.Meta
// 						title={item.title}
// 						/>
// 						{item.content}
// 						</List.Item>
// 					)}
// 				/>
// 			</div>
// 		)
// 	}
// }
