import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  width: 70%;
  margin: 5px;
  border-radius: 12px;
  box-shadow: 0px 3px 6px #00000029;
  padding: 15px;
  position: fixe;
`;

class Centre extends Component {
  render() {
    const { children } = this.props;
    return <Wrapper>{children}</Wrapper>;
  }
}

export default Centre;
