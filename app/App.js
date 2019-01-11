import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from "react-router";

import About from './About';
import Home from './Home';
import Repos from './Repos';

class App extends Component{

    render(){
        return(
            <div>
               <header>App</header>
               <menu>
                   <ul>
                       <li><a href="#/about">About</a></li>
                       <li><a href="#/repos">Repos</a></li>
                   </ul>
               </menu>
                {this.props.children}
            </div>
        );
    }
}

render((
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="repos" component={Repos}/>
        </Route>
    </Router>
), document.getElementById('root'));
