import React from 'react';

const mensajesBannerBoton = "Hagamos un proyecto juntos.";
const mensajeEam = "EAM (Enegia-Aguas-Medioambiente)";
const mensajesBanner={
	banner1:{msg1:'Energia, aguas...', msg2: 'Soluciones ecólogicas para el mundo', 
								msg3:'Nuestra meta es reducir las fuentes de geneeracion de CO2. Con tu ayuda lo podemos hacer. Proyectos de energia y agua limpia. Crea el tuyo, nosotros te ayudamos.'},
	banner2:{msg1:'Energia...', msg2: 'Soluciones ecólogicas para generación de electricidad limpia', 
								msg3:'Micro centrales electricas. Mínimo impacto ambiental. Se adaptan al medio ambiente.'},
banner3:{msg1:'Aguas...', msg2: 'Soluciones ecólogicas para la generación de agua.', 
								msg3:'Convierte el agua salada en agua dulce, apovecha este proceso de limpieza de agua.'}
};

const urlImgBanner = {
	img1:"https://mdbootstrap.com/img/Photos/Others/images/93.jpg",
	img2: "https://mdbootstrap.com/img/Photos/Others/images/94.jpg",
	img3: "https://mdbootstrap.com/img/Photos/Others/images/92.jpg"
};

const BannerHome=()=>{

		return(
 <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
      <li data-target="#carousel-example-1z" data-slide-to="1"></li>
      <li data-target="#carousel-example-1z" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner" role="listbox">

      <div className="carousel-item active">
        <div className="view" style={{backgroundImage: "url('"+urlImgBanner.img1+"')", 
																												backgroundRepeat: "no-repeat", backgroundSize: "cover"}} 
				>
          <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div className="text-center white-text mx-5 wow fadeIn">
              <h1 className="mb-4"><strong>{mensajesBanner.banner1.msg1}</strong></h1>
              <p><strong>{mensajesBanner.banner1.msg2}</strong></p>
              <p className="mb-4 d-none d-md-block"><strong>{mensajesBanner.banner1.msg3}</strong></p>
              <a target="_blank" href="/" className="btn btn-outline-white btn-lg">
								{mensajesBannerBoton}
                <i className="fas fa-graduation-cap ml-2"></i>
              </a><p>{mensajeEam}</p>
            </div>
          </div>
       </div>
    </div>

		<div className="carousel-item">
       <div className="view" style={{backgroundImage: "url('"+urlImgBanner.img2+"')", 
																											backgroundRepeat: "no-repeat",  backgroundSize: "cover"}}  
			>
				<div className="mask rgba-black-light d-flex justify-content-center align-items-center">
          <div className="text-center white-text mx-5 wow fadeIn">
            <h1 className="mb-4"><strong>{mensajesBanner.banner2.msg1}</strong></h1>
            <p><strong>{mensajesBanner.banner2.msg2}</strong></p>
            <p className="mb-4 d-none d-md-block"><strong>{mensajesBanner.banner2.msg3}</strong></p>
            <a target="_blank" href="/" 	className="btn btn-outline-white btn-lg" >{mensajesBannerBoton}
              <i className="fas fa-graduation-cap ml-2"></i>
            </a><p>{mensajeEam}</p>
          </div>
         </div>
       </div>
      </div>

      <div className="carousel-item">
        <div className="view" style={{backgroundImage: "url('"+urlImgBanner.img3+"')", 
																												backgroundRepeat: "no-repeat", backgroundSize: "cover"}} 
				>
          <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div className="text-center white-text mx-5 wow fadeIn">
              <h1 className="mb-4"><strong>{mensajesBanner.banner3.msg1}</strong></h1>
              <p><strong>{mensajesBanner.banner3.msg2}</strong></p>

              <p className="mb-4 d-none d-md-block"><strong>{mensajesBanner.banner3.msg3}</strong></p>

              <a target="_blank" href="/" className="btn btn-outline-white btn-lg">{mensajesBannerBoton}
                	<i className="fas fa-graduation-cap ml-2"></i>
              </a><p>{mensajeEam}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>

  </div>
	)
}
export default BannerHome;
