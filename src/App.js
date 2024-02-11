import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  pageSize= 6 ; 
  apikey = process.env.REACT_APP_NEWS_API 
  state = 
  {
    progress : 0 
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <LoadingBar
        height={3}
        color="#2E8AB8"
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/" element={<News apikey={this.apikey} setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News apikey={this.apikey} setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News apikey={this.apikey} setProgress={this.setProgress} key="entertainment"  pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News apikey={this.apikey} setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News apikey={this.apikey} setProgress={this.setProgress} key="health"  pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News apikey={this.apikey} setProgress={this.setProgress} key="science"  pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News apikey={this.apikey} setProgress={this.setProgress} key="sports"  pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News apikey={this.apikey} setProgress={this.setProgress} key="technology"  pageSize={this.pageSize} country="in" category="technology" />} />

          </Routes>
        </div>
      </Router>
    )
  }
}
