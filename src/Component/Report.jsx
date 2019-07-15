import React from 'react' 
import { Tabs, Breadcrumb } from 'antd';
const { TabPane } = Tabs;
class Report extends React.Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="今日扫描" key="1">
                    <Tab1></Tab1>
                    </TabPane>
                    <TabPane tab="事件简报" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="事件专报" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="历史报告" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export default Report

class Tab1 extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>热度TOP10</Breadcrumb.Item>
                    <Breadcrumb.Item>热度TOP50</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}


