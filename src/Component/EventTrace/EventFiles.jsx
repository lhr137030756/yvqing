import React from 'react'
import axios from 'axios'
import { Icon, Input } from 'antd'
import './EventFiles.css'
const { Search } = Input;
class EventFiles extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            filelist:[]
        }
    }
    componentDidMount() {
        this.showFiles()
    }
    render() {
        return (
            <div className='event-files'>
                <span className='files-word'><Icon type="rollback" />&nbsp;&nbsp;时间档案列表</span>
                <span className='files-num'>现有 9 个事件</span>
                <br /><br/>
                <span style={{marginLeft: '20px'}}>排序</span>
                <Search
                    placeholder="输入关键词搜素"
                    // onSearch={value => console.log(value)}
                    style={{ width: 300, marginLeft: '30px' }}
                />
                <button>搜素</button>
                <hr/>
                {this.state.filelist.map((item,index) => (
                    item.is_traced?
                    <div className='files-item' key={index}> 
                        <span className='item-name'>{item.name}</span>
                        <span className='item-time'>{(new Date(item.createtime)).toLocaleString()}</span>
                        <span className='back-trace'>重返追踪</span>
                        <span className='check-risk'>查看风险评估</span>
                    </div>
                    :<div className='files-item' key={index}> 
                            <span className='item-name'>{item.name}</span>
                            <span className='item-time'>{(new Date(item.createtime)).toLocaleString()}</span>
                            <span className='check-risk'>查看风险评估</span>
                     </div>
                ))}
            </div>
        )
    }
    showFiles =() => {
        // let param = new URLSearchParams()
        // // param.append('api_token', '123')
        // axios({
        //     method: 'post',
        //     url: 'http://47.104.142.230:8848/trace/event/file',
        //     data: param
        // })
        // .then(res => {
        //     console.log(res.data)
        // })
        // .catch(err => {
        //     console.log('出现错误')
        // })
        axios.post('http://47.104.142.230:8848/trace/event/file')
        .then(res => {
            this.setState({
                filelist:res.data.eventlist
            })
            // console.log(this.state.filelist)
        })
        .catch(err => {
            alert("请求失败")
        })
    }
}
export default EventFiles
