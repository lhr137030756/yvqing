/* eslint no-unused-vars:0 */
import React from 'react';
import 'antd/dist/antd.css';
import './StartPage.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import DisposalModal from '../../DisposalModal/DisposalModal.jsx';

export default class StartPage extends React.Component {
    
    state = {
        modal_visible: false
    };

    handleClick = () => {
        console.log('openModal');
        this.setState({
            modal_visible: true
        });
    };

    render() {
        return (
            <div>
                <p className="startPage_p">请选择需要处置的事件!</p>

                <DisposalModal modal_visible={this.state.modal_visible} />

                <Button className="startPage_button" onClick={this.handleClick}>选择事件</Button>
                {/* <DisposalModal visible={this.state.modal_visible} /> */}
            </div>
        );
    }
}
