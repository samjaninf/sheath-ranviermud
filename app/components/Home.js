// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/area">Create New Area</Link>
          <Link to="/room">Create New Room</Link>
          <Link to="/item">Create New Item</Link>
          <Link to="/character">Create New Character</Link>
        </div>
      </div>
    );
  }
}
