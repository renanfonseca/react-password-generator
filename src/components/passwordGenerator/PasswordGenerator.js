import React, { Component } from 'react';

import './PasswordGenerator.css';

class PasswordGenerator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      password: '',
      passwordSize: 4
    };

    this.genPass = this.genPass.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
  }

  genPass(size) {
    var pass = '';
    while (size > 0) {

      switch (Math.round(Math.random() * 2)) {
        case 0:
          pass = pass
            .concat(Math.round(Math.random() * 9).toString());
          break;
        case 1:
          pass = pass
            .concat(String.fromCharCode(65 + Math.round(Math.random() * 26)));
          break;
        case 2:
          pass = pass.concat(String.fromCharCode(33 + Math.floor(Math.random() * 15)));
          break;
      }
      --size;
    }
    this.setState({ password: pass });
  }

  handleRangeChange(e) {
    this.setState({ passwordSize: e.target.value });
  }

  render() {

    return (
      <div className="PasswordGenerator">
        <div>
          <input className='input_genPass' type="text" value={this.state.password} />
          <div className='rangePassworSize' placeholder='teste'>
            <input type="range" value={this.state.passwordSize} min="4" max="12" onChange={this.handleRangeChange} />
            <div>{this.state.passwordSize}</div>
          </div>
          <button className='btn btn-genpass' onClick={() => this.genPass(this.state.passwordSize)}>Gen</button>
        </div>
      </div>
    )
  }
}

export default PasswordGenerator;