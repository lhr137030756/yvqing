import React from 'react'
import {Tooltip} from 'antd';
import './EventAssess.css'
import axios from 'axios'
class EventAssess extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rankP: ''
        }
    }
    render() {
        return (
            <div className='event-assess'>
                <div className='details-tag'>事件定性（自我评估）</div>
                <br/>
                <Tooltip title="非常不敏感">
                    <span className='word-span1' onClick={this.wordClick} riskRank='-2'>非常不敏感</span>
                </Tooltip>
                <Tooltip title="不敏感">
                    <span className='word-span2' onClick={this.wordClick} riskRank='-1'>不敏感</span>
                </Tooltip>
                <Tooltip title="一般">
                    <span className='word-span3' onClick={this.wordClick} riskRank='0'>一般</span>
                </Tooltip>
                <Tooltip title="比较敏感">
                    <span className='word-span4' onClick={this.wordClick} riskRank='1'>比较敏感</span>
                </Tooltip>                
                <Tooltip title="非常敏感">
                    <span className='word-span5' onClick={this.wordClick} riskRank='2'>非常敏感</span>
                </Tooltip>
                <p>您评估该事件为：{this.state.rankP}</p>
            </div>
        )
    }
    wordClick = (e) => {
        // console.log(e.target)
        let rank = e.target.getAttribute('riskRank')
        let rankPs = e.target.innerText
        let param = new URLSearchParams()
        param.append('traceId', '40282f816bfded29016bfded84bd0000')
        param.append('riskRank', rank)
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/risk/judge/riskRank',
            data: param
        })
        .then(res => {
            console.log(rank,res.data)
        })
        .catch(err => {
            alert("操作太频繁，请稍后再试")
        })

        this.setState({
            rankP: rankPs
        })
    }
}
export default EventAssess



