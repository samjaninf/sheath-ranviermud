import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setWorldData } from '../actions/worldData';

export class App extends Component {

  componentWillMount() {
    console.log('app props in cwm:', this.props);

    const ranvierServerURL = 'http://localhost:9001/api/';
    const worldData = {};

    const worldDataPoints = [
      'items', 'npcs', 'players', 'rooms', 'help'
    ];

    worldDataPoints.forEach(endpoint => {
      fetch(ranvierServerURL + endpoint)
        .then(blob => blob.json(), err => { throw new Error(err.text) })
        .then(response => worldData[endpoint] = response)
        .then(_ => setWorldData(worldData))
        .then(action => console.log("Done! ", action, "World:", worldData));
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(setWorldData, dispatch);
}

const mapStateToProps = (state) => ({ worldData: state.worldData });

export default connect(mapStateToProps, mapDispatchToProps)(App);
