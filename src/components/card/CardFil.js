import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import Ellipsis from "../../image/icone/ellipsis.js";
import DownContent from "../dropdown/DownContent.js";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 98%;
  margin: 35px auto;
  border: 1px solid #00000029;
  box-shadow: 0px 3px 6px #00000029;
  position: relative;
  display: flex;
  z-index: 0;
  flex-direction: column;
  justify-content: space-between;
  background: #eef0fe;

  h4 {
    font-size: 1em;
  }

  info-hour {
    color: #969ca2;
    font-size: 5px;
  }

  img {
    width: 54px;
    height: 54px;
  }

  .top-card {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #00000029;
    padding: 5px;
    background: #fff;
  }

  .info-top-card {
    margin: 0 0 0 15px;
  }

  .card-content {
    padding: 15px;
  }

  .card-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
      padding: 15px;
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: 25px 25px 0 0;
    cursor: pointer;

    :hover {
      color: #59ddff;
    }
  }
`;

class CardFil extends Component {
  state = {
    downcontent: false
  };

  handleShow = () => {
    this.setState({ downcontent: !this.state.downcontent });
  };

  render() {
    const afficherDownContent = this.state.downcontent;
    let dropdownContent;

    if (afficherDownContent) {
      dropdownContent = <DownContent cache={this.handleClick} />;
    }
    return (
      <Wrapper>
        <div className="top-card">
          <img src={this.props.photo} alt="profile" />
          <div className="info-top-card">
            <h4>{this.props.user}</h4>
            <p className="info-hour">Il y a {this.props.hour} heures</p>
          </div>
        </div>
        <p className="card-content">{this.props.content}</p>
        <div className="card-btn">
          <p>Promote</p>
          <p>React</p>
        </div>
        <div className="btn-content" onClick={this.handleShow}>
          <Ellipsis />
        </div>
        {dropdownContent}
      </Wrapper>
    );
  }
}

export default CardFil;
