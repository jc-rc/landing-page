
import './App.css';
import HomeView from './Components/HomeView';
import ContactoView from './Components/ContactoView';
import EmpresariosView from './Components/EmpresariosView';
import AppView from './Components/AppView';
import Footer from './Components/Footer';
import BlogTable from './Components/BlogTable';

function App() {


  return (
    <div className="container-fluid d-flex flex-column align-items-center" style={{maxWidth: 1300}}>
      <div className="navbar flex-sm-row flex-column my-4">
        <nav>
          <div className="nav nav-pills bg-light  me-2 rounded" id="nav-tab" role="tablist">
            <button className="btn-sm nav-link active nav-bar-brand d-flex align-items-center" id="nav-home-tab" data-bs-toggle="pill" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              <img className='d-block me-2' src="./logo-ctvka.png" alt="" style={{ height: 50 }} />
               <p className='d-none d-sm-block m-0'>Inicio</p> 
            </button>

            <button className="btn-sm nav-link" id="nav-empresarios-tab" data-bs-toggle="pill" data-bs-target="#nav-empresarios" type="button" role="tab" aria-controls="nav-empresarios" aria-selected="false"> <i className="fa-solid fa-building-user d-block d-sm-none"></i> <p className="m-0 d-none d-sm-block">Empresarios</p></button>

            <button className="btn-sm nav-link me-auto" id="nav-news-tab" data-bs-toggle="pill" data-bs-target="#nav-news" type="button" role="tab" aria-controls="nav-news" aria-selected="false"> <i className="fa-solid fa-newspaper d-block d-sm-none"></i> <p className="m-0 d-none d-sm-block">Noticias</p></button>

            <button className="btn-sm nav-link me-auto" id="nav-contact-tab" data-bs-toggle="pill" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"> <i className="fa-solid fa-paper-plane d-block d-sm-none"></i> <p className="m-0 d-none d-sm-block">Contacto</p></button>

            <button className="btn-sm nav-link" id="nav-app-tab" data-bs-toggle="pill" data-bs-target="#nav-app" type="button" role="tab" aria-controls="nav-app" aria-selected="false"> <i className="fa-solid fa-rocket d-block d-sm-none"></i> <p className="m-0 d-none d-sm-block">Portal HKT</p></button>

          </div>
        </nav>
      </div>

      <div className="tab-content col-sm-11 col-12 bg-light rounded p-4" id="nav-tabContent">
        {/* USUARIOS */}
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
          <div className="row">
            <HomeView></HomeView>
          </div>
        </div>
        <div className="tab-pane fade show " id="nav-empresarios" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
          <div className="row">
            <EmpresariosView></EmpresariosView>
          </div>
        </div>
        <div className="tab-pane fade show " id="nav-news" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
          <div className="row mx-auto">
            <BlogTable></BlogTable>
          </div>
        </div>
        <div className="tab-pane fade show " id="nav-contact" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
          <div className="row mx-auto">
            <ContactoView></ContactoView>
          </div>
        </div>
        <div className="tab-pane fade show " id="nav-app" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
          <div className="row">
            <AppView></AppView>
          </div>
        </div>
      </div>


      <Footer></Footer>



    </div>
  );
}

export default App;
