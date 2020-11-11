import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Contact from './pages/contact/contact.component';
import About from './pages/about/about.component';
import { AppContainer } from './App.styles'; 

const App = () => (
  <AppContainer>
    <Header />  
    <Switch>
      <Route exact path = '/'>
        <HomePage />
      </Route>
      <Route path = '/about'>
        <About />
      </Route>
      <Route path = '/contact'>
        <Contact />
      </Route>
    </Switch>
  </AppContainer>
)

export default App;
