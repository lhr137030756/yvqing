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
        this.showCut()
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
                            <p className='left-p'>{item.content}</p>
                            <Button type='primary' className='left-del' onClick={this.delCut} cutid={item.id}>删除</Button>
                            <Divider style={{marginTop: '0px', marginBottom: '0px'}}/>
                        </div>
                    ))}
                    
                    <div>
                        <p className='left-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.</p>
                        <Button type='primary' className='left-del'>删除</Button>
                        <Divider style={{marginTop: '0px', marginBottom: '0px'}}/>
                    </div>
                    <div>
                        <p className='left-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.</p>
                        <Button type='primary' className='left-del'>删除</Button>
                        <Divider style={{marginTop: '0px', marginBottom: '0px'}}/>
                    </div>
                    <div>
                        <p className='left-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.</p>
                        <Button type='primary' className='left-del'>删除</Button>
                        <Divider style={{marginTop: '0px', marginBottom: '0px'}}/>
                    </div>
                    <Pagination  onChange={this.showCut} defaultCurrent={1} total={100} pageSize='5' />
                </div>
            </div>
        )
    }
    showCut = (e) => {
        // let pageSize = e
        // console.log(pageSize)
        let param = new URLSearchParams()
        param.append('user_id', '9')
        param.append('page', 2)
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/scrap/brief/display',
            data: param
        })
        .then(res => {
            console.log(res.data)
            if(res.data.success) {
                this.setState({
                    cutContent: res.data.obj
                })
            }
        })
        .catch(err => {
            console.log('出现错误')
        })
    }
    delCut = (e) => {
        let cutID = e.target.getAttribute('cutid')
        console.log(e.target.getAttribute('cutid'))
        let param = new URLSearchParams()
        param.append('id', cutID)
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/scrap/brief/delete',
            data: param
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log('出现错误')
        })

        this.showCut()
    }
}

export default CutTabL
