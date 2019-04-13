import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="logo">Logo</div>
          <nav>
            <a href="#">Create Ads</a>
            <a href="#">About Us</a>
            <a href="#">Log in</a>
            <a href="#" className="register-btn">
              Register
            </a>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
