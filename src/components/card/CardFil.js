import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 98%;
  margin: 35px auto;
  border: 1px solid #00000029;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #eef0fe;

  h4 {
    font-size: 1.25em;
  }

  info-hour {
    color: #969ca2;
    font-size: 0.25em;
  }

  img {
    width: 70px;
    height: 74px;
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
`;

class CardFil extends Component {
  render() {
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
      </Wrapper>
    );
  }
}

export default CardFil;
