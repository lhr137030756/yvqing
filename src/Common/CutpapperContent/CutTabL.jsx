import React from 'react' 
import axios from 'axios'
import {Button, Divider, Pagination} from 'antd'
class CutTabL extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cutContent: []
        }
    }
    componentDidMount = () => {
        // let param = new URLSearchParams()
        // param.append('api_token', 'admin')
        // param.append('name', '洁洁良')
        // axios({
        //     method: 'post',
        //     url: 'http://47.104.142.230:8848/trace/event/index/get_todaynew',
        //     data: param
        // })
        // .then(res => {
        //     console.log(res.data)
        // })
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
                    {/* <Pagination defaultCurrent={1} total={10} pageSize='2' onChange={this.pageClick} ></Pagination> */}
                    <Pagination  onChange={this.pageClick} defaultCurrent={3} total={100} />
                </div>
            </div>
        )
    }
    pageClick = (e) => {
        console.log(e)
        let param = new URLSearchParams()
        param.append('user_id', 'admin')
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/scrap/history/display',
            data: param
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log('出现错误')
        })
    }
    onShowSizeChange = () => {

    }
}

export default CutTabL
