
import './App.css';
import Navbar from './components/Navbar';
import Toploading  from './components/Toploading'
import React, { Component } from 'react'
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  apiKey=process.env.REACT_APP_NEWS_API;
  render() {
    

    return (
      <div>
        <Toploading/>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        
        
        <Route exact path='/' element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general"/>}></Route>
        <Route exact path='/business' element={<News key="business"  pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="business"/>}></Route>
        <Route exact path='/entertainment' element={<News key="entertainment"  pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="entertainment"/>}></Route>
        <Route exact path='/general' element={<News key="general"  pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general"/>}></Route>
        <Route exact path='/health' element={<News  key="health" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="health"/>}></Route>
        <Route exact path='/science' element={<News  key="science" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="science"/>}></Route>
        <Route exact path='/sports' element={<News key="sports"  pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="sports"/>}></Route>
        <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="technology"/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

