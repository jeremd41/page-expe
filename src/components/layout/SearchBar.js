import React, { Component } from "react";
import styled from "styled-components";
import { Redirect, Link } from "react-router-dom";

import Create from "../../image/icone/createBtn.svg";
import Profile from "../../image/icone/profileBtn.svg";
import IconSearch from "../../image/icone/search.svg";

const Bar = styled.div`
  height: 100px;
  width: 100%;
  position: fixe;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;

  .bar {
    width: 60%;
    height: 100px;
    position: relative;

    img {
      position: absolute;
      margin-top: 30px;
      right: 0;
      top: 0;
    }
  }

  input {
    width: 100%;
    height: 44px;
    border: none;
    border-radius: 20px;
    display: block;
    padding: 0 15px;
    margin: 20px;
    font-family: "Poppins";
    box-shadow: 0px 3px 35px #00000021;
  }

  ul {
    display: flex;
    text-align: right;
    justify-content: flex-end;
    width: 40%;

    li {
      width: 20%;
    }
  }

  :active {
    border-radius: 20px;
  }
`;

class SearchBar extends Component {
  state = {
    search: "",
    actRedirect: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeydown = event => {
    if (event.key === "Enter") {
      this.setState({ actRedirect: true });
    }
  };

  render() {
    return (
      <Bar>
        <div className="bar">
          <input
            type="search"
            placeholder="Search"
            name="search"
            onChange={this.handleChange}
            onKeyPress={this.handleKeydown}
            value={this.state.search}
          />
          <img className="icone-search" src={IconSearch} alt="icone search" />
        </div>
        <ul>
          <li>
            <Link to="/">
              <img src={Create} alt="icone" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={Profile} alt="icone" />
            </Link>
          </li>
        </ul>

        {this.state.actRedirect ? (
          <Redirect push to={"/search/" + this.state.search} />
        ) : (
          ""
        )}
      </Bar>
    );
  }
}

export default SearchBar;
