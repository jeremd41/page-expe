import React, { Component } from "react";
import styled from "styled-components";

const SideContent = styled.div`
  background: #fff;
  width: 30%;
  margin: 5px;
  border-radius: 12px;
  box-shadow: 0px 3px 6px #00000029;
  padding-top: 15px;
`;

class Side extends Component {
  render() {
    const { children } = this.props;
    return <SideContent>{children}</SideContent>;
  }
}

export default Side;
