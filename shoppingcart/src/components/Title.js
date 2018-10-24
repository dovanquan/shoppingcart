import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
          <div className="container">
            <div className="page-header">
              <h1>Project 02 - Shopping Cart <small>ReactJS</small></h1>
            </div>
          </div>
        );
    }
}

export default Title;
