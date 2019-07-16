import React from 'react';
import { PageHeader } from 'antd';

const extraContent = (
  <img 
    className='logo'
    src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
    alt="公司logo"
  />
);

class Headers extends React.Component {
    render() {
        return (
        <PageHeader >
            <div className="wrap">
                <div className="extraContent" >{extraContent}</div>
                <span className="content">高校舆情风险管理系统</span>
            </div>
        </PageHeader>
        )
    }
}
export default Headers