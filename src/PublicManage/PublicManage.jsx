/* eslint no-unused-vars:0 */
import React from 'react';
import 'antd/dist/antd.css';
import './PublicManage.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default class PublicManage extends React.Component{
    render() {
        return (
            <div className="body">
                {/* <Menu mode="horizontal" className="menu1">
                    <Menu.Item>
                        <Link to="/Component/PublicManage/DisposalReference">处置参考</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Component/PublicManage/DisposalAdvice">处置建议</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Component/PublicManage/AftereffectEvaluation">后效评估</Link>
                    </Menu.Item>
                </Menu> */}
                {this.props.children}
            </div>
        );
    }
}


// import React from 'react' 
// class PublicMange extends React.Component {
//     render() {
//         return (
//             <div>
//                 这是舆情处置
//             </div>
//         )
//     }
// }
// export default PublicMange