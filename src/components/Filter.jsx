import React, { Component } from "react";

class Filter extends Component {
  constructor() {
    super();
    this.state = {};
    this.cities = this.cities.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }
  componentWillMount() {
    this.props.populateAction();
  }
  cities() {
    if (this.props.globalState.populateFormsData.cities !== undefined) {
      const { cities } = this.props.globalState.populateFormsData;
      console.log(cities);
      return cities.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  homeTypes() {
    if (this.props.globalState.populateFormsData.homeTypes !== undefined) {
      const { homeTypes } = this.props.globalState.populateFormsData;
      console.log(homeTypes);
      return homeTypes.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms !== undefined) {
      const { bedrooms } = this.props.globalState.populateFormsData;
      console.log(bedrooms);
      return bedrooms.map(item => {
        return (
          <option key={item} value={item}>
            {item}+ BR
          </option>
        );
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <section id="filter">
          <div className="inside">
            <h4>Filter</h4>
            <label htmlFor="city">City</label>
            <select
              name="city"
              className="filters city"
              onChange={this.props.change}
            >
              <option value="All">All</option>
              {this.cities()}
            </select>
            <label htmlFor="city">Home Type</label>

            <select
              name="homeType"
              className="neighbourhood"
              onChange={this.props.change}
            >
              <option value="All">All Homes</option>
              {this.homeTypes()}
              {/*<option value="Studio">Studio</option>
              <option value="Condo">Condo</option>
              <option value="Apartment">Apartment</option>
              <option value="Loft">Loft</option>
              <option value="House">House</option>
              <option value="Ranch">Ranch</option> */}
            </select>
            <label htmlFor="city">Bedrooms</label>
            <select
              name="bedrooms"
              className="neighbourhood"
              onChange={this.props.change}
            >
              {this.bedrooms()}
              {/* <option value="0">0+ BR</option>
              <option value="1">1+ BR</option>
              <option value="2">2+ BR</option>
              <option value="3">3+ BR</option>
              <option value="4">4+ BR</option> */}
            </select>
            <div className="filters price">
              <span className="title">Price</span>
              <input
                type="text"
                name="min_price"
                className="min-price"
                onChange={this.props.change}
                value={this.props.globalState.min_price}
              />
              <input
                type="text"
                name="max_price"
                className="max-price"
                onChange={this.props.change}
                value={this.props.globalState.max_price}
              />
            </div>
            <div className="filters floor-space">
              <span className="title">Floor Space</span>
              <input
                type="text"
                name="min_floor_space"
                className="min-floor-space"
                onChange={this.props.change}
                value={this.props.globalState.min_floor_space}
              />
              <input
                type="text"
                name="max_floor_space"
                className="max-floor-space"
                onChange={this.props.change}
                value={this.props.globalState.max_floor_space}
              />
            </div>
            <div className="filters extras">
              <span className="title">Extras</span>
              <label htmlFor="extras">
                <span>Elevators</span>
                <input
                  name="elevator"
                  type="checkbox"
                  value="elevator"
                  onChange={this.props.change}
                />
              </label>
              <label htmlFor="extras">
                <span>Swimming Pool</span>
                <input
                  name="swimming_pool"
                  type="checkbox"
                  value="swimming_pool"
                  onChange={this.props.change}
                />
              </label>
              <label htmlFor="extras">
                <span>Finished Basement</span>
                <input
                  name="finished_basement"
                  type="checkbox"
                  value="finished_basement"
                  onChange={this.props.change}
                />
              </label>
              <label htmlFor="extras">
                <span>Gym</span>
                <input
                  name="gym"
                  type="checkbox"
                  value="gym"
                  onChange={this.props.change}
                />
              </label>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Filter;
