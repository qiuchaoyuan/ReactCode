import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cmp1 from "./Cmp1"
import Cmp2 from "./Cmp2"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Link  to="/">首页</Link>
          <Link to="/news">新闻1</Link>
          <Link to="/news">新闻2</Link>

          <Route path="/" exact component={Cmp1}></Route>
          <Route path="/news" exact component={Cmp2}></Route>
        </Router>
      </header>

    </div>
  );
}
export default App;
