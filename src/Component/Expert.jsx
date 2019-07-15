import React from 'react' 
import './Expert.css'
// import { Row, Col } from 'antd';



class Expert extends React.Component {
    // constructor(props){
    //     super(props);

    // }
    render() {
        return (
            <div className='whole'>
                <div className='top'>
                <p>高校舆情报告定制服务致力于舆情事件的追踪、分析、应对，</p>
                <p>由专业的舆情分析师为您提供针对性、专业性的数据挖掘、深层剖析与应对建议，</p>
                <p>在舆情追踪-研判-处置各环节随时提供及时帮助，有效化解危机，不再迷惑！</p>
                </div>
                <div className='bottom'>
                    <div className='bottom-left'>    <img src={[require("./u2167.png")]} alt="人物logo"/></div>
                    <div className='bottom-right'><p style = {{marginTop:50,fontSize:32}} >舆情专家<span className='hour'>24小时</span>竭诚为您服务！</p>
                    <p style={{marginTop:100,fontWeight:400,fontSize:18}}>紧急联系电话：</p>
                    <p style={{marginTop:70,fontWeight:400,fontSize:18}}>微信扫一扫，添加紧急客服：</p>
                    <div><img alt="微信二维码" src={[require("./u2164.png")]} ></img></div>
                    </div>
                    
                </div>
            </div>
    //         <div>
    //         <div className='top'>
    // <Row>
    //   <Col span={24}>高校舆情报告定制服务致力于舆情事件的追踪、分析、应对，</Col>
    //   <Col span={24}>由专业的舆情分析师为您提供针对性、专业性的数据挖掘、深层剖析与应对建议，</Col>
    //   <Col span={24}>高校舆情报告定制服务致力于舆情事件的追踪、分析、应对，</Col>
    // </Row>
    //         </div>
    // <Row>
    //   <Col span={12}>col-12</Col>
    //   <Col span={12}>col-12</Col>
    // </Row>
    //         </div>
        )
    }
}
export default Expert