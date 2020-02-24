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
			<MDBRow>
					<MDBCol md="9">
						  <Event/>
						  <Event/>
					</MDBCol>
					<MDBCol md="3" />
			</MDBRow>
   );
 }
}
export default App;
