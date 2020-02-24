import React from 'react';

const Section00=()=>{


		return(
		<section className="mt-5 wow fadeIn">
				<div className="row">
					<div className="col-md-6 mb-4">
							<img src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg" 
									className="img-fluid z-depth-1-half" alt="" 
							/>
					</div> 
					<div className="col-md-6 mb-4">
						<h3 className="h3 mb-3">Material Design for Bootstrap</h3>
						<p>This template is created with Material Design for Bootstrap (<strong>MDB</strong> ) framework.</p>
						<p>Read details below to learn more about MDB.</p>
						<hr/>
						<p>
							<strong>400+</strong> material UI elements,
							<strong>600+</strong> material icons,
							<strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
							<strong>Free for personal and commercial use.</strong>
						</p>
						<a target="_blank" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" 
								className="btn btn-indigo btn-md"
						>
								Download
								<i className="fas fa-download ml-1"></i>
						</a>
						<a target="_blank" href="https://mdbootstrap.com/docs/jquery/components/" 
								className="btn btn-indigo btn-md"
						>
								Live demo
								<i className="far fa-image ml-1"></i>
						</a>
					</div>
				</div>
		</section>
		)
}
export default Section00;
