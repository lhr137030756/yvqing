import React from 'react' 
import axios from 'axios'
class HotWord extends React.Component {
    componentDidMount = () => {
        let param = new URLSearchParams()
        param.append('traceId', '40282f816bfded29016bfded84bd0000')
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/risk/graph/wordCloud',
            data: param
        })
        .then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                <div className='details-tag'>焦点热刺</div>
            </div>
        )
    }
}
export default HotWord 