import React from 'react';
import { Main, Input, Search, Detail, ErrorPage, EmptyPage, Like } from './components'; 
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/input" render={()=> <Input/>}/>
      <Route path="/search/:params" render={()=> <Search/>}/>
      <Route path="/detail/:params" render={()=> <Detail/>}/>
      <Route path="/404" render={()=> <ErrorPage/>}/>
      <Route path="/Empty" render={()=> <EmptyPage/>}/>
      <Route path="/Like" render={()=> <Like/>}/>
      <Route excat path="/" render={()=> <Main/>}/>
    </Switch>
  );
}

export default App;
