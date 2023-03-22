import React from 'react'

function Footer() {
  return (
    <div className="container-fluid text-bg-primary">
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-evenly py-3">
        <div className="col-12 col-sm mb-3 mb-sm-0">
          <p className='m-0 text-center' data-bs-toggle="modal" data-bs-target="#modal-aviso"><u>Aviso de Privacidad</u></p>

        </div>


        <div className="col-6 col-sm mb-3 mb-sm-0">
          <a className='text-decoration-none' href="https://www.facebook.com/canacintramorelosoficial">
            <p className='h2 m-0 text-center text-decoration-none'><i className="fa-brands fa-facebook"></i></p>
          </a>
        </div>
        <div className="col-6 col-sm mb-3 mb-sm-0">
          <a className='text-decoration-none' href="https://www.instagram.com/canacintramorelos/">
            <p className='h2 m-0 text-center text-decoration-none'><i className="fa-brands fa-instagram"></i></p>
          </a>
        </div>
        <div className="col-12 col-sm mb-3 text-center">
          <p className='small m-0'></p>
          <a href="https://fidecomp.morelos.gob.mx/"><img className='img-fluid' style={{aspectRatio: "16:9", height: 50}} src={"./logo_fidecomp.png"} alt="" /></a>
        </div>
        <div className="col-12 col-sm ">
          <p className='small m-0 text-center'>© Sirius-Tec | 2023</p>
        </div>
      </div>


      {/* MODAL Aviso de Privacidad */}
      <div className="modal fade" id="modal-aviso">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content text-dark">
            <div className="modal-header">
              <p className="h4 m-0 modal-title">Aviso de Privacidad</p>
              <button type="button" className="btn-close btn-close-aviso" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="small">
                <p className=' h6 fw-bold'>CANACINTRA MORELOS</p>
                <p>De  conformidad  con  lo  previsto  en  la  Ley  Federal  de  Protección  de  Datos  Personales  en Posesión  de  los  Particulares  (en  lo  sucesivo  denominada  como  "la  Ley"),  nos  permitimos solicitarle leer cuidadosamente los Términos y Condiciones contenidos en este documento, ya que la simple aportación que haga de sus datos Personales o Datos Sensibles constituye la aceptación de estos Términos y Condiciones:</p>
                <p>1. CANACINTRA MORELOS será responsable de los datos personales de conformidad a lo dispuesto por la fracción I del artículo 16 de la Ley, con domicilio AV. Palmas Norte, No. 125, Col. Bella Vista, Cuernavaca Morelos, C.P. 62140 tel.: (777) 241 80 83,  es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.</p>
                <p>2. Los términos "Datos Personales" y "Datos Sensibles" tendrán el significado que se les atribuye en el artículo 3 de la Ley.</p>
                <p>3. Los Datos Personales y/o Datos Sensibles que usted pueda proporcionar al Responsable tendrán el uso que en forma enunciativa pero no limitativa se describe a continuación:</p>
                <p className="ms-4">• Su información personal será utilizada para proveer los servicios y productos que ha solicitado, así como informarle sobre cambios en los mismos y evaluar la calidad del  servicio  que  le  brindamos.  Para  la  finalidad  antes  mencionada,   requerimos obtener los siguientes datos personales: Nombre, Apellidos, Nombre de la Empresa, teléfono,  correo  electrónico  y  dirección  considerados  como  sensible  según  la  Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
                <p>4. Una  vez  que  usted  entregue  al  Responsable  sus  Datos  Personales  o  Datos  Sensibles,  le manifestamos  que  estos  serán  conservados  en  diferentes  medios  seguros  que  la  tecnología permita, cuyo acceso estará limitado solamente a las personas físicas y/o morales con la que el  Responsable  tenga  alguna  relación  jurídica.  El  Responsable  contará  con  las  medidas  de seguridad que considere adecuadas para proteger el uso de sus Datos Personales y/o Datos Sensibles por parte de terceros no autorizados. En caso de requerimiento de alguna autoridad, los datos Personales y/o Datos Sensibles podrán ponerse a disposición de éstas, dentro del estricto cumplimiento a la Ley.</p>
                <p>5. El tratamiento de sus datos Personales, que se han puesto a disposición del Responsable bajo  cualquier  forma  o  circunstancia,  de  conformidad  con  los  presentes  términos  y condiciones, por lo que desde este momento se entiende que usted autoriza expresamente al Responsable para tal efecto, hasta en tanto usted manifieste su oposición mediante alguno de los medios que indica la Ley.</p>
                <p>
                  6. Usted tendrá en todo momento el acceso a sus Datos Personales y/o Datos Sensibles, ya sea para solicitar su rectificación, cancelación u oposición de conformidad con lo dispuesto en  la  Ley,  en  forma  escrita,  electrónica,  telefónica  o  dirigiendo  su  mensaje  a  la  dirección morelos@canacintra.org.mx o visitar nuestra página de Internet www.canacintramorelos.org.mx según corresponda. Para lo anterior, deberá hacernos saber fehacientemente los Datos Personales y/o Datos Sensibles que usted desea sean rectificados, cancelados  o  revisados,
                  así  como  el  propósito  para  el  cual  los  aportó  y  el  nombre  del  Responsable  a  quien  se  los entregó y en general cumplir los requisitos mencionados en el art. 29 de la Ley.
                </p>
                <p>7.  Tratándose de sus Datos Sensibles, usted tendrá derecho a que el Responsable le informe sobre  cualesquier  transferencias  que  llegare  a  efectuar  de  los  mismos  a  cualquier  tercero,  y para  ello  le  será  notificada  tal  acción  por  cualquier  medio,  ya  sea  escrito,  telefónico, electrónico,  óptico,  sonoro,  visual  o  cualquier  otro  que  la  tecnología  permita  ahora  o  en  lo futuro. De darse el caso, usted tendrá derecho a oponerse a ello, debiendo seguir el proceso mencionado en el punto inmediato anterior.</p>
                <p>8.  En el caso de que el Responsable requiera usar sus Datos Personales y/o Datos Sensibles con  fines  diferentes  a  los  señalados  en  el  presente  Aviso  de  Privacidad,  contactará  con usted ya sea en forma escrita, telefónica, electrónica, o por cualquier medio óptico, sonoro, visual u otro que la tecnología permita ahora o en lo futuro y le explicará los nuevos usos que pretenda darle a dicha información a fin de recabar su autorización.</p>
                <p>9.  Tratándose   de   Datos   Sensibles,   usted   deberá   proporcionar   al   Responsable   su consentimiento expreso y por escrito para su tratamiento, a través de su firma autógrafa, firma electrónica, o cualquier mecanismo de autenticación que al efecto se establezca.</p>
                <p>10.  Cualquier  modificación  a  este  aviso  de  privacidad  podrá  consultarla  en  nuestra  página web <a href="http://www.canacintramorelos.org.mx">www.canacintramorelos.org.mx</a></p>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer