import React from 'react';

const Section01=()=>{

		return(
		<section>
				<h3 className="h3 text-center mb-5">About MDB</h3>
				<div className="row wow fadeIn">

					<div className="col-lg-6 col-md-12 px-4">				  
							<div className="row">
								<div className="col-1 mr-3">
									<i className="fas fa-code fa-2x indigo-text"></i>
								</div>
								<div className="col-10">
									<h5 className="feature-title">Bootstrap 4</h5>
									<p className="grey-text">Thanks to MDB you can take advantage of all feature of newest Bootstrap 4.</p>
								</div>
							</div>
							<div style={{height:"30px"}} ></div>
							<div className="row">
								<div className="col-1 mr-3">
									<i className="fas fa-book fa-2x blue-text"></i>
								</div>
								<div className="col-10">
									<h5 className="feature-title">Detailed documentation</h5>
									<p className="grey-text">
											We give you detailed user-friendly documentation at your disposal. It will help you to implement your 
											ideas easily.
									</p>
								</div>
							</div>
							<div style={{height:"30px"}} ></div>
							<div className="row">
									<div className="col-1 mr-3">
											<i className="fas fa-graduation-cap fa-2x cyan-text"></i>
									</div>
									<div className="col-10">
											<h5 className="feature-title">Lots of tutorials</h5>
											<p className="grey-text">
												We care about the development of our users. We have prepared numerous tutorials, 
												which allow you to learn how to use MDB as well as other technologies.
											</p>
									</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<p className="h5 text-center mb-4">Watch our "5 min Quick Start" tutorial</p>
							<div className="embed-responsive embed-responsive-16by9">
								<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cXTThxoywNQ"
								 allowfullscreen></iframe>
							</div>
						</div>

				</div>
		</section>
		)
}
export default Section01;
