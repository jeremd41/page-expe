import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Nav = styled.div`
  margin: 0 5px;
  width: 18%;
  height: 100vh;
  background: #8c8c8c0d;
  position: fixe;
  left: 0;

  a {
  }

  h1 {
    margin: 50px 0 0 25px;
  }

  span {
    color: #fff;
    background: #000;
    border-radius: 3px;
    margin: 0 1px;
    padding: 3px;
  }

  .X {
    margin-left: 15px;
  }

  ul {
    margin: 138px 0 0 25px;
  }

  li {
    font: bold 25px Poppins;
    text-align: left;
    margin: 25px 0;

    a:hover {
      color: #23d3ff;
    }
  }
`;

class SideNav extends Component {
  render() {
    return (
      <Nav>
        <h1>
          <Link to="/home/">
            <span>P</span>
            <span>A</span>
            <span>G</span>
            <span>E</span>
            <span className="X">X</span>
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/home/">Home</Link>
          </li>
          <li>
            <Link to="/journals/">Journals</Link>
          </li>
          <li>
            <Link to="/home/">Notifications</Link>
          </li>
        </ul>
      </Nav>
    );
  }
}

export default SideNav;
