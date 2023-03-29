import React, { Component } from 'react';

import PasswordGenerator from '../../passwordGenerator/PasswordGenerator';

import './Main.css';

class Main extends Component {

  render() {
    return (
      <div className="Main">
        <PasswordGenerator className='PasswordGenerator' />
      </div>
    )
  }
}
export default Main;