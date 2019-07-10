import * as React from 'react';
import '../style.scss';
import { Route, Switch } from 'react-router-dom';
import { Home, Menu } from '../components';
import { InfoWrap } from '../containers/';
import { NotFound } from '../pages';

class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Menu />
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path="/info" component={ InfoWrap } />
                    <Route component={ NotFound } />
                </Switch>
            </React.Fragment>
        );
    }
};

export default App;
