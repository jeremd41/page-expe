import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 35px auto;
  border: 1px solid #70707069;

  img {
    width: 54px;
    height: 57px;
  }

  .top-back {
    height: 270px;

    h5 {
      font-size: 1.25rem;
      color: #fff;
      padding: 15px 0 0 15px;
    }
  }

  .card-bottom {
    display: flex;
    align-items: center;
    border-top: 1px solid #00000029;
    padding: 5px;
    background: #fff;
  }

  .info-bottom-card {
    h4 {
      font-weight: bold;
      font-size: 1em;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

class CardSideHome extends Component {
  render() {
    const style = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <Wrapper>
        <div className="top-back" style={style}>
          <h5>{this.props.title}</h5>
        </div>
        <div className="card-bottom">
          <img src={this.props.photo} alt="profile" />
          <div className="info-bottom-card">
            <h4>{this.props.user}</h4>
            <p className="info-date">{this.props.date}</p>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default CardSideHome;