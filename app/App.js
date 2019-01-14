import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router,Route ,Link} from 'react-router-dom';

import About from './About';
import Home from './Home';
import Repos from './Repos';
import {createHistory} from "history/es6";

class App extends Component{

    render(){
        return(
            <div>
               <header>App</header>
               <menu>
                   <ul>
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/repos">Repos</Link></li>
                   </ul>
               </menu>
                {this.props.children}
            </div>
        );
    }
}

render((
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}/>
        </div>
    </Router>
), document.getElementById('root'));
