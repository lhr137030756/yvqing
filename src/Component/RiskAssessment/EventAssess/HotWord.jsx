import React from 'react' 
import axios from 'axios'
class HotWord extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            wordImg: ""
        }
    }
    componentDidMount = () => {
        let param = new URLSearchParams()
        param.append('traceId', '40282f816bfded29016bfded84bd0000')
        axios({
            method: 'post',
            url: 'http://47.104.142.230:8848/risk/getIdeaLeader',
            data: param
        })
        .then(res => {
            console.log(res.data)
            this.setState({
                wordImg : res.data.obj
            })
        })
    }
    render() {
        return (
            <div>
                <div className='details-tag'>焦点热刺</div>
                <img src="data:image/png;base64,wordImg" className="images" border="5px" alt='焦点热词'></img>
                {/* <img src='data:image/jpg;base64,${wordImg}' class="images" border="5px" alt='焦点热词'/> */}
            </div>
        )
    }
}
export default HotWord 