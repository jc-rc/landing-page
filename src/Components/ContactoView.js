import React from 'react'

function ContactoView() {
  return (
    <div className='row px-3 d-flex align-items-center justify-content-center'>
      <div className="col-12 mb-4">
        <p className="h2 mb-4">Contacto</p>
        <p className="m-0">En Creativika  queremos escuchar y saber de ti. Es por lo que ponemos a tu disposición nuestros números telefónicos, correos electrónicos y oficinas, mediante los cuales te atenderemos de una manera oportuna y personalizada.
        </p>
      </div>
      <div className="col-12 col-sm-6 mb-4">
        <p className='mb-2'><a href="tel:++527772418380"><i className="fa-solid fa-phone"></i> +527772418380</a></p>
        <p className='mb-2'><a href="tel:++527772418380"><i className="fa-brands fa-whatsapp"></i> +527772418380</a></p>
        <p className='mb-2'><a href="mailto:hola@creativika.com.mx"><i className="fa-solid fa-envelope"></i> hola@creativika.com.mx</a></p>
      </div>
      <div className="col-12 col-sm-6 mb-4">
      <div style={{overflow:"hidden", resize:"none" ,maxWidth:"100%", width:"100%", height:"25vh"}}><div id="embed-map-canvas" style={{height:"100%", width:"100%", maxWidth:"100%"}}><iframe title='mapa' style={{height:"100%", width:"100%", border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Canacintra,+Avenida+Palmas+Norte,+Bellavista,+Cuernavaca,+Morelos,+Mexico&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a className="google-maps-html" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="make-map-infor-mation">premium bootstrap themes</a></div>
      </div>
    </div>
  )
}

export default ContactoView