import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './comp/Login'
import store from './app/store'
import { Provider } from 'react-redux'



ReactDom.render(
    <Provider store={store}>
    <Router>
        <App />
        <Switch>
            <Route path='login' component={Login} />
        </Switch>
    </Router>
    </Provider>,document.getElementById('root'))