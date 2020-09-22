import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css'
import Project from './components/Project/Project';
import Service from './components/Service/Service';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog/Blog'
import ArticleDetails from './components/ArticleDetails/ArticleDetails';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
       <Header></Header>
      <Router>
        <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route exact path="/project">
           <Project></Project>
         </Route>
         <Route exact path="/service">
           <Service></Service>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/blog">
           <Blog></Blog>
         </Route>
         <Route exact path="/contact">
           <Contact></Contact>
         </Route>
         <Route exact path="/:key">
           <ArticleDetails></ArticleDetails>
         </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
