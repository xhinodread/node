import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../index.css";

class Event extends Component {
    state = {};
    render() {
      return "Schedule item";
    }
  }

class App extends Component {
    state = {};
    render() {
    return (
        <React.Fragment>
				    <MDBContainer>
				        <MDBRow>
				        <MDBCol lg="6">Left column</MDBCol>
				        <MDBCol lg="3">Right column</MDBCol>
				        </MDBRow>
				    </MDBContainer>
        </React.Fragment>
    );
    }
}
export default App;
