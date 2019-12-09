import React, { Component } from "react";
import "./App.css";
import axios from "axios"; //  for performing HTTP requests
import moment from "moment"; // for formatting dates
import classnames from "classnames"; // for conditionally joining class names together.

export default class App extends Component {
  state = {
    // initail stage
    topImages: [],

    // search
    search: "",

    // toggle
    toogleEnable: false,

    // card view
    cardView: true
  };

  componentDidMount = () => {
    // get images which are under top, week and time from imgur
    axios
      .get(`https://api.imgur.com/3/gallery/top/time/week`, {
        headers: { Authorization: "Client-ID 18eef0ce23381ff" }
      })
      .then(imageList => {
        this.setState({
          topImages: imageList.data.data
        });
      })
      .catch(err => console.log(err));
  };

  // get search input value
  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  // handle toggle state
  handleToggle = () => {
    this.setState({ toogleEnable: !this.state.toogleEnable });
  };

  // handle card view state
  handleCardView = () => {
    this.setState({ cardView: true, tableView: false });
  };

  // handle table view state
  handleTableView = () => {
    this.setState({ cardView: false, tableView: true });
  };

  render() {
    // get only images from the topImages array
    let filterOnlyImages = this.state.topImages.filter(images => {
      return images.images && images.images[0].type === "image/jpeg";
    });

    // sort results by latest images first.
    let sortByTime = filterOnlyImages.sort((a, b) => {
      return b.datetime - a.datetime;
    });

    // search images
    let filterSearchTopImages = sortByTime.filter(images => {
      return (
        images.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });

    // filter results by sum of “points”, “score” and “topic_id” adds up to an even number
    let filterToggleTopImages = filterSearchTopImages;

    if (this.state.toogleEnable === true) {
      filterToggleTopImages = filterToggleTopImages.filter(images => {
        return (images.score + images.points + images.topic_id) % 2 === 0;
      });
    }

    return (
      <div className="container-fluid p-0">
        {/* starts of page head sec */}
        <div className="row m-0 page-head">
          <div className="col">
            <h1 className="page-title">
              Top Images of The Week From <b className="text-dark">Imgur</b>{" "}
              Gallery
            </h1>
            <div className="search-bar">
              <input
                className="search-input"
                type="text"
                placeholder="Search..."
                value={this.state.search}
                onChange={this.handleSearch}
              />
              <span className="search-btn">
                <i className="fab fa-sistrix"></i>
              </span>
            </div>
          </div>
        </div>
        {/* ends of page head sec */}
        {/* starts of content */}
        <div className="customize-container p-0">
          {/* starts of filter button section */}
          <div className="row m-0">
            <div className="col p-0">
              <button
                className={classnames("action-btns mr-md-3", {
                  "action-btns-active": this.state.toogleEnable
                })}
                onClick={this.handleToggle}
                type="button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="This is a toggle button that filter results where the sum of “points”, “score” and “topic_id” adds up to an even number or not."
              >
                <i className="fas fa-filter"></i>
              </button>
              <button
                className={classnames("action-btns", {
                  "action-btns-active": !this.state.cardView
                })}
                onClick={this.handleTableView}
                type="button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Display results in a table."
              >
                <i className="fas fa-list"></i>
              </button>
              <button
                className={classnames("action-btns", {
                  "action-btns-active": this.state.cardView
                })}
                onClick={this.handleCardView}
                type="button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Display results by cards."
              >
                <i className="fa fa-th"></i>
              </button>
            </div>
          </div>
          {/* ends of filter button section */}
          {/* starts of desplaying no of results */}
          <div className="row m-0">
            <div className="col p-0">
              <p className="noOfResults">
                <b>{filterToggleTopImages.length} results</b>
              </p>
            </div>
          </div>
          {/* ends of desplaying no of results */}

          <div className="row m-0">
            <div className="col p-0">
              {/* starts of displaying data in a table or by cards */}
              {!this.state.cardView ? (
                <div className="table-responsive px-3">
                  <table className="table table-bordered table-hover mt-3">
                    <thead>
                      <tr className="table-header-row">
                        <td className="table-title-col">Title</td>
                        <td className="table-date-col">Date</td>
                        <td className="table-img-count-col">
                          No. of Additional Images
                        </td>
                        <td className="table-image-col">Image</td>
                      </tr>
                    </thead>
                    <tbody>
                      {filterToggleTopImages.map((images, i) => (
                        <tr key={i}>
                          <td className="table-title">{images.title}</td>
                          <td className="table-date">
                            {moment
                              .unix(images.datetime)
                              .format("DD/MM/YYYY HH:mm a")}
                          </td>
                          <td className="table-count-images">
                            {images.images_count - 1 !== 0
                              ? images.images_count - 1
                              : "-"}
                          </td>
                          <td>
                            <img
                              src={images.images && images.images[0].link}
                              className="table-images"
                              alt={images.title}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                filterToggleTopImages.map((images, i) => (
                  <div key={i} className="card">
                    <div className="card-image-div">
                      <img
                        src={images.images && images.images[0].link}
                        className="card-images"
                        alt={images.title}
                      />
                    </div>

                    <p className="image-count">
                      {images.images_count - 1 !== 0
                        ? images.images_count - 1
                        : "No"}{" "}
                      additional images
                    </p>
                    <p className="title">{images.title}</p>
                    <p className="time">
                      {moment
                        .unix(images.datetime)
                        .format("DD/MM/YYYY HH:mm a")}
                    </p>
                  </div>
                ))
              )}
            </div>
            {/* ends of displaying data in a table or by cards */}
          </div>
        </div>

        {/* starts of footer sec */}
        <div
          className="row m-0 mt-5"
          style={{ background: "#17252a", fontSize: "14px", cursor: "default" }}
        >
          <div className="col">
            <p className="text-light text-center mt-3">
              Spritzer Labs - Assessment (Front-end Development - React) by
              Chamara Madhushanka
            </p>
          </div>
        </div>
        {/* ends of footer sec */}
      </div>
    );
  }
}
