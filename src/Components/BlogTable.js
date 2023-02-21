import React, { useState, useEffect } from 'react'


function BlogTable(props) {

    const [data, setData] = useState([ ])
    const [detail, setDetail] = useState({})

    useEffect(() => {
      //Cargar BLOG
        fetch("https://us-central1.gcp.data.mongodb-api.com/app/creativika-socba/endpoint/getBLOG")
        .then(response => response.json())
        .then(response => setData(response))
      
    }, [props])

    

    const handleDetail = (post)=>{
        
        setDetail(post)
    }
    


    return (
        <div className=""> 
            <div className="col-12 d-flex justify-content-between mb-4">
                <p className="h2">Últimas Noticias</p> 
            </div>

            <div className="row d-flex">


                {
                    data.map((post, key) => {

                        let imageURL = ""
                        post.url === "" ? imageURL = "./logo-ctvka.png" : imageURL = post.url

                        return (
                            < div className="col-12 col-md-4 mb-3 " key={key}>
                                <div className="card">
                                    
                                    <img src={imageURL} style={{ height: 250, width: "auto", objectFit: "cover" }} alt="" className="card-img-top" loading='lazy'/>
                                    <div className="card-body">
                                        <p className="h5 card-title mb-0">{post.título}</p>
                                        <p className="small fst-italic mb-0">Autor: {post.autor} </p>
                                        <span className="badge text-bg-warning mb-3">{new Date(post.fecha).toLocaleString().slice(0, -10)}</span>
                                        <p className="card-text small truncado">{post.contenido}</p>
                                        <button className='btn btn-sm btn-primary p-1'   data-bs-toggle="modal" data-bs-target="#modal-detalle-blog" onClick={()=>handleDetail(post)}>Ver más...</button>
                                    </div>
                                    
                                </div>

                            </div>
                        )
                    })

                }


            </div>

          
            {/* MODAL DETALLE BLOG POST */}
            { detail &&  <div className="modal  fade" id="modal-detalle-blog" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                      <div className="modal-header">
                          <p className="modal-title h3" id="staticBackdropLabel">{detail.título}</p>
                          <button type="button" className="btn-close cerrar-modal-calendar-detalle" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <div className="row">
                            <div className="col-12 card border-0">
                                <img src={detail.url ||  "./logo-ctvka.png"} style={{ height:200, width: "100%", objectFit: "cover" }} alt="" className='card-img-top' loading='lazy'/>
                                <div className="card-body">
                                    
                                    <p className="small fst-italic mb-0">Autor: {detail.autor} </p>
                                    <span className="badge text-bg-warning mb-3">{new Date(detail.fecha).toLocaleString().slice(0, -10)}</span>
                                    <p className='card-text small'>{detail.contenido}</p>
                                </div>
                            </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>}

        </div >
    )
}

export default BlogTable