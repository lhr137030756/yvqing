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
                                <div >
                                {/* <img src={[require("./aa.PNG")]} alt="as"/> */}
                                <RiskFactor></RiskFactor>
                                </div>
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
    componentDidMount = async() => {
        let param = new URLSearchParams()
        param.append('traceId', '40282f816bfded29016bfded84bd0000')
        await axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/risk/judge/elementList',
            data: param
        })
        .then(res => {
            console.log(res.data)
            // if(res.data.success) {
            //     this.setState({
            //         list: res.data.obj
            //     })
            // }
        })

        // await this.saveFn()
    }
    render() {
        // this.saveFn()
        return (
            <div className='risk-factor'>
                {/* {this.state.list.map(item => (
                    item.historyIndex? 
                    <Button itemEl={item.id} itemHi={item.historyIndex} onClick={this.selectButton} shape='round' key={item.id} style={{backgroundColor: 'rgba(47, 161, 229, 1)'}}>{item.element}</Button>:
                    <Button itemEl={item.id} itemHi={item.historyIndex} onClick={this.selectButton} shape='round' key={item.id} style={{backgroundColor: '#cccccc'}}>{item.element}</Button>
                ))} */}
            </div>
        )
    }
    saveFn = () => {
        axios.get('http://47.104.142.230:8848/risk/judge/elementSelected', {params : {traceId: '40282f816bfded29016bfded84bd0000'}})
        .then(res => {
            console.log('第一个',res.data)
            // if(res.data.success) {
            //     for(let i=0; i<this.state.list.length; i++) {
            //         for(let j=0; j<res.data.obj.length; j++) {
            //             if(this.state.list[i].id === res.data.obj[j]){
            //                 // eslint-disable-next-line
            //                 this.state.list[i].historyIndex = res.data.obj[j]
            //             }
            //         }
            //     }
            //     this.setState(this.state)
            // }
        })
        
        // for(let i=0; i<this.state.list.length; i++) {
        //     if(this.state.list[i].historyIndex) {
        //         var hignLight = this.state.list[i]
        //         this.state.list.splice(i,1)
        //     }
        //     this.state.list.unshift(hignLight)
        // }
        // this.setState(this.state)
        // console.log('list',this.state.list)
    }
    selectButton = (e) => {
        let his = e.target.getAttribute('itemHi')? true :false
        let els = e.target.getAttribute('itemEl')
        console.log(his )
        console.log(els )
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
            // console.log('第三个',res.data)
        })

    }
    selectFive = () => {
        // axios({
        //     method: 'post',
        //     url: 'http://47.104.142.230:8848/risk/judge/riskRank',
        //     data: {
        //         traceId: '40282f816bfded29016bfded84bd0000',
        //         riskRank: 1
        //     }
        //   })
        let param = new URLSearchParams()
        param.append('traceId', '40282f816bfded29016bfded84bd0000')
        param.append('riskRank', 1)
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/risk/judge/riskRank',
            data: param
        })
        .then(res => {
            console.log('res.data',res.data)
        })
    }
}