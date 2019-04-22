import React, { Component } from "react";
import listingsData from "./listingsData";
// import _ from "lodash";
import Pagination from "./Pagination";

class Listings extends Component {
  constructor() {
    super();
    let exampleItems = [...Array(30).keys()].map(i => ({
      id: i + 1,
      name: "Item " + (i + 1)
    }));
    this.state = {
      listingsData,
      exampleItems: exampleItems,
      pageOfItems: []
    };
    this.looplistings = this.looplistings.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  looplistings() {
    const { listingsData } = this.props;

    if (listingsData === undefined || listingsData.length === 0) {
      return "Sorry your filter did not match any listing";
    }

    return listingsData.map((listing, index) => {
      if (this.props.globalState.view === "box") {
        //Box view
        return (
          <div key={index} className="col-md-3">
              <div className="listing">
                <div
                  className="listing-img"
                  style={{
                    backgroundImage: `url("${listing.img}")`,
                    backgroundRepeat: `no repeat`,
                    backgroundPosition: `center center`
                  }}
                >
                  <span className="address">{listing.address}</span>
                  <div className="details">
                    <div style={{width: "95%"}} className="col-md-9">
                      <div className="user-img" />
                      <div className="user-details">
                        <span className="user-name">{listing.name}</span>
                        <span className="post-date">{listing.date}</span>
                      </div>
                      <div className="listing-details">
                        <div className="floor-space">
                          <i className="far fa-square" aria-hidden="true" />{" "}
                          <span>{listing.floorSpace} ft&sup2;</span>
                        </div>
                        <div className="bedrooms">
                          <i className="fas fa-bed" aria-hidden="true" />{" "}
                          <span>{listing.rooms} bedrooms</span>
                        </div>
                      </div>
                      <div className="view-btn">View Listing</div>
                    </div>
                  </div>
                </div>
                <div className="bottom-info">
                  <span className="price">{listing.price}</span>
                  <span className="location">
                    <i className="fas fa-map-marker-alt" naria-hidden="true" />{" "}
                    {listing.province}, {listing.city}
                  </span>
                </div>
              </div>
          </div>
        );
      } else {
        // Long view
        return (
          <div key={index} className="col-md-12 col-lg-6">
            <div className="listing">
              <div
                className="listing-img"
                style={{
                  backgroundImage: `url("${listing.img}")`,
                  backgroundRepeat: `no repeat`,
                  backgroundPosition: `center center`
                }}
              >
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="col-md-9">
                    <div className="user-img" />
                    <div className="user-details">
                      <span className="user-name">{listing.name}</span>
                      <span className="post-date">{listing.date}</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="far fa-square" aria-hidden="true" />{" "}
                        <span> {listing.floorSpace} ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fas fa-bed" aria-hidden="true" />{" "}
                        <span>{listing.rooms} bedrooms</span>
                      </div>
                    </div>
                    <div className="view-btn">View Listing</div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">{listing.price}</span>
                <span className="location">
                  <i className="fas fa-map-marker-alt" naria-hidden="true" />{" "}
                  {listing.province}, {listing.city}
                </span>
              </div>
            </div>
          </div>
        );
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <section id="listings">
          <section className="search-area">
            <input
              placeholder="Search by city"
              type="text"
              name="search"
              onChange={this.props.change}
            />
          </section>
          <section className="sortby-area">
            <div className="results">
              {this.props.globalState.filteredData.length} results found
            </div>
            <div className="sort-options">
              <select name="sortby" id="" onChange={this.props.change}>
                <option value="price-dsc">Lowest Price</option>
                <option value="price-asc">Highest Price</option>
              </select>
              <div className="view">
                <i
                  className="fa fa-th"
                  aria-hidden="true"
                  onClick={this.props.changeView.bind(null, "box")}
                />
                <i
                  className="fa fa-th-list"
                  aria-hidden="true"
                  onClick={this.props.changeView.bind(null, "long")}
                />
              </div>
            </div>
          </section>
          <section className="listings-results">
            <div className="row">{this.looplistings()}</div>
          </section>
          {/* <section id="pagination">
            <div className="row">
              <ul className="pages">
                <li>Previous</li>
                <li className="active page-number">1</li>
                <li className="page-number">2</li>
                <li className="page-number">3</li>
                <li className="page-number">4</li>
                <li className="page-number">5</li>
                <li>Next</li>
              </ul>{" "}
            </div>
          </section> */}
          <Pagination
            items={this.state.exampleItems}
            onChangePage={this.onChangePage}
          />
        </section>
      </React.Fragment>
    );
  }
}

export default Listings;
