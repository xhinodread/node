import React from 'react';

const Piez=()=>{

	return(
			<footer className="page-footer text-center font-small mt-4 wow fadeIn">

				<div className="pt-4">
				  <a className="btn btn-outline-white" href="/" role="button">CONTACTO
				    <i className="fas fa-download ml-2"></i>
				  </a>
				  <a className="btn btn-outline-white" href="/" role="button">Hagamos un proyecto juntos
				    <i className="fas fa-graduation-cap ml-2"></i>
				  </a>
					<a className="btn btn-outline-white" href="https://abimarcl.wordpress.com/blog/"  target="_blank"
							role="button" >Proyectos Abimar <i className="fab fa-github mr-2"></i>
          </a>
				</div>

				<hr className="my-4" />

				<div className="pb-4">
				  <a href="/" target="_blank">
				    <i className="fab fa-facebook-f mr-3"></i>
				  </a>

				  <a href="/" target="_blank">
				    <i className="fab fa-twitter mr-3"></i>
				  </a>

				  <a href="/" target="_blank">
				    <i className="fab fa-youtube mr-3"></i>
				  </a>

				  <a href="/" target="_blank">
				    <i className="fab fa-google-plus-g mr-3"></i>
				  </a>

				  <a href="/" target="_blank">
				    <i className="fab fa-dribbble mr-3"></i>
				  </a>

				  <a href="/" target="_blank">
				    <i className="fab fa-pinterest mr-3"></i>
				  </a>

				  <a href="/" target="_blank">
				    <i className="fab fa-github mr-3"></i>
				  </a>

				  <a href="" target="_blank">
				    <i className="fab fa-codepen mr-3"></i>
				  </a>
				</div>

				<div className="footer-copyright py-3">
				  © {(new Date()).getFullYear().toString()} Copyright:
				  <p>ChileRegion</p>
				</div>
  	</footer>
	)
}
export default Piez; 
