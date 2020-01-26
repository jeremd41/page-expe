import React, { Component } from "react";
import styled from "styled-components";

const Bar = styled.div`
  height: 100px;
  width: 100%;
  position: fixe;
  top: 0;

  input{
   width: 60%;
   height: 44px;
   border: none;
   border-radius: 20px; 
   padding: 0 15px;
   margin: 20px;
   font-family: "Poppins";
   box-shadow: 0px 0px 10px #0000000F;
  }

  :active{
    border-radius: 20px;
  }
`;

class SearchBar extends Component {
  state={
    search:""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Bar>
        <input 
          type="search" 
          placeholder="Search" 
          name="search" 
          onChange={this.handleChange} 
          value={this.state.search}  
        />
      </Bar>
    );
  }
}

export default SearchBar;