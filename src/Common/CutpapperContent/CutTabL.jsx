import React from 'react' 
import axios from 'axios'
import {Button,  Pagination, Divider} from 'antd'
class CutTabL extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cutContent: []
        }
    }
    componentDidMount = () => {
        this.showCut(1)
    }
    render() {
        return (
            <div className='left-tab'>
                <div>
                    <span>共6条内容</span>&nbsp;&nbsp;
                    <span className='download'>下载：</span>
                    <span>word</span>
                    <span>word</span>
                    <span>word</span>
                    <Button size='small'>一键清空</Button>
                </div>
                <div>
                    {this.state.cutContent.map(item => (
                        <div key={item.id}>
                            <p className='left-p'>
                            <span>来源：{item.source}</span>&nbsp;&nbsp;
                            <span>发布时间：{item.publishTime}</span><br/>
                            <span>作者：{item.author}</span>&nbsp;&nbsp;
                            <span>标题：{item.title}</span><br/>
                            {item.content}
                            </p>
                            <Button type='primary' className='left-del' onClick={this.delCut} cutid={item.id}>删除</Button>
                            <Divider style={{marginTop: '0px', marginBottom: '0px'}}/>
                        </div>
                    ))}
                    <Pagination  onChange={this.showCut} defaultCurrent={1} total={100} pageSize='5' />
                </div>
            </div>
        )
    }
    showCut = (e) => {
        let param = new URLSearchParams()
        param.append('user_id', '9')
        param.append('page', e)
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/scrap/brief/display',
            data: param
        })
        .then(res => {
            console.log(res.data)
            if(res.data.event === 0) {
                this.setState({
                    cutContent: res.data.obj
                })
            }
        })
        .catch(err => {
            alert('出现错误')
        })
    }
    delCut = (e) => {
        let cutID = e.target.getAttribute('cutid')
        let param = new URLSearchParams()
        param.append('id', cutID)
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/scrap/brief/delete',
            data: param
        })
        .then(res => {
            console.log(res.data)
            if(res.data.error_code === 0) {
                alert("删除成功")
                this.showCut(e)
            }
        })
        .catch(err => {
            alert('出现错误')
        })
        this.showCut(e)
    }
}

export default CutTabL
