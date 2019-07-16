import React from 'react'
import Home from './Home'
import Login from './Login/NormalLoginForm.jsx'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/home"></Redirect>
                    <Route path="/home" component="Home"><Home></Home></Route>
                    <Route path="/login" component="Login"><Login></Login></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default App