import React, { Component } from "react";
import "./styles.css";

export class CartFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <hr />
        <div className="w-100">
          <div className="row pb-md-3 pb-3 justify-content-end">
            <div className="pr-3 pl-3 text-center border border-dark">
              <h5>TOTAL</h5>
            </div>
            <div className="pr-3 pl-3 text-center h-100 border border-dark">
              <h5>$60</h5>
            </div>
          </div>
          <div className="row pb-md-2 pb-3 justify-content-end">
            <button className="col-5 col-md-2 uk-button uk-button-default">
              <h5>CHECKOUT</h5>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
