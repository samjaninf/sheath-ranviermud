// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import RoomPage from './containers/RoomPage';
import AreaPage from './containers/AreaPage';
import ItemPage from './containers/ItemPage';
import CharacterPage from './containers/CharacterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/area" component={AreaPage} />
    <Route path="/room" component={RoomPage} />
    <Route path="/item" component={ItemPage} />
    <Route path="/character" component={CharacterPage} />
  </Route>
);
