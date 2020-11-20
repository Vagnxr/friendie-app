import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { SocialMedia, Home, Media } from './pages';
import { Header } from './components';

export const Routes = () => {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/media" component={Media} />
      <Route path="/social-media" component={SocialMedia} />
    </Switch>
    </BrowserRouter>
  )
}