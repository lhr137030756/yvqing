import React from 'react' 
import {
    Card,
    Form,
    Input,
    Button,
    message,
    Icon,
    Checkbox,
    Col
} from 'antd';
import './NormalLoginForm.css'
// import md5 from 'md5';
import { withRouter } from 'react-router-dom';

const FormItem = Form.Item;

// const TabPane = Tabs.TabPane;

class NormalLoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            userpwd: '',
            data: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userInfo = this.props.form.getFieldsValue();
        // let history = this.props.history;
        // let history = this.context.router.history;
        if (userInfo.username === 'admin' && userInfo.password === 'admin') {
            console.log(userInfo.username);
            let {history} = this.props
            history.push('/Component');
        } else {
            message.error('登录失败');
        }
        // if ((e.type == 'keyup' && e.keyCode == 13) || e.type == 'click') {
        //     this.props.form.validateFields((err, values) => {
        //         if (!err) {
        //             let user = {
        //                 username: values.username,
        //                 password: ''
        //             };
        //             // user.password = values.password ? md5(values.password) : '';
        //             this.$post('/user/login', user) 
        //                 .then((res) => {
        //                     if (res.event == 0) {
        //                         localStorage.setItem(
        //                             'jwtToken',
        //                             res.obj.jwtToken
        //                         );
        //                         localStorage.setItem(
        //                             'userType',
        //                             res.obj.roleType
        //                         );
        //                         localStorage.setItem('userId', res.obj.userId);
        //                         this.props.history.replace(
        //                             '/admin/OurSchoolSituation'
        //                         );
        //                     } else {
        //                         message.error(res.msg);
        //                     }
        //                 })
        //                 .catch((e) => {
        //                     console.log(e);
        //                 });
        //         }
        //     });
        // }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Col span="24">
                <div className="login-body">
                    <div className="login-mask">
                        <div>
                            <div className="login-title">
                                高校舆情风险管理系统
                            </div>
                            <div className="logintest">
                                <Card
                                    title="登录"
                                    className="login-card"
                                    style={{
                                        MarginTop: '10px',
                                        MarginRight: '50px'
                                    }}>
                                    <Form style={{ width: 300 }}>
                                        <FormItem>
                                            {getFieldDecorator('username', {
                                                initialValue: '',
                                                rules: [
                                                    {
                                                        required: true,
                                                        message:
                                                            '用户名不能为空'
                                                    },
                                                    {
                                                        min: 5,
                                                        max: 10,
                                                        message:
                                                            '长度不在范围内'
                                                    },
                                                    {
                                                        // pattern:/^\w/g,
                                                        pattern: new RegExp(
                                                            '^\\w+$',
                                                            'g'
                                                        ),
                                                        message:
                                                            '用户名必须是数字或者字母'
                                                    }
                                                ]
                                            })(
                                                <Input
                                                    prefix={
                                                        <Icon type="user" />
                                                    }
                                                    placeholder="请输入用户名"
                                                    // onKeyUp={this.handleSubmit}
                                                />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                initialValue: '',
                                                rules: []
                                            })(
                                                <Input.Password
                                                    prefix={
                                                        <Icon type="lock" />
                                                    }
                                                    type="pass"
                                                    placeholder="请输入密码"
                                                    // onKeyUp={this.handleSubmit}
                                                />
                                            )}
                                        </FormItem>
                                        <FormItem className="rememberpwd">
                                            {getFieldDecorator('rememberpwd', {
                                                valuePropName: 'checked', //默认打勾
                                                initialValue: true,
                                                rules: []
                                            })(<Checkbox>记住密码</Checkbox>)}
                                            <a
                                                href
                                                style={{ float: 'right' }}>
                                                忘记密码？
                                            </a>
                                        </FormItem>
                                        <FormItem>
                                            {/*<Button type='primary' onClick={this.handleManagerSubmit} style={{float:'right'}}>管理员登录</Button>
                                             */}

                                            <Button
                                                type="primary"
                                                onClick={this.handleSubmit}
                                                style={{ float: 'right' }}>
                                                用户登录
                                            </Button>
                                        </FormItem>
                                    </Form>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}

withRouter(NormalLoginForm);
export default Form.create()(NormalLoginForm); //this.props.form才可以取到
// withRouter(NormalLoginForm);



