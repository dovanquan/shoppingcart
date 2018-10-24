import React, { Component } from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
      return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary"> 
            <div className="panel-heading"><h1 className="panel-title">List Products</h1></div>
            <div className="panel-body" id="list-product">
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }
}

export default ProductList;
