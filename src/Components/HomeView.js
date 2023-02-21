import React from 'react'


function HomeView() {


    const clickNews = (e)=>{
        window.scrollTo(0, 0);
        document.querySelector("#nav-news-tab").click()
    }
    const clickEmpresa = (e)=>{
        window.scrollTo(0, 0);
        document.querySelector("#nav-empresarios-tab").click()
    }
    const clickApp = (e)=>{
        window.scrollTo(0, 0);
        document.querySelector("#nav-app-tab").click()
    }


    return (
        <div className="">
            <div className="row d-flex align-items-center justify-content-start" id="hero-home" style={{height: "70vh"}} >
                {/* <img className='p-0 m-0' src={"./hero.png"} alt="" style={{ height: "60vh", objectFit: "cover" }} /> */}
                <div className="col-12 col-sm-7  my-auto ms-sm-5">
                    <p className="h3 fw-bold text-center text-sm-center ">
                        El <span className='h1 text-primary fw-bold'>Hackathon Creativika</span> es una herramienta para impulsar la innovación sostenida y las soluciones de crowdsourcing para abordar problemas comerciales y sociales apremiantes de la vida real.
                    </p>
                </div>
            </div>

            <div className="row d-flex align-items-center" style={{ height: "70vh" }} >
              
                <div className="col-12 p-4 pb-5 my-auto mx-auto border bg-primary rounded">
                    <p className='h3 text-light mb-5'>Objetivos del Hackathon</p>

                    <div className="row d-flex justify-content-evenly ">
                        <div className="col-sm-2 mb-3 col-6 p-3 text-center text-bg-light rounded d-flex flex-column align-items-center">
                            <span className='fs-1'><i className="fa-solid fa-people-group mb-4"></i></span>
                            <p className='m-0'>Obtener Soluciones vía Crowdsourcing</p>
                        </div>
                        <div className="col-sm-2 mb-3 col-6 p-3 text-center text-bg-light rounded d-flex flex-column align-items-center">
                            <span className='fs-1'><i className="fa-regular fa-lightbulb mb-4"></i></span>
                            <p className='m-0'>Impulsar la Innovación Sostenida</p>
                        </div>
                        <div className="col-sm-2 mb-3 col-6 p-3 text-center text-bg-light rounded d-flex flex-column align-items-center">
                            <span className='fs-1'><i className="fa-solid fa-building-user mb-4"></i></span>
                            <p className='m-0'>Promover el Enfoque Comercial y Social</p>
                        </div>
                        <div className="col-sm-2 mb-3 col-6 p-3 text-center text-bg-light rounded d-flex flex-column align-items-center">
                            <span className='fs-1'><i className="fa-solid fa-stopwatch mb-4"></i></span>
                            <p className='m-0'>Facilitar Soluciones Oportunas</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex border d-none d-sm-flex mb-5" style={{  }}>
                <div className="col-6">
                    <div className="row d-flex" >
                        <div className="col-6 p-0" >
                            <img className='img-fluid' style={{ width: "100%", height: "50vh", objectFit: "cover" }} src="./image 115.png" alt="" />
                        </div>
                        <div className="col-6 p-0">
                            <img className='img-fluid' style={{ width: "100%", height: "50vh", objectFit: "cover" }} src="./image 116.png" alt="" />
                        </div>
                        <div className="col-12 p-0">
                            <img className='img-fluid' style={{ width: "100%", height: "50vh", objectFit: "cover" }} src="./image 117.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row d-flex" >
                        <div className="col-12 p-0" >
                            <img className='img-fluid' style={{ width: "100%", height: "50vh", objectFit: "cover" }} src="./image 118.png" alt="" />
                        </div>
                        <div className="col-6 p-0">
                            <img className='img-fluid' style={{ width: "100%", height: "50vh", objectFit: "cover" }} src="./image 120.png" alt="" />
                        </div>
                        <div className="col-6 p-0">
                            <img className='img-fluid' style={{ width: "100%", height: "50vh", objectFit: "cover" }} src="./image 121.png" alt="" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="row d-flex align-items-center my-3"  style={{ height: "75vh" }}>
                <div className="col-12 d-flex flex-column mx-auto">
                    <div className="">
                        <p className="h2">Mecánica del Hackaton</p>
                    </div>
                    <div className="row my-sm-5 mb-3 d-flex justify-content-evenly text-center">
                        <div className="col-12 border my-3 p-3 text-bg-success rounded">
                            <span className='fs-1'><i className=" mb-4 fa-solid fa-building-circle-exclamation"></i></span>
                            <p className="m-0 ">Las empresas que necesitan soluciones convocan el Hackaton mediante la plataforma de Creativika.</p>
                        </div>
                        <div className="col-12 border my-3 p-3 text-bg-warning rounded">
                            <span className='fs-1'><i className=" mb-4 fa-solid fa-person-chalkboard"></i></span>
                            <p className="m-0 ">Los equipos retados generan soluciones innovadoras y las presentan mediante la plataforma de Creativika.</p>
                        </div>
                        <div className="col-12 border my-3 p-3 text-bg-danger rounded">
                            <span className='fs-1'><i className=" mb-4 fa-solid fa-trophy"></i></span>
                            <p className="m-0 ">El equipo con la mejor solución recibe el 1er Premio y el resto recibe un reconocimiento con valor curricular.</p>
                        </div>
                    </div>
                </div>

            </div>

            

            

            <div className="row  d-flex align-items-center mx-auto" style={{ height: "100vh" }}>
                <div className="row">
                    <div className="col-12">
                        <p className='h2 py-5  '>Preguntas Frecuentes</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        ¿Qué es el Hackaton Creativika?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="small">Un hackatón  es  un evento competitivo con límite de tiempo en el que los participantes (Retados) colaboran para crear pruebas de concepto y productos mínimos viables para un problema predefinido específico o para innovar.</p>
                                        <p className="small">Los retados ganan un diploma de participación por equipo, junto con un premio al primer lugar  y las empresas ganan soluciones innovadoras en un corto periodo de tiempo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        ¿Cómo puedo participar?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="small">
                                            <ul>
                                                <li className='mb-4'>
                                                <strong>Empresas Retadoras:</strong>
                                                    <ol>
                                                        <li>Enviar un correo expresando su intención de participar a <a href="mailto:ejemplo@dominio.com">esta dirección.</a></li>
                                                    </ol>
                                                </li>
                                                <li >
                                                    <strong>Retados:</strong>
                                                    <ol>
                                                        <li>Realizar su preregistro <span className='badge text-bg-primary' onClick={clickApp}>aquí.</span></li>
                                                        <li>
                                                            <p>Enviar un correo con  su  pago a la cuenta:</p>
                                                            <p className='m-0'>Pitufin</p>
                                                            <p className='m-0'>Banco del Pitufo Agronomo</p>
                                                            <p className='m-0'>CLABE 123123123123123123123</p>
                                                            <p className='mb-3'>Referencia: "nombre del equipo y reto"</p>
                                                        </li>
                                                        <li>Recibirás un correo de confirmación.</li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        ¿Cuál es el costo de inscripción?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <p className="small">El costo de inscripción  por equipo es de <strong><u>$280.00</u></strong> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                        ¿Necesito conocimientos previos?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="small"><strong>No.</strong> Puedes participar sin importar tu ocupación, oficio o profesión ni el nivel de conocimiento que tengas .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="accordion" id="accordionExample2">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                        ¿Quiénes pueden participar?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse " aria-labelledby="headingFive" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body">
                                        <p className="small">Cualquier persona mayor de edad o que cumpla los 18 años antes de que termine el año en curso.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        ¿Cuándo empieza el próximo Hackaton?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body">
                                        <p className="small">Publicamos todos los nuevos Hackathones en nuestra zona de <span className='badge text-bg-primary' onClick={clickNews}>últimas noticias.</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        ¿Cuánto dura el Hackaton?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body">
                                       <p className="small">La duración es de 4 semanas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Tengo más dudas...
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body">
                                       <p className="small">
                                        Contáctanos:
                                        <ul>
                                            <li><a href="tel:527772418380">7772418380</a></li>
                                            <li><a href="mailto:info@canacintramorelos.org">info@canacintramorelos.org</a></li>
                                        </ul>
                                       </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row p-4 my-5 d-flex justify-content-evenly align-items-center text-center rounded" style={{ height: "50vh" }}>
                
                    <p className="h2 m-0">¿Aceptas el reto?</p>
                
                <div className="col-12 col-md-6">
                    <i className="fa-solid fa-people-group fs-1 mb-3"></i>
                    <p className="h4 mb-4">Equipos Retados</p>
                    <button onClick={clickApp} className="btn btn-primary">Pre-Registro</button>
                </div>
                <div className="col-12 col-md-6">
                    <i className="fa-solid fa-building-user fs-1 mb-3"></i>
                    <p className="h4 mb-4">Empresas Retadoras</p>
                    <button onClick={clickEmpresa} className="btn btn-primary">Más Info.</button>
                </div>
            </div>

        </div>
    )
}

export default HomeView