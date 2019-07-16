import React from 'react' 
import './RiskAssessment.css'
import { Button, Modal, Tabs, Input, DatePicker} from 'antd'

const { RangePicker } = DatePicker;
class RiskAssessment extends React.Component {

    state = {
        modalVisible1: false,
        modalVisible2: false,
    };
    
    setModalVisible1(modalVisible1) {
        this.setState({ modalVisible1 });
    }
    setModalVisible2(modalVisible2) {
        this.setState({ modalVisible2 });
    }
    render() {
        return (
            <div className='riskAssessment'>
                <p className='current-num'>当前事件数量：0</p>
                <div className='select'>
                    <p>请选择需要评估的事件！</p>
                    <div className='two-button'>
                        <Button size='large' type="primary" onClick={() => this.setModalVisible1(true)}>
                        选择事件
                        </Button>
                        <Modal
                        title="事件档案"
                        centered
                        visible={this.state.modalVisible1}
                        onOk={() => this.setModalVisible1(false)}
                        onCancel={() => this.setModalVisible1(false)}
                        okText='确定'
                        cancelText='取消'
                        >
                        <p onClick={this.clickFn}>1.洁洁良事件</p>
                        <p>2.基因编辑事件</p>
                        <p>3.中大围墙事件</p>
                        <p>4.中大21周事件</p>
                        </Modal>

                        <Button size='large' type="primary" onClick={() => this.setModalVisible2(true)}>
                        创建事件
                        </Button>
                        <Modal
                        title="事件档案"
                        centered
                        visible={this.state.modalVisible2}
                        onOk={() => this.setModalVisible2(false)}
                        onCancel={() => this.setModalVisible2(false)}
                        okText='确定'
                        cancelText='取消'
                        >
                            <Tabs defaultActiveKey="1" >
                                <Tabs.TabPane tab="Step1.事件命名" key="1">
                                事件名称：< Input.Search
                                            placeholder="如中大二十一周事件"
                                            onSearch={value => console.log(value)}
                                            style={{ width: 200 }}
                                        />
                                <br/>
                                <Button className='next'>下一步</Button>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Step2.关键词设置" key="2">
                                关键词：< Input.Search
                                            placeholder="多个关键词下，and表示并，or表示或"
                                            style={{ width: 200 }}
                                        />
                                <br/><br/>
                                排除词：< Input.Search
                                            placeholder="多个关键词下，and表示并，or表示或"
                                            style={{ width: 200 }}
                                        />
                                <br/><br/>
                                起止时间：<RangePicker  />
                                <br /><br/>
                                <Button shape='round' size='big'>当天</Button>
                                <Button shape='round' size='big'>近一周</Button>
                                <Button shape='round' size='big'>近一月</Button>
                                <Button className='next'>下一步</Button>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Step3.补充材料" key="3">
                                上传数据：< Input.Search
                                            placeholder="支持csv，pdf，doc格式"
                                            style={{ width: 200 }}
                                        />
                                <Button type='primary'>浏览</Button>
                                <br/>
                                <span style={{fontSize: '12px'}}>*该项非必选项。如有补充材料，可上传到该话题管理夹。</span>
                                <br/>
                                <Button className='next'>创建</Button>
                                <br/>
                                </Tabs.TabPane>
                            </Tabs>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }

    clickFn = (e) => {
        let {history} =this.props
        history.push('/home/RiskAssessDetails')
    }
}



export default RiskAssessment