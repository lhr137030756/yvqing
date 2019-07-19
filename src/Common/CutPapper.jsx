import React from 'react' 
import { Popover, Button, Tabs, Divider } from 'antd';
import './CutPapper.css'
import CutTabL from './CutpapperContent/CutTabL.jsx'
const {TabPane} = Tabs

class CutPapper extends React.Component {
    render() {
        return (
            <div style={{ width: 100, marginLeft: '50px' }}>
                <Popover placement="rightTop" content={<CutTab></CutTab>} trigger="click">
                <Button type='link'icon='file' style={{color: 'white',marginBottom:'20px'}}>剪报夹</Button>
                </Popover>
            </div>
        )
    }
}

export default CutPapper 

class CutTab extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" className='cut-tab'>
                <TabPane tab="剪报内容" key="1" >
                    <CutTabL/>
                </TabPane>
                <TabPane tab="历史纪录" key="2" >
                    <CutTabR/>
                </TabPane>
            </Tabs>
        )
    }
}
// class CutTabL extends React.Component {
//     render() {
//         return (
//             <div className='left-tab'>
//                 <div>
//                     <span>共6条内容</span>&nbsp;&nbsp;
//                     <span className='download'>下载：</span>
//                     <span>word</span>
//                     <span>word</span>
//                     <span>word</span>
//                     <Button size='small'>一键清空</Button>
//                 </div>
//                 <div>
//                     <div>
//                         <p className='left-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.</p>
//                         <Button type='primary' className='left-del'>删除</Button>
//                         <Divider style={{marginTop: '0px', marginBottom: '0px'}}/>
//                     </div>
//                     <div>
//                         <p className='left-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.</p>
//                         <Button type='primary' className='left-del'>删除</Button>
//                         <Divider style={{marginTop: '0px', marginBottom: '0px'}}/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
class CutTabR extends React.Component {
    render() {
        return (
            <div className='right-tab'>
                <Button>一键清空</Button>
                <Button>一键下载</Button>
                <br/>
                <div className='right-item'>
                    <div className='right-item-content'>
                        <h3>这是剪报标题标题标题</h3>
                        <p>生成时间：2019年9月9日</p>
                        <p>制作者：XXX</p>
                    </div>
                    <div className='right-button'>
                        <Button type='primary'>下载</Button>
                        <br/><br/>
                        <Button type='primary'>删除</Button>
                    </div>
                    <Divider style={{marginTop: '0px', marginBottom: '0px'}}/>
                </div>
                <div className='right-item'>
                    <div className='right-item-content'>
                        <h3>这是剪报标题标题标题</h3>
                        <p>生成时间：2019年9月9日</p>
                        <p>制作者：XXX</p>
                    </div>
                    <div className='right-button'>
                        <Button type='primary'>下载</Button>
                        <br/><br/>
                        <Button type='primary'>删除</Button>
                    </div>
                    <Divider style={{marginTop: '0px', marginBottom: '0px'}}/>
                </div>
            </div>
        )
    }
}