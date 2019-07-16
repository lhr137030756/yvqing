import React from 'react';
import { Modal, Button} from 'antd';
import 'antd/dist/antd.css';
import './DisposalModal.css';
import {  withRouter } from 'react-router-dom';
// import DisposalReference from '../PublicManage/DisposalReference/DisposalReference.jsx';

class DisposalModel extends React.Component {
    state = {
        modal_visible: false
    };

    // showModal = () => {
    //     this.setState({
    //         visible: true,
    //     });
    // };

    componentWillReceiveProps(nextProps) {
        this.setState({
            modal_visible: nextProps.modal_visible
        });
    }

    handleCancel = e => {
        console.log(e);
        this.setState({
            modal_visible: false,
        });
    };

    render() {
        return (
            <div>
                <Modal
                    title="事件档案"
                    visible={this.state.modal_visible}
                    onCancel={this.handleCancel}
                    closable="false"
                    destroyOnClose="true"
                    footer={[
                        <Button className="modalButton" onClick={this.handleCancel}>关闭窗口</Button>
                    ]}
                >
                <p className="modal_p" onClick={this.handleClick}>1.A事件</p>
                <p className="modal_p">2.B事件</p>
                <p className="modal_p">3.C事件</p>
                </Modal>
                {/* <HashRouter>
                    <Route path='../PublicManage/DisposalReference' component={DisposalReference}></Route>
                </HashRouter> */}
            </div>
            
        );
    }

    handleClick = (e) => {
        let {history} = this.props
        // history.push('../PublicManage/DisposalReference')
        history.push('/home/PublicManage/DisposalReference')
    };

}

export default withRouter(DisposalModel);