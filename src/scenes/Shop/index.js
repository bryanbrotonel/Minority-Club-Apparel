import React, { Component } from "react";
import Loadable from "react-loadable";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import Loading from "./../../components/Loading";
// import { ProductShop } from "./components/Product Shop";
// import { PasswordInput } from "./components/passwordInput";

import "./styles.css";
import { authValidate } from "../../helpers/dbHelpers";

const ComingSoon = Loadable({
  loader: () => import("../../components/ComingSoon"),
  loading: Loading
});

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validShopper: false,
      validPassword: true
    };

    this.signIn = this.signIn.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    document.title = "By Forte | Shop";

    const self = this;

    authValidate().then(function(result) {
      if (result) {
        self.setState({ validShopper: true });
      }
    });
  }

  // Get password callback function
  signIn(value) {
    // Validate
    const self = this;
    const shopEmail = "shop@byforte.store";

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        return firebase
          .auth()
          .signInWithEmailAndPassword(shopEmail, value)
          .then(function() {
            self.setState({ validShopper: true });
          });
      })
      .catch(function() {
        self.setState({
          validPassword: false
        });
      });
  }

  render() {
    const { validPassword, validShopper } = this.state;

    return (
      <ComingSoon
        bgImage="https://source.unsplash.com/7YwWjgS7aJs/1600x1024"
        text="Coming Soon"
      />
    );

    // return validShopper ? (
    //   <div className="container d-flex mt-5">
    //     <br />
    //     <ProductShop />
    //   </div>
    // ) : (
    //   <div className="container hv-center">
    //     <PasswordInput signIn={this.signIn} validPassword={validPassword} />
    //   </div>
    // );
  }
}
