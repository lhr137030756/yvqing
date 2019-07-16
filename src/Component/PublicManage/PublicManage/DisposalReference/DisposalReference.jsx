/* eslint no-unused-vars:0 */
import React from 'react';
import 'antd/dist/antd.css';
import './DisposalReference.css';
import { Link } from 'react-router-dom';
import { Row, Col, Select, Menu } from 'antd';

export default class DisposalReference extends React.Component {
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
                <div className="df_statement">
                    <span>当前事件为: xxx</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <span>事件档案</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                    {/* <a>返回评估</a> */}
                    <span style={{cursor : "pointer"}} onClick={this.handleClick}>返回评估</span>
                </div>
                <Row>
                    <Col span={9} className="case">
                        {/* <div className="case_label">案例参考</div>
                        <div className="case1">
                            <div className="number">1</div>
                        </div> */}
                        <Row className="case_label">案例参考</Row>
                        <Row>
                            <Col span={3} offset={1}>
                                <div className="number">1</div>
                            </Col>
                            <Col span={20}>
                                <div className="caseTitle">
                                    <p>案例标题</p>
                                </div>
                                {/* <br/> */}
                                <div className="caseIntroduction">
                                    <p>案例简介</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col span={3} offset={1}>
                                <div className="number">2</div>
                            </Col>
                            <Col span={20}>
                                <div className="caseTitle">
                                    <p>案例标题</p>
                                </div>
                                {/* <br/> */}
                                <div className="caseIntroduction">
                                    <p>案例简介</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col span={3} offset={1}>
                                <div className="number">3</div>
                            </Col>
                            <Col span={20}>
                                <div className="caseTitle">
                                    <p>案例标题</p>
                                </div>
                                {/* <br/> */}
                                <div className="caseIntroduction">
                                    <p>案例简介</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={1}>
                        <div className="dashedLine"></div>
                    </Col>

                    <Col span={9} className="statement">
                        <Row className="statement_label">声明参考</Row>
                        <Row>
                            <Col span={3} offset={1}>
                                <div className="number">1</div>
                            </Col>
                            <Col span={20}>
                                <div className="statementTitle">
                                    <p>关于xxx事件的声明</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col span={3} offset={1}>
                                <div className="number">2</div>
                            </Col>
                            <Col span={20}>
                                <div className="statementTitle">
                                    <p>关于xxx事件的声明</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col span={3} offset={1}>
                                <div className="number">3</div>
                            </Col>
                            <Col span={20}>
                                <div className="statementTitle">
                                    <p>关于xxx事件的声明</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={3} offset={2} className="match">
                        <Row>
                            <div className="matchTitle">
                                <p>精细匹配</p>
                            </div>
                        </Row>
                        <Row className="matchSelect">
                            <p>学校层次:</p>
                            <Select defaultValue="全部" style={{ width: 120, left: 10 }}>
                                <Select.Option value="全部">全部</Select.Option>
                                <Select.Option value="985">985</Select.Option>
                                <Select.Option value="211">211</Select.Option>
                                <Select.Option value="普通高校">普通高校</Select.Option>
                                <Select.Option value="职业高校">职业高校</Select.Option>
                            </Select>
                        </Row>
                        <Row className="matchSelect">
                            <p>事件类型:</p>
                            <Select defaultValue="全部" style={{ width: 120, left: 10 }}>
                                <Select.Option value="全部">全部</Select.Option>
                                <Select.Option value="意识形态类">意识形态类</Select.Option>
                                <Select.Option value="意外伤亡类">意外伤亡类</Select.Option>
                                <Select.Option value="管理维权类">管理维权类</Select.Option>
                                <Select.Option value="教育改革类">教育改革类</Select.Option>
                                <Select.Option value="突发群体类">突发群体类</Select.Option>
                                <Select.Option value="敏感人物类">敏感人物类</Select.Option>
                                <Select.Option value="敏感节点类">敏感节点类</Select.Option>
                                <Select.Option value="民族宗教类">民族宗教类</Select.Option>
                            </Select>
                        </Row>
                        <Row className="matchSelect">
                            <p>风险点:</p>
                            <Select defaultValue="全部" style={{ width: 120, left: 10 }}>
                                <Select.Option value="全部">全部</Select.Option>
                                <Select.Option value="意识形态">意识形态</Select.Option>
                                <Select.Option value="媒体介入">媒体介入</Select.Option>
                                <Select.Option value="重要领导">重要领导</Select.Option>
                                <Select.Option value="生命安全">生命安全</Select.Option>
                            </Select>
                        </Row>
                        <Row className="matchSelect">
                            <p>年份:</p>
                            <Select defaultValue="全部" style={{ width: 120, left: 10 }}>
                                <Select.Option value="全部">全部</Select.Option>
                                <Select.Option value="2019年">2019年</Select.Option>
                                <Select.Option value="2018年">2018年</Select.Option>
                                <Select.Option value="2017年">2017年</Select.Option>
                                <Select.Option value="2016年及以前">2016年及以前</Select.Option>
                            </Select>
                        </Row>
                        <Row className="matchSelect">
                            <p>发酵程度:</p>
                            <Select defaultValue="全部" style={{ width: 120, left: 10 }}>
                                <Select.Option value="全部">全部</Select.Option>
                                <Select.Option value="高">高</Select.Option>
                                <Select.Option value="中">中</Select.Option>
                                <Select.Option value="低">低</Select.Option>
                            </Select>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }

    handleClick = () => {
        let { history } = this.props
        history.push("/Component/RiskAssessment")
    };
}