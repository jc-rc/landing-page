import React from 'react'

function AppView() {
  return (
    <div className='row mx-auto'>
      <div className="col-12 d-flex flex-column align-items-center justify-content-center p-3" id='hero-app' style={{
        height: "50vh",
        backgroundColor: "white"
      }}>
        <p className='h2 text-light mb-4'>Bienvenido a Creativika</p>
        <a href='https://creativika-test.surge.sh/' className='btn btn-primary'>Ir a la Plataforma</a>
      </div>
    </div>
  )
}

export default AppView