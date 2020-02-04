import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  width: 70%;
  margin: 5px;
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
