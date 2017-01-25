// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>SHEATH</h2>
          <Link to="/area">Areas</Link>
          <Link to="/room">Rooms</Link>
          <Link to="/item">Items</Link>
          <Link to="/character">Characters</Link>
        </div>
      </div>
    );
  }
}
