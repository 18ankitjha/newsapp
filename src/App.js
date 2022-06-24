
import './App.css';
import Navbar from './components/Navbar';
import Toploading  from './components/Toploading'
import React from 'react'
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App =()=> {
  const pageSize=5;
  const apiKey=process.env.REACT_APP_NEWS_API;
 
    

    return (
      <div>
        <Toploading/>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        
        
        <Route exact path='/' element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/>}></Route>
        <Route exact path='/business' element={<News key="business"  pageSize={pageSize} apiKey={apiKey} country="in" category="business"/>}></Route>
        <Route exact path='/entertainment' element={<News key="entertainment"  pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment"/>}></Route>
        <Route exact path='/general' element={<News key="general"  pageSize={pageSize} apiKey={apiKey} country="in" category="general"/>}></Route>
        <Route exact path='/health' element={<News  key="health" pageSize={pageSize} apiKey={apiKey} country="in" category="health"/>}></Route>
        <Route exact path='/science' element={<News  key="science" pageSize={pageSize} apiKey={apiKey} country="in" category="science"/>}></Route>
        <Route exact path='/sports' element={<News key="sports"  pageSize={pageSize} apiKey={apiKey} country="in" category="sports"/>}></Route>
        <Route exact path='/technology' element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology"/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    )

}

export default App;