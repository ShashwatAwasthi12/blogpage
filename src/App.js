import './App.css';
import Blogpage from './Blogs/Blogpage'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Singleblog from './Blogs/Singleblog'
function App() {
  return (
    < div className="">
      <Router>
        <Switch>
          <Route exact path="/blogpage" component={Blogpage} />
          <Route exact path="/blogpage/:id">
            <Singleblog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
