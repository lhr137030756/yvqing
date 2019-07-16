/* eslint no-unused-vars:0 */
import React from 'react';
import 'antd/dist/antd.css';
import './AftereffectEvaluation.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export default class AftereffectEvaluation extends React.Component {
    render() {
        return (
            <div>
                <Menu mode="horizontal" className="menu1">
                    <Menu.Item>
                        <Link to="/home/PublicManage/DisposalReference">处置参考</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/PublicManage/DisposalAdvice">处置建议</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/PublicManage/AftereffectEvaluation">后效评估</Link>
                    </Menu.Item>
                </Menu>
                <div className="aee_statement">
                    <span>当前事件为: xxx</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <span>事件档案</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <span style={{cursor : "pointer"}} onClick={this.handleClick}>返回评估</span>
                </div>
                <p className="aftereffectEvaluation_p">
                    该功能为高级定制服务，<br/>
                    需要该服务欢迎来电问询：123456789000
                </p>
            </div>
        );
    }

    handleClick = () => {
        let { history } = this.props
        history.push("/Component/RiskAssessment")
    };
}
