import React from 'react' 
import AddEvent from './AddEvent/AddEvent.jsx'
import { Button, Row, Col, Tag, Progress } from 'antd';
import './EventTrace.css';
import {withRouter } from 'react-router-dom'
class EventTrace extends React.Component {
    render() {
        return (
            <div>
            <Row>
                <Col span={24} className='EventTrace-header'>
                    <Button type="primary">汇总简报下载</Button>
                    {/* <Button type="primary">添加事件</Button> */}
                    <AddEvent></AddEvent>
                    <Button type="primary">移入事件档案</Button>
                    <Button type="primary" onClick={this.goEventFiles}>事件档案</Button>
                    <span className='num'>*事件追踪上限为5，您正在追踪2起事件！</span>
                </Col>
            </Row>
            <EvenetTraceContent></EvenetTraceContent>
            </div>
        )
    }
    goEventFiles = (e) => {
        let {history} = this.props
        history.push('/home/EventFiles')
    }
}
export default withRouter(EventTrace)

// 头部组件
// class EventTraceHeader extends React.Component {

    
//     render() {
//         return (
//             <Row>
//                 <Col span={24} className='EventTrace-header'>
//                     <Button type="primary">汇总简报下载</Button>
//                     <Button type="primary">添加事件</Button>
//                     <Button type="primary">移入事件档案</Button>
//                     <Button type="primary" onClick={this.goEventFiles}>事件档案</Button>
//                     <span className='num'>*事件追踪上限为5，您正在追踪2起事件！</span>
//                 </Col>
//             </Row>
//         )
//     }
//     goEventFiles = (e) => {
//         this.props.history.push('/home/EventFiles')
//     }
// }
// 内容组件
class EvenetTraceContent extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8} className='graph'>
                        <Tag closable='true' color="#40a9ff" size='big'>洁洁良事件</Tag>
                        <Button type="link" size='default'>
                            修改设置
                        </Button>
                        <p>今日新增20条</p>
                        <div>这里放条形图</div>
                    </Col>
                    <Col span={4} className='risk'>
                        <p>风险指数：45 低风险</p>
                        <Progress type="circle" percent={45} format={() => '45'}/>
                    </Col>
                    <Col span={6} className='suggest'>
                        <p>专家意见：</p>
                        <div className='suggest-content'>
                            <p>当前风险指数较低，建议持续关注</p>
                        </div>
                    </Col>
                    <Col span={3} className='right'>
                        <ul>
                            <li><a href>查看数据</a></li>
                            <li><a href>风险评估</a></li>
                            <li><a href>下载简报</a></li>
                            <li><a href>下载专报</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col span={8} className='graph'>
                            <Tag closable='true' color="#40a9ff" size='big'>基因编辑事件</Tag>
                            <Button type="link" size='default'>
                                修改设置
                            </Button>
                            <p>今日新增180条</p>
                            <div>这里放条形图</div>
                    </Col>
                    <Col span={4} className='risk'>
                        <p>风险指数：70 高风险</p>
                        <Progress type="circle" percent={70} status='exception'  format={() => '70'}/>
                    </Col>
                    <Col span={6} className='suggest'>
                        <p>专家意见：</p>
                        <div className='suggest-content'>
                            <div>
                                <p>当前风险指数较高，</p>
                                <p>建议密切关注，上报动态及时了解讨论内容</p>
                            </div>
                        </div>
                    </Col>
                    <Col span={3} className='right'>
                        <ul>
                                <li><a href>查看数据</a></li>
                                <li><a href>风险评估</a></li>
                                <li><a href>下载简报</a></li>
                                <li><a href>下载专报</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}
