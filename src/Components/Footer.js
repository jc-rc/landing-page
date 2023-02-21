import React from 'react'

function Footer() {
  return (
    <div className="container-fluid text-bg-primary">
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-evenly py-3">
        <div className="col-12 col-sm mb-3 mb-sm-0">
          <p className='m-0 text-center' data-bs-toggle="modal" data-bs-target="#modal-aviso">Aviso de Privacidad</p>

        </div>
        <div className="col-12 col-sm mb-3 mb-sm-0">
          <p className='m-0 text-center' data-bs-toggle="modal" data-bs-target="#modal-tyc">Términos y Condiciones</p>
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
        <div className="col-12 col-sm ">
          <p className='small m-0 text-center'>© Sirius-Tec | 2023</p>
        </div>
      </div>



      {/* MODAL TYC */}
      <div className="modal fade" id="modal-tyc">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content text-dark">
            <div className="modal-header">
              <p className="h4 m-0 modal-title">Términos y Condiciones</p>
              <button type="button" className="btn-close btn-close-tyc" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum dolor non tincidunt eleifend. Mauris faucibus lorem quis sem eleifend, a efficitur erat volutpat. Etiam blandit, nisl quis aliquet ultrices, quam massa tincidunt enim, nec auctor dui nisl placerat ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque eleifend augue, at accumsan augue vehicula in. Vestibulum ut lorem sed augue accumsan egestas. Nam commodo sem ut libero efficitur, vitae ornare ex vulputate. Mauris accumsan cursus eleifend.

Cras ut facilisis nibh. Etiam ut nunc dolor. Ut est ante, ullamcorper id arcu ac, elementum fermentum eros. Donec velit sapien, posuere eget felis non, semper pulvinar purus. Nam ullamcorper urna tellus, sit amet molestie augue feugiat a. Aliquam id massa aliquam, ornare magna quis, dictum libero. Curabitur ornare ultrices porta. Nulla facilisi. Praesent elementum, elit at accumsan ultrices, lectus nulla euismod mauris, vitae mollis metus nibh et lectus. Integer posuere ipsum non ultrices egestas. Nam rhoncus, ligula sed dignissim aliquam, mi enim fermentum orci, sit amet rutrum elit lacus ac erat.

Praesent tincidunt leo quis cursus posuere. Nam in justo tortor. Aenean sem eros, porta eu lobortis ut, molestie vel diam. In efficitur sollicitudin felis congue commodo. Maecenas vitae blandit orci. Sed viverra enim in sem eleifend mattis. Morbi sed felis sagittis, malesuada est vel, convallis libero. Nulla molestie facilisis aliquam. Quisque luctus mauris a orci interdum luctus. Maecenas vel blandit mi, sit amet placerat dolor. Pellentesque commodo, mi eget pellentesque faucibus, dolor libero lobortis diam, sed gravida arcu tortor quis arcu. Praesent blandit auctor erat id aliquam. Sed nec sapien enim. Aenean congue justo quis massa varius pulvinar. Proin consectetur orci at magna dictum mattis.

Maecenas id sapien at justo porta vulputate vitae sit amet ligula. Etiam gravida quis odio vitae porttitor. Morbi lobortis ex ac eros fringilla commodo. Sed pharetra lorem sodales velit auctor dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet dictum magna, sed accumsan orci. Nam cursus suscipit urna, eu consectetur lacus ultrices ut. Praesent at facilisis nisl. Vestibulum quis erat maximus, fringilla enim vitae, condimentum felis. Nulla facilisi. Sed metus tortor, consectetur et ligula et, elementum luctus lacus. Cras consequat bibendum leo et facilisis. Mauris non mattis orci. Sed non fringilla sem. Ut dapibus, eros rutrum vestibulum eleifend, ante mauris congue nisi, in pretium quam elit sed dolor. Duis a mi id lacus porta faucibus.

Phasellus hendrerit velit massa, pretium fringilla nisl rhoncus ut. Donec vel sapien sit amet purus maximus ullamcorper. Nunc in tristique orci, et posuere diam. Suspendisse felis turpis, tristique id velit fermentum, ullamcorper rutrum diam. Etiam ac tristique nisl. Proin faucibus elit vel orci convallis varius. Nulla convallis fringilla nulla.

Duis vel ipsum vel ante ultricies dapibus et at tortor. Sed id eros a risus lacinia tristique sed quis urna. Nullam ipsum augue, tempor nec elit vel, malesuada congue sapien. Curabitur ut lacus a metus finibus tempor. Suspendisse nec tellus semper, mollis ex sed, ultricies metus. Etiam ac gravida felis, vitae pharetra elit. Sed ac mi ut purus ornare facilisis. Donec a convallis leo. Aenean quis porttitor urna. In hac habitasse platea dictumst. Nam tortor arcu, ullamcorper et justo nec, finibus pretium massa. Nullam tempor, libero a semper congue, odio ligula consequat ante, eget blandit justo dolor eget erat. Duis condimentum nulla eu leo fermentum pharetra id nec felis. Nam sagittis turpis sagittis eros efficitur egestas a vitae lectus. Phasellus suscipit faucibus sapien ornare dignissim.

Phasellus aliquet eget diam eu fermentum. Maecenas quis hendrerit odio. Cras sed est luctus risus porttitor tempor sed eget justo. Vestibulum id dolor cursus, lobortis nibh id, malesuada urna. Curabitur risus mauris, fringilla in elit eu, pretium egestas velit. Aliquam vestibulum velit elit, id viverra est consequat ac. Duis in justo a nisi ornare accumsan. Quisque et molestie nisl. Quisque enim nibh, congue eget mi a, posuere volutpat diam. Integer et semper libero, ut porttitor tellus. Maecenas vitae libero quis purus lobortis condimentum et a magna. Sed commodo nunc a mauris commodo rhoncus. Nullam dignissim elit sed leo pharetra, vel malesuada enim congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac sodales arcu.

Nulla facilisi. Donec non sodales sem. In eget eros sed justo pulvinar posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse et justo vel erat blandit tristique ut at mauris. Sed vel augue quis nulla tincidunt rhoncus. Sed gravida pharetra egestas. Nunc in diam lacus. Proin vitae viverra dui, at aliquet purus. Sed non est dictum, dictum sapien quis, ornare justo. Aenean sodales venenatis libero. Maecenas congue ligula a tempor interdum. Curabitur fringilla vel dui consequat fermentum.

In porta sodales venenatis. Mauris non condimentum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac eleifend purus. Maecenas dui est, placerat ut leo nec, accumsan ornare nunc. In nec augue non sapien aliquam elementum. Sed fringilla metus ornare vulputate viverra. Maecenas magna odio, euismod ut felis at, porta pulvinar odio. Phasellus tristique aliquam maximus. In sagittis est tempus, pretium orci ut, tincidunt risus. Suspendisse vitae nunc blandit, tempus odio eu, molestie felis. Nullam sed neque augue. Proin vulputate turpis sed justo tincidunt, in feugiat neque tincidunt. Morbi a consequat turpis. Etiam sed purus vitae tortor laoreet pellentesque nec vitae lectus.</p>
            </div>
          </div>
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
              <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum dolor non tincidunt eleifend. Mauris faucibus lorem quis sem eleifend, a efficitur erat volutpat. Etiam blandit, nisl quis aliquet ultrices, quam massa tincidunt enim, nec auctor dui nisl placerat ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque eleifend augue, at accumsan augue vehicula in. Vestibulum ut lorem sed augue accumsan egestas. Nam commodo sem ut libero efficitur, vitae ornare ex vulputate. Mauris accumsan cursus eleifend.

Cras ut facilisis nibh. Etiam ut nunc dolor. Ut est ante, ullamcorper id arcu ac, elementum fermentum eros. Donec velit sapien, posuere eget felis non, semper pulvinar purus. Nam ullamcorper urna tellus, sit amet molestie augue feugiat a. Aliquam id massa aliquam, ornare magna quis, dictum libero. Curabitur ornare ultrices porta. Nulla facilisi. Praesent elementum, elit at accumsan ultrices, lectus nulla euismod mauris, vitae mollis metus nibh et lectus. Integer posuere ipsum non ultrices egestas. Nam rhoncus, ligula sed dignissim aliquam, mi enim fermentum orci, sit amet rutrum elit lacus ac erat.

Praesent tincidunt leo quis cursus posuere. Nam in justo tortor. Aenean sem eros, porta eu lobortis ut, molestie vel diam. In efficitur sollicitudin felis congue commodo. Maecenas vitae blandit orci. Sed viverra enim in sem eleifend mattis. Morbi sed felis sagittis, malesuada est vel, convallis libero. Nulla molestie facilisis aliquam. Quisque luctus mauris a orci interdum luctus. Maecenas vel blandit mi, sit amet placerat dolor. Pellentesque commodo, mi eget pellentesque faucibus, dolor libero lobortis diam, sed gravida arcu tortor quis arcu. Praesent blandit auctor erat id aliquam. Sed nec sapien enim. Aenean congue justo quis massa varius pulvinar. Proin consectetur orci at magna dictum mattis.

Maecenas id sapien at justo porta vulputate vitae sit amet ligula. Etiam gravida quis odio vitae porttitor. Morbi lobortis ex ac eros fringilla commodo. Sed pharetra lorem sodales velit auctor dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet dictum magna, sed accumsan orci. Nam cursus suscipit urna, eu consectetur lacus ultrices ut. Praesent at facilisis nisl. Vestibulum quis erat maximus, fringilla enim vitae, condimentum felis. Nulla facilisi. Sed metus tortor, consectetur et ligula et, elementum luctus lacus. Cras consequat bibendum leo et facilisis. Mauris non mattis orci. Sed non fringilla sem. Ut dapibus, eros rutrum vestibulum eleifend, ante mauris congue nisi, in pretium quam elit sed dolor. Duis a mi id lacus porta faucibus.

Phasellus hendrerit velit massa, pretium fringilla nisl rhoncus ut. Donec vel sapien sit amet purus maximus ullamcorper. Nunc in tristique orci, et posuere diam. Suspendisse felis turpis, tristique id velit fermentum, ullamcorper rutrum diam. Etiam ac tristique nisl. Proin faucibus elit vel orci convallis varius. Nulla convallis fringilla nulla.

Duis vel ipsum vel ante ultricies dapibus et at tortor. Sed id eros a risus lacinia tristique sed quis urna. Nullam ipsum augue, tempor nec elit vel, malesuada congue sapien. Curabitur ut lacus a metus finibus tempor. Suspendisse nec tellus semper, mollis ex sed, ultricies metus. Etiam ac gravida felis, vitae pharetra elit. Sed ac mi ut purus ornare facilisis. Donec a convallis leo. Aenean quis porttitor urna. In hac habitasse platea dictumst. Nam tortor arcu, ullamcorper et justo nec, finibus pretium massa. Nullam tempor, libero a semper congue, odio ligula consequat ante, eget blandit justo dolor eget erat. Duis condimentum nulla eu leo fermentum pharetra id nec felis. Nam sagittis turpis sagittis eros efficitur egestas a vitae lectus. Phasellus suscipit faucibus sapien ornare dignissim.

Phasellus aliquet eget diam eu fermentum. Maecenas quis hendrerit odio. Cras sed est luctus risus porttitor tempor sed eget justo. Vestibulum id dolor cursus, lobortis nibh id, malesuada urna. Curabitur risus mauris, fringilla in elit eu, pretium egestas velit. Aliquam vestibulum velit elit, id viverra est consequat ac. Duis in justo a nisi ornare accumsan. Quisque et molestie nisl. Quisque enim nibh, congue eget mi a, posuere volutpat diam. Integer et semper libero, ut porttitor tellus. Maecenas vitae libero quis purus lobortis condimentum et a magna. Sed commodo nunc a mauris commodo rhoncus. Nullam dignissim elit sed leo pharetra, vel malesuada enim congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac sodales arcu.

Nulla facilisi. Donec non sodales sem. In eget eros sed justo pulvinar posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse et justo vel erat blandit tristique ut at mauris. Sed vel augue quis nulla tincidunt rhoncus. Sed gravida pharetra egestas. Nunc in diam lacus. Proin vitae viverra dui, at aliquet purus. Sed non est dictum, dictum sapien quis, ornare justo. Aenean sodales venenatis libero. Maecenas congue ligula a tempor interdum. Curabitur fringilla vel dui consequat fermentum.

In porta sodales venenatis. Mauris non condimentum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac eleifend purus. Maecenas dui est, placerat ut leo nec, accumsan ornare nunc. In nec augue non sapien aliquam elementum. Sed fringilla metus ornare vulputate viverra. Maecenas magna odio, euismod ut felis at, porta pulvinar odio. Phasellus tristique aliquam maximus. In sagittis est tempus, pretium orci ut, tincidunt risus. Suspendisse vitae nunc blandit, tempus odio eu, molestie felis. Nullam sed neque augue. Proin vulputate turpis sed justo tincidunt, in feugiat neque tincidunt. Morbi a consequat turpis. Etiam sed purus vitae tortor laoreet pellentesque nec vitae lectus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer