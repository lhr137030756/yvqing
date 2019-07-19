import React from 'react' 
import {Button, Modal, Tabs,Input,DatePicker} from 'antd'
import './AddEvent.css'
const { RangePicker } = DatePicker;
class AddEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible2: false,
            eventName: '',
            keyWord: '',
            excludeword: '',
            startTime: '',
            endTime: '',
            period: ''

        }
    }
    setModalVisible2 = (fa) => {
        this.setState({
            modalVisible2: fa
        })
    }
    render() {
        
        return (
            <div className='add-event'>
                <Button type="primary" onClick={() => this.setModalVisible2(true)}>
                    添加事件
                </Button>
                <Modal
                    title="添加事件"
                    centered
                    visible={this.state.modalVisible2}
                    onOk={this.createSave}
                    onCancel={() => this.setModalVisible2(false)}
                    okText='确定'
                    cancelText='取消'
                >
                    <Tabs defaultActiveKey="1" >
                        <Tabs.TabPane tab="Step1.事件命名" key="1">
                            事件名称：< Input.Search
                                placeholder="如中大二十一周事件"
                                onChange={this.changeFn}
                                value={this.state.eventName}
                                name='eventName'
                                style={{ width: 200 }}
                            />
                            <br />
                            <Button className='next'>下一步</Button>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Step2.关键词设置" key="2">
                            关键词：< Input.Search
                                placeholder="多个关键词下，and表示并，or表示或"
                                style={{ width: 200 }}
                                value={this.state.keyWord}
                                onChange={this.changeFn}
                                name='keyWord'
                            />
                            <br /><br />
                            排除词：< Input.Search
                                placeholder="多个关键词下，and表示并，or表示或"
                                style={{ width: 200 }}
                                value={this.state.excludeword}
                                onChange={this.changeFn}
                                name='excludeword'
                            />
                            <br /><br />
                            起止时间：<RangePicker onChange={this.createName}/>
                            <br /><br />
                            <Button shape='round' period='0' onClick={this.createPeriod.bind(this,1)}>当天</Button>
                            <Button shape='round' period='1' onClick={this.createPeriod.bind(this,2)}>近一周</Button>
                            <Button shape='round' period='2' onClick={this.createPeriod.bind(this,3)}>近一月</Button>
                            <Button className='next'>下一步</Button>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Step3.补充材料" key="3">
                            上传数据：< Input.Search
                                placeholder="支持csv，pdf，doc格式"
                                style={{ width: 200 }}
                            />
                            <Button type='primary'>浏览</Button>
                            <br />
                            <span style={{ fontSize: '12px' }}>*该项非必选项。如有补充材料，可上传到该话题管理夹。</span>
                            <br />
                            <Button className='next'>创建</Button>
                            <br />
                        </Tabs.TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
    createName = (e) => {
        this.setState({
            startTime: e[0]._d.getTime(),
            endTime: e[1]._d.getTime()
        })
    }
    changeFn = (e) => {
        console.log('e',e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createPeriod =(pr) => {
        // console.log(pr)
        this.setState({
            period: pr
        })
    }
    createSave =() => {
        this.setModalVisible2(false)
        console.log('state',this.state)
    }
}

export default AddEvent