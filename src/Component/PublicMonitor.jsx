import React from 'react' 
import { Input, Button, Descriptions, Checkbox, Breadcrumb } from 'antd'
import './PublicMonitor.css'

const { Search } = Input;
class PublicMonitor extends React.Component {
    render() {
        return (
            <div className='public-monitor'>
                <div className='public-monitor-left'>
                    <PublicMonitorLeftHead></PublicMonitorLeftHead>
                    <PublicMonitorOverView></PublicMonitorOverView>
                    <PublicMonitorContent></PublicMonitorContent>

                </div>
                <div className='public-monitor-right'>

                </div>
            </div>
        )
    }
}


export default PublicMonitor

class PublicMonitorLeftHead extends React.Component {
    render() {
        return (
            <div>
                <span className='mySchool'>我校动态</span>
                <div class='overView'>
                    <span className='overView-g'>总览</span>
                    <Search
                        placeholder="清输入关键词，回车搜索"
                        style={{ width: 200 }}
                    />
                    <Button shape='round' size='small'>今天</Button>
                    <Button shape='round' size='small'>近一周</Button>
                    <button style={{backgroundColor: '#cccccc', boeder: 'none'}}>高级搜索</button>
                    <p>*多个搜索词时：和用and，如中大and围墙；或用or，如21周or除夕夜</p>
                </div>
                <hr style={{color: '#cccccc', marginTop: 0}}></hr>
            </div>
        )
    }
}

class PublicMonitorOverView extends React.Component {
    render() {
        return (
            <div className='content-head'>
                <Checkbox>全选</Checkbox>
                <a href>加入简报</a>
                <Breadcrumb className='bread'>
                    <Breadcrumb.Item>
                    <span>按时间排序</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item><span>按热度排序</span></Breadcrumb.Item>
                    <Breadcrumb.Item><span>按相关度排序</span></Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

class PublicMonitorContent extends React.Component {
    render() {
        return (
            <div>
                <div class='content'>
                    <Checkbox></Checkbox>
                    <Descriptions
                    title="还好我毕业了@全球校园事儿发表于2019/4/30 ..."
                    border
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    >
                        <Descriptions.Item label="信息源">微博</Descriptions.Item>
                        <Descriptions.Item label="发布时间">2019/4/24</Descriptions.Item>
                        <Descriptions.Item label="作者">是谁抢注了仙女</Descriptions.Item>
                        <Descriptions.Item label="详情">
                            还好我毕业了@全球校园事儿发表与2019-04-03  15：30：17 ，网友匿名投稿：#中山大学除夕夜坚守考场#
                        </Descriptions.Item>
                    </Descriptions>
                    <div className='content-button'>
                        <Button type="dashed" icon="star">置顶</Button>
                        <Button type="dashed" icon="star">加入简报</Button>
                        <Button type="dashed" icon="star">标为已读</Button>
                    </div>
                </div>
                <hr style={{color: '#cccccc', marginTop: 0}}></hr>

                <div class='content'>
                    <Checkbox></Checkbox>
                    <Descriptions
                    title="还好我毕业了@全球校园事儿发表于2019/4/30 ..."
                    border
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    >
                        <Descriptions.Item label="信息源">微博</Descriptions.Item>
                        <Descriptions.Item label="发布时间">2019/4/24</Descriptions.Item>
                        <Descriptions.Item label="作者">是谁抢注了仙女</Descriptions.Item>
                        <Descriptions.Item label="详情">
                            还好我毕业了@全球校园事儿发表与2019-04-03  15：30：17 ，网友匿名投稿：#中山大学除夕夜坚守考场#
                        </Descriptions.Item>
                    </Descriptions>
                    <div className='content-button'>
                        <Button type="dashed" icon="star">置顶</Button>
                        <Button type="dashed" icon="star">加入简报</Button>
                        <Button type="dashed" icon="star">标为已读</Button>
                    </div>
                </div>
                <hr style={{color: '#cccccc', marginTop: 0}}></hr>
            </div>
        )
    }
}


