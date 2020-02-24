import React, {useState} from 'react';

const Email=()=>{
	const [feedback, setFeedback] = useState('');
	const [name, setName] = useState('nombre usuario');
	const [email, setEmail] = useState('kaynadread@gmail.com');
  const handleChange=(obj)=> { setFeedback(obj.value); }
	const fecha = new Date(); 
  const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul",  "Ago", "Sep",  "Oct",  "Nov", "Di	c"];
	const fechaContacto = meses[fecha.getUTCMonth()]+' '+fecha.getDate()+', '+fecha.getFullYear();

	const handleSubmit= (event)=> {
		const templateId = 'template_MQH2Arrw';
		////console.log('handleSubmit');
		const datosCorreo = {
				reply_to: email,
				from_name: name,
				to_name:'AdminWeb', 
				message_html: feedback
		};
		sendFeedback(templateId, datosCorreo);
	}

  const sendFeedback= (templateId, variables)=> {
		////console.log('sendFeedback: ', variables);
		const service_id = "default_service"; // "gmailchileregion";
		if(1){
		window.emailjs.send(service_id, templateId,	variables	)
		.then(res => {
		  	console.log('Email successfully sent!')
				console.log('________!', res);
				console.log('SUCCESS!', res.status, res.text);
			})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
		}
  }

	return (
  	<form className="test-mailing">
    	<h2>ENVIANOS UN EMAIL</h2>
			<h5>Contacto, {fechaContacto}</h5>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={(e)=>handleChange(e.target) }
        	placeholder="Post some lorem ipsum here"
        	required
        	value={feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
			<button type="button" className="bnt btn-info bouton-image emailBouton" 
					style={{marginLeft:'10px'}}  onClick={()=>handleSubmit()} 
			>
				Enviar
			</button>
  	</form>
	)
}
export default Email;
