import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, withRouter, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import reportWebVitals from './reportWebVitals';

const AppRootWithRouter = withRouter(App);

const customHistory = createBrowserHistory();

const PrivateRoute = ({component: Component, ...rest}: any) => {
    return (
        <>
            <Route {...rest} render={(props) => {
                return (
                    <>
                        <Component {...props}/>
                    </>
                )
            }
            }/>
        </>
    )
}
export default PrivateRoute;

ReactDOM.render(
    <React.StrictMode>
        <Router history={customHistory}>
            <AppRootWithRouter/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
