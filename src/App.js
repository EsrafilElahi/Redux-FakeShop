import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import CardDetail from './components/CardDetail'
import Home from './pages/Home'
import Basket from './pages/Basket'
import Jewelery from './pages/Jewelery'
import MenClothing from './pages/MenClothing'
import WomenClothing from './pages/WomenClothing'


import 'antd/dist/antd.css'
import './App.css';


function App() {

  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/basket' component={Basket} />
        <Route path='/jewelery' component={Jewelery} />
        <Route path='/men-clothing' component={MenClothing} />
        <Route path='/women-clothing' component={WomenClothing} />
        <Route path='/product/:id' component={CardDetail} />
        <Route>not found</Route>
      </Switch>

    </div>

  );
}

export default App;
