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
      // console.log(cities);
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
      // console.log(homeTypes);
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
      // console.log(bedrooms);
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
            <h4>Filter listings</h4>
            <label className="selecta" htmlFor="city">City</label>
            <div className="selectdiv">
            <select
              name="city"
              className="filters city"
              onChange={this.props.change}
            >
              <option value="All">All</option>
              {this.cities()}
            </select>
            <label className="selecta" htmlFor="city">Home Type</label>

            <select
              name="homeType"
              className="neighbourhood"
              onChange={this.props.change}
            >
              <option value="All">All Homes</option>
              {this.homeTypes()}
            </select>
            <label className="selecta" htmlFor="city">Bedrooms</label>
            {" "}
            <select
              name="bedrooms"
              className="neighbourhood"
              onChange={this.props.change}
            >
              {this.bedrooms()}
            </select>
            </div>
            <div className="filters price">
              <span className="title">Price</span>
              <input
                type="text"
                name="min_price"
                className="min-price"
                onChange={this.props.change}
                value={this.props.globalState.min_price}
                placeholder="$ Minimum"
              />
              <input
                type="text"
                name="max_price"
                className="max-price"
                onChange={this.props.change}
                value={this.props.globalState.max_price}
                placeholder="$ Maximum"
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
