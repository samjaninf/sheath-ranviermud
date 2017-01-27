// @flow
import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setWorldData } from '../actions/worldData'; 


const ItemPage = (props, { store }) => {
  const state = store.getState();
  const { worldData } = state;
  const items = worldData.items ? worldData.items.items : null;
  console.log("Items page...");
  console.log("state", state)
  console.log("props", props);
  return (
    <div>
          <Navigation />
          <div>
            {items ? items.map(item => <p>item.name</p>) : 'Loading Items...'}
          </div>
    </div>
  );
}

ItemPage.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = (state) => ({ worldData: state.worldData });

function mapDispatchToProps(dispatch) {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
