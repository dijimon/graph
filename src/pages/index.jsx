import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

//Pages
import Graph from '@/pages/graph';
import NotFound from '@/pages/NotFound';

//Styles
import Styles from './styles.css';

class Application extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={Styles.container}>
                <div id="box" className="jxgbox" style={{width:'500px', height:'500px'}}></div>
                <Switch>
                    <Route exact path="/" component={Graph} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Application;
