import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import uno from "../assets/1.jpeg";
import dos from "../assets/2.jpeg";
import tres from "../assets/3.jpeg";

const Main = ()=>{


	return(
		<div className="container bg-primary" >
			<div className="row" >
				<div className="col-sm-12 col-md-12  bg-success" >
					<Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} >
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
				</div>
			</div>
			<div className="row" >
				<div className="col-sm-12 col-md-4" >
					left
				</div>
				<div className="col-sm-12 col-md-4" >
					Main
				</div>
				<div className="col-sm-12 col-md-4" >
					right
				</div>
			</div>
			<div className="row" >
				<div className="col-sm-12 col-md-12" >
					Pies
				</div>
			</div>
		</div>)
}
export default Main;
