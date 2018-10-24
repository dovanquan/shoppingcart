import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notify extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
          <div className="alert alert-success" role="alert" id="mnotification"><b>{this.props.notify}</b></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notify: state.notify
    }
}
export default connect(mapStateToProps, null)(Notify);
