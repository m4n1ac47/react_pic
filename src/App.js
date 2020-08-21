import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Story } from './pages/Story'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/story" exact component={Story}></Route>
      </Switch>
        <div></div>
    </BrowserRouter>
  )
}

export default App
