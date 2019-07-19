import React from 'react' 
import {Breadcrumb, Button, Row, Col} from 'antd'
import './RiskAssessDetails.css'
import axios from 'axios'

import EventAssess from './EventAssess/EventAssess.jsx'
import HotWord from './EventAssess/HotWord.jsx'
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
                            <HotWord></HotWord>
                        </div>
                    </Col>
                    <Col span={12}>
                        <h1>风险研判</h1>
                        <div className='right-content'>
                            <div className='factor'>
                                <div className='details-tag'>风险要素</div>
                                <br/>
                                {/* <img src={[require("./aa.PNG")]} alt="as"/> */}
                                <RiskFactor></RiskFactor>
                            </div>
                            <EventAssess></EventAssess>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

class RiskFactor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount =() => {
        this.showButton()
    }
    showButton = () => {
        let param = new URLSearchParams()
        param.append('traceId', '40282f816bfded29016bfded84bd0000')
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/risk/judge/elementList',
            data: param
        })
        .then(res => {
            // console.log(res.data)
            if(res.data.success) {
                this.setState({
                    list: res.data.obj
                })
            }
        })
        .catch(err => {
            alert("错误，请稍后再试！")
        })
    }
    render() {
        return (
            <div className='risk-factor'>
                {this.state.list.map(item => (
                    item.select? 
                    <Button itemID={item.id} isselect={item.select.toString()} onClick={this.selectButton} shape='round' key={item.id} style={{backgroundColor: 'rgba(47, 161, 229, 1)' ,color: 'black', borderColor: 'black' , marginTop: '20px'}}>{item.name}</Button>:
                    <Button itemID={item.id} isselect={item.select.toString()} onClick={this.selectButton} shape='round' key={item.id} style={{backgroundColor: '#cccccc' ,color: 'black', borderColor: 'black', marginTop: '20px'}}>{item.name}</Button>
                ))}
            </div>
        )
    }
    selectButton = (e) => {
        let els = e.target.getAttribute('itemID')
        let his = e.target.getAttribute('isselect')
        // console.log(his, els)
        let param = new URLSearchParams()
        param.append('traceId', '40282f816bfded29016bfded84bd0000')
        param.append('elementId', els)
        param.append('selected', his)
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/risk/judge/elementSelected',
            data: param
        })
        .then(res => {
            console.log('第三个',res.data)
            console.log(this.state.list)
        })
        .catch(err => {
            alert("请求超时，稍后再试！")
        })

        this.showButton()
    }

}