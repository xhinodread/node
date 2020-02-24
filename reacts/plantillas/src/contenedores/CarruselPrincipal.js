import React, {useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import uno from "../assets/1.jpeg";
import dos from "../assets/2.jpeg";
import tres from "../assets/3.jpeg";

const {width, height} = window.screen

const CarruselPrincipal =()=>{


	useEffect(()=>{
		//console.log('width: ', width)
	}, [width])

	//console.log('width: ', width)
	if( width >= 500 && width <=900){
		return(<div className="text-center" >
					<img src={uno} width="32%" /><img src={dos} width="32%" /><img src={tres} width="32%" />
				</div>)
	}else{ 
	  return(
		<Carousel showStatus={false} showArrows={true} showThumbs={false} 
			autoPlay={true} infiniteLoop={true} 
		>
			 <div>
				  <img src={uno} />
				  <p className="legend">Legend 1</p>
			 </div>
			 <div>
				  <img src={dos} />
				  <p className="legend">Legend 2</p>
			 </div>
			 <div>
				  <img src={tres} />
				  <p className="legend">Legend 3</p>
			 </div>
		</Carousel>
  )
 }
}
export default CarruselPrincipal;
