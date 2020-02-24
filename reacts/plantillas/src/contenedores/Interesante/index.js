import React from 'react';
import CosasInteresantes from './CosasInteresantes';
import InformacionGeneral from './InformacionGeneral';
import CaracteristicasEquipo from './CaracteristicasEquipo'; 
import EquipoDeProfesionales from './EquipoDeProfesionales'; 
import Tribia from './Tribia'; 
import UltimasNoticias from './UltimasNoticias'; 


const IndexInteresante = (props)=>{
	//console.log('Index.', props );
	const {match} = props;
	//console.log('IndexInters.', match.path );
	switch(match.path){
		case "/cosas_interesantes":
			return(<CosasInteresantes />);
		case "/informacion_general":
			return(<InformacionGeneral />);
		case "/caracteristicas_del_equipo":
			return(<CaracteristicasEquipo />);
		case "/equipo_de_profesionales":
			return(<EquipoDeProfesionales />);
		case "/tribia":
			return(<Tribia />);
		case "/ultimas_noticias":
			return(<UltimasNoticias />);
		default:
			return(<div>404</div>)
	}
}
export default IndexInteresante;
