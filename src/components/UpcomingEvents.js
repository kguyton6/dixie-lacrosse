import React, { Component } from 'react';
import styled from 'styled-components'

class UpcomingEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }
  
  render() { 
    return ( 
      <UpcomingContainer>
        <h2>Upcoming</h2>
      </UpcomingContainer>
     )
  }
}
 
export default UpcomingEvents;

const UpcomingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  width: 200px;
  height: 250px;
  border: 2px solid lightgray;
  margin: 10px;
  h2 {
    display: flex;
    color: grey;
    font-size: 24px;
    font-weight: bold;
    align-self: center;
    justify-self: flex-start;
  }
  @media (max-width: 800px) {

  }
  `