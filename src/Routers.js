import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Example from './Pages/Example/Example.jsx'
import Login from './Pages/Login/Login.jsx'

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Example} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers