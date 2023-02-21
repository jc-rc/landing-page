import React from 'react'

function EmpresariosView() {
  return (
    <div>
      <div className="row d-none d-sm-block mb-3" >
        <img className='p-0 m-0' src={"./hero2.png"} alt="" style={{ height: "60vh", objectFit: "cover" }} />
      </div>

      <div className="row p-1 p-sm-5 d-flex">
        <div className="col-12 mb-4">
          <p className='h1 m-0'>¿Necesitas una solución empresarial innovadora en un corto periodo de tiempo?</p>
          
        </div>

        <hr />
        
        <div className="col-12">
          <p className='h5'>¿Quiénes somos?</p>
          <p className='mb-5'>Un nodo de innovación para CANACINTRA, es un punto de unión y articulación entre los actores relevantes del ecosistema de innovación, que a su vez se articulan en una Red Nacional a través de un marco de colaboración creado para promover el desarrollo y crecimiento del sector industrial con una nueva lógica de creación de valor y desarrollo sostenible.</p>
          <p className='h5'>¿Qué es un Hackathon y qué puede ofrecer a mi empresa?</p>
          <p>Un hackatón  es  un evento competitivo con límite de tiempo en el que los participantes (Retados) colaboran para ofrecer <strong>pruebas de concepto</strong> y <strong>productos mínimos viables</strong> para solucionar un problema específico o para innovar. Los retados ganan un diploma de participación por equipo, así como un premio al primer lugar; y las empresas obtienen soluciones innovadoras en un corto periodo de tiempo.</p>
          <p className='lead my-5'>¿Estás interesado en realizar un Hackathon para tu empresa? </p>
          <p className='h5'>Contáctanos</p>
          <p>Av. Palmas Nte. 125, Bellavista, 62140 Cuernavaca, Mor.</p>
          <p><a href="tel:+527772418380"><i className="fa-solid fa-phone"></i> +52 777 241 8380</a></p>
          <p><a href="mailto:info@canacintramorelos.org.mx"><i className="fa-solid fa-envelope"></i> info@canacintramorelos.org.mx</a></p>
        </div>
      </div>

      <div className="row">
      <img className='p-0 m-0' src={"./image 120.png"} alt="" style={{ height: "55vh", objectFit: "cover" }} />
      </div>

    </div>
  )
}

export default EmpresariosView