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
          <div className="logo">
            <i className="far fa-building" /> Property<span>Klub</span>
          </div>
          <nav>
            <a href="#">Create Ads</a>
            <a href="#">About Us</a>
            <a href="#">Log in</a>
            <a href="#" className="register-btn">
              Register <i className="fas fa-arrow-circle-right" />
            </a>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
