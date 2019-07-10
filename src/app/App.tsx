import * as React from 'react';
import '../style.scss';
import { Route } from 'react-router-dom';
import { Home, Menu } from '../components';
import { InfoWrap } from '../containers/';

class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Menu />
                <Route exact path='/' component={ Home } />
                <Route path="/info" component={ InfoWrap } />
            </React.Fragment>
        );
    }
};

export default App;
