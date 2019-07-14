import React from 'react' 
import {Breadcrumb, Button, Row, Col} from 'antd'
import './RiskAssessDetails.css'
class RiskAssessDetails extends React.Component {
    render() {
        return (
            <div>
                <DetailsHead></DetailsHead>
                <DetailsContent></DetailsContent>
            </div>
        )
    }
}
export default RiskAssessDetails

class DetailsHead extends React.Component {
    render() {
        return (
            <div className='details-head'>
                <Breadcrumb>
                    <Breadcrumb.Item>当前事件为：洁洁良事件</Breadcrumb.Item>
                    <Breadcrumb.Item>事件档案</Breadcrumb.Item>
                </Breadcrumb>
                <Button type='primary' size='small'>进入处置</Button>
                <Button type='primary' size='small'>生成并下载简报</Button>
            </div>
        )
    }
}

class DetailsContent extends React.Component {
    render() {
        return (
            <div className='details-content'>
                <Row>
                    <Col span={12}>
                        <h1>舆情概览</h1>
                        <div className='left-content'>
                            <div className='trend'>
                                <div className='details-tag'>声量趋势</div>
                                <div>这里放具体图片</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <h1>风险研判</h1>
                        <div className='right-content'>
                            <div className='factor'>
                                <div className='details-tag'>风险要素</div>
                                <div >这里放具体图片
                                {/* <img src={[require("./aa.PNG")]} alt="as"/> */}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}