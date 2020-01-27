import React from 'react';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.page';
import Posts from './pages/posts/posts.page';
import { Link, Switch, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: ''
    }
  }
  render() {
    return (
      <div className="App">
       <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/posts" component={Posts}/>
        </Switch>
      </div>
    );
  }

}

export default App;
