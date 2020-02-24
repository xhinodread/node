import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../index.css";

const rutaApiInternet = 'http://applistado.000webhostapp.com/source/lectorD.php';

class Event extends Component {
    state = {};
    render() {
      return "Schedule item";
    }
  }

const Yo = (props)=>{
	const {respuesta} = props;
	console.log('YO: ', respuesta);
 
	if(respuesta){
		const impresion = respuesta.map((valor, key )=>{
			//console.log('impresion: ', valor);
			return<img  key={key} src={valor.nombre} width='150' height='150'  />
		});
		return impresion;
  }
	return(<div>YO YO</div>);
}

class App extends Component {
    state = {};

			/***async function API() {
				return fetch(rutaApiInternet);
			}****/
	
		_cambiarStado= async ()=>{
				//alert('_cambiarStado');
			try{
				const llamada = await fetch(rutaApiInternet);
				const respuesta = await llamada.json();
				//console.log('respuesta: \n ',  respuesta);
				this.setState({respuesta})
			}catch(error){
				alert('error');
				console.log('Error fetch:', error)
			}
			
		}

    render() {
				//console.log('estado: ',  this.state );
				return (
				    <React.Fragment>
								<MDBContainer>
										<MDBRow>
												<MDBCol lg="12" style={{color: 'blue', textAlign:'center'}}>VISOR DE FOTOS</MDBCol>
								    </MDBRow>
										<MDBRow>
												<MDBCol lg="12" style={{color: 'blue', textAlign:'center'}}>fetch de api a json PHP <br/>  integración con reactNative</MDBCol>
								    </MDBRow>
								    <MDBRow>
												<MDBCol lg="9">
															{Yo(this.state)}
												</MDBCol>
												<MDBCol lg="3"><button  onClick={this._cambiarStado}  >Traer</button></MDBCol>
								    </MDBRow>
								</MDBContainer>
				    </React.Fragment>
				);
    }
}
export default App;
