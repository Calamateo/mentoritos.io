import React from "react";
import "./menu.css";
import "../Css/Inicio.css";
import ContactForm from "./contactUs";

function Home() {
  const imageHome = require.context("../global/assets/images", true);

  return (
    <div className="mt-4 pt-4">
      {/* inicio */}
      {/* <!-- banner --> */}
      <section
        id="banner"
        className="container-xl text-center space-between-sections pt-3 mt-3"
      >
        <div className="row" id="banner-info">
          {/* <!-- <div className="col-1"> 
                Column
            </div> -->*/}
          <div className="col-7">
            <div className="row">
              <div className="col">
                <h1>
                  <span>Todos</span> tenemos algo que enseñar <br /> y algo que
                  aprender
                </h1>
              </div>
            </div>
            <div className="row my-4">
              <div className="col">
                <p
                  id="link-join"
                  className="text-end"
                  style={{ marginRight: "120px important" }}
                >
                  ¿Te gustaría enseñar?
                  <a href="./Login" className="highlighted-text ms-1">
                    Únete aquí
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <img src={imageHome("./planet.png")} id="planet1" alt="" />
          </div>
        </div>
        <div className="jumpdown-section">
          <p>Ver más</p>
          <a href="#about-us-dm">
            <i className="fas fa-chevron-circle-down"></i>
          </a>
        </div>
      </section>
      {/* <!-- /banner --> */}

      {/* <!-- Dummie Section --> */}
      {/* <!-- Dommie section to avoid the nabvar blocks the Short About Us Section when using the jumpdown--> */}
      <div id="about-us-dm" className="pt-5"></div>
      {/* <!-- /Dummie Section --> */}

      {/* <!-- short about us --> */}
      <section
        id="short-aboutUs"
        className="container-xl-fluid pt-5 space-between-sections"
        style={{ paddingBottom: "3rem" }}
      >
        <div className="container-xl">
          <div className="row mb-3">
            <div className="col-8">
              <h2>Sobre nosotros</h2>
              <p className="my-4">
                Somos una plataforma, con sede en Guadalajara, que funciona como
                un intermediario entre mentores con muchas ganas de compartir su
                conocimiento y estudiantes con hambre de aprender.
              </p>
              <p>
                Creemos que todos tienen un talento único, por eso brindamos la
                posibilidad a los estudiantes que dominen un tema a compartir su
                conocimiento con otros por medio del programa{" "}
                <span className="highlighted-text">Mentoritos</span>.
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-1"></div>
            <div className="col">
              <img
                src={imageHome("./Hyperspace Long Distance Call.png")}
                className="img-fluid"
                alt="..."
                style={{ maxWidth: "50% important" }}
              />
            </div>
          </div>
          <div className="text-center">
            <a
              className="btn ms-5 me-3 rounded-pill buttons mt-5"
              href="./aboutUs/html/aboutUs.html"
            >
              conócenos más
            </a>
          </div>
        </div>
      </section>
      {/* <!-- short about us -->*/}

      {/* <!-- value proposal --> */}
      <section
        id="value-proposal"
        className="space-between-sections value-proposal"
      >
        <div className="container-xl mt-5">
          <div className="row">
            <div className="col">
              <h2 className="text-center">Mentoritos te ofrece</h2>
            </div>
          </div>
          <div className="row text-center mt-5">
            <div className="col">
              <div className="circule mx-auto">
                <p className="my-auto circulito">primer clase gratis</p>
              </div>
            </div>
            <div className="col">
              <div className="circule mx-auto">
                <div>
                  <i
                    className="fas fa-calendar-check"
                    style={{ fontSize: "4rem" }}
                  ></i>
                </div>
                <div className="pt-3">
                  <p className="my-auto">horarios flexibles</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="circule mx-auto">
                <p className="my-auto">oportunidad de clases presenciales</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- value proposal --> */}

      {/* <!-- easy steps --> */}
      <section id="easy-steps" className="space-between-sections">
        <div className="container-xl">
          <div className="row">
            <div className="col">
              <h2 style={{ textAlign: "right" }}>
                Encuentra a tu mentor favorito fácilmente
              </h2>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-1"></div>
            <div className="col">
              <div className="step-bar">
                <div className="circule">
                  <p className="my-auto">1</p>
                </div>
                <p className="my-auto">Elige un tema a estudiar</p>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-3"></div>
            <div className="col">
              <div className="step-bar">
                <div className="circule">
                  <p className="my-auto">2</p>
                </div>
                <p className="my-auto">Busca su categoría</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="step-bar">
                <div className="circule">
                  <p className="my-auto">3</p>
                </div>
                <p className="my-auto">Conoce a nuestros mentores</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- easy steps --> */}

      {/* <!-- filter --> */}
      <section id="home-filter">
        <div className="container-xl-fluid text-center py-4"></div>
      </section>
      {/* <!-- featured mentors --> */}
      <section id="featured-mentors" className="space-between-sections">
        <div className="container-xl mt-3 pt-5">
          <div className="row">
            <div className="col">
              <h2 className="text-center" style={{ zIndex: "200" }}>
                Nuestros mentores destacados
              </h2>
              <div className="circule"></div>
            </div>
            <div className="col-9">
              <div
                id="carouselExampleIndicators"
                className="carousel slide pb-5"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    style={{ backgroundColor: "black" }}
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    style={{ backgroundColor: "black" }}
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    style={{ backgroundColor: "black" }}
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-box">
                          <div
                            className="card mx-auto"
                            style={{ width: "15rem" }}
                          >
                            <img
                              src={imageHome("./mentor.jfif")}
                              className="card-img-top featured"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">Andrea Jiménez</h5>
                              <p className="card-text">Matemáticas</p>
                              <a
                                href="!#"
                                className="btn btn-primary buttons rounded-pill"
                              >
                                Conocer
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div
                            className="card mx-auto"
                            style={{ width: "15rem" }}
                          >
                            <img
                              src={imageHome("./mentor3.jpg")}
                              className="card-img-top featured"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">Julio Ramírez</h5>
                              <p className="card-text">Filosofía</p>
                              <a
                                href="!#"
                                className="btn btn-primary buttons rounded-pill"
                              >
                                Conocer
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div
                            className="card mx-auto"
                            style={{ width: "15rem" }}
                          >
                            <img
                              src={imageHome("./mentor2.jpg")}
                              className="card-img-top featured"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">María Cárdenas</h5>
                              <p className="card-text">Yoga</p>
                              <a
                                href="!#"
                                className="btn btn-primary buttons rounded-pill"
                              >
                                Conocer
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-box">
                          <div
                            className="card mx-auto"
                            style={{ width: "15rem" }}
                          >
                            <img
                              src={imageHome("./mentor6.jpg")}
                              className="card-img-top featured"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">José Gutiérrez</h5>
                              <p className="card-text">Inglés</p>
                              <a
                                href="!#"
                                className="btn btn-primary buttons rounded-pill"
                              >
                                Conocer
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div
                            className="card mx-auto"
                            style={{ width: "15rem" }}
                          >
                            <img
                              src={imageHome("./mentora2.jfif")}
                              className="card-img-top featured"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">Lorena Estrada</h5>
                              <p className="card-text">Acuarela</p>
                              <a
                                href="!#"
                                className="btn btn-primary buttons rounded-pill"
                              >
                                Conocer
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div
                            className="card mx-auto"
                            style={{ width: "15rem" }}
                          >
                            <img
                              src={imageHome("./mentor5.png")}
                              className="card-img-top featured"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">Javier Pérez</h5>
                              <p className="card-text">Animación</p>
                              <a
                                href="!#"
                                className="btn btn-primary buttons rounded-pill"
                              >
                                Conocer
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-box">
                          <div
                            className="card mx-auto"
                            style={{ width: "15rem" }}
                          >
                            <img
                              src={imageHome("./mentora1.jpg")}
                              className="card-img-top featured"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">Karla Torres</h5>
                              <p className="card-text">
                                Entrenamiento personal
                              </p>
                              <a
                                href="!#"
                                className="btn btn-primary buttons rounded-pill"
                              >
                                Conocer
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div
                            className="card mx-auto"
                            style={{ width: "15rem" }}
                          >
                            <img
                              src={imageHome("./mentor4.jpg")}
                              className="card-img-top featured"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">Juan Navarro</h5>
                              <p className="card-text">Programación</p>
                              <a
                                href="!#"
                                className="btn btn-primary buttons rounded-pill"
                              >
                                Conocer
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div
                            className="card mx-auto"
                            style={{ width: "15rem" }}
                          >
                            <img
                              src={imageHome("./mentora4.jpg")}
                              className="card-img-top featured"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">Elena Contreras</h5>
                              <p className="card-text">Solfeo</p>
                              <a
                                href="!#"
                                className="btn btn-primary buttons rounded-pill"
                              >
                                Conocer
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <i className="fas fa-angle-left arrow-icon"></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <i className="fas fa-angle-right arrow-icon"></i>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col text-center">
              <button className="btn ms-5 me-3 rounded-pill buttons mt-5">
                Tomar clase gratis
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- featured mentors --> */}

      {/* <!-- categories --> */}
      <section className="space-between-sections">
        <div className="container-xl">
          <h2>Categorías</h2>
          <h3 style={{ marginLeft: "6rem" }}>¿Qué te gustaría aprender hoy?</h3>
        </div>
        <div className="container-xl mt-5">
          {/* <!-- odd first --> */}
          <div className="row row-categories text-white">
            <div className="col-md-2 col-4 px-1">
              <div className="card subcategory text-center" id="japones">
                <p className="card-text text-white">Cocina japonesa</p>
              </div>
            </div>
            <div className="col-md-4 col-8 px-1">
              <div className="card category text-center" id="fisica">
                <p className="card-text text-white">Física</p>
              </div>
            </div>
            <div className="col-md-2 col-4 px-1">
              <div className="card subcategory text-center" id="toefl">
                <p className="card-text text-white">Examen TOEFL</p>
              </div>
            </div>
            <div className="col-md-4 col-8 px-1">
              <div className="card category text-center" id="guitarra">
                <p className="card-text text-white">Guitarra</p>
              </div>
            </div>
          </div>
          {/* <!-- even --> */}
          <div className="row mt-4 row-categories">
            <div className="col-md-4 col-8 px-1">
              <div className="card category text-center" id="canto">
                <p className="card-text text-white">Canto</p>
              </div>
            </div>
            <div className="col-md-2 col-4 px-1">
              <div className="card subcategory text-center" id="programacion">
                <p className="card-text text-white">Programación en C#</p>
              </div>
            </div>
            <div className="col-md-4 col-8 px-1">
              <div className="card category text-center" id="yoga">
                <p className="card-text text-white">Yoga</p>
              </div>
            </div>
            <div className="col-md-2 col-4 px-1">
              <div className="card subcategory text-center" id="teatro">
                <p className="card-text text-white">Teatro</p>
              </div>
            </div>
          </div>
          {/* <!-- odd --> */}
          <div className="row mt-4 row-categories">
            <div className="col-md-2 col-4 px-1">
              <div className="card subcategory text-center" id="geografia">
                <p className="card-text text-white">Geografía</p>
              </div>
            </div>
            <div className="col-md-4 col-8 px-1">
              <div className="card category text-center" id="pintura">
                <p className="card-text text-white">Pintura</p>
              </div>
            </div>
            <div className="col-md-2 col-4 px-1">
              <div className="card subcategory text-center" id="partitura">
                <p className="card-text text-white">Solfeo</p>
              </div>
            </div>
            <div className="col-md-4 col-8 px-1">
              <div className="card category text-center" id="calculo">
                <p className="card-text text-white">Cálculo</p>
              </div>
            </div>
          </div>
          {/* <!-- even --> */}
          <div className="row mt-4 row-categories">
            <div className="col-md-4 col-8 px-1">
              <div className="card category text-center" id="idioma">
                <p className="card-text text-white">Idiomas</p>
              </div>
            </div>
            <div className="col-md-2 col-4 px-1">
              <div className="card subcategory text-center" id="lol">
                <p className="card-text text-white">LoL</p>
              </div>
            </div>
            <div className="col-md-4 col-8 px-1">
              <div className="card category text-center" id="cocina">
                <p className="card-text text-white">Cocina</p>
              </div>
            </div>
            <div className="col-md-2 col-4 px-1">
              <div className="card subcategory text-center" id="java">
                <p className="card-text text-white">Programación en Java</p>
              </div>
            </div>
          </div>
          {/* <!-- odd --> */}
          <div className="row mt-4 row-categories">
            <div className="col-md-2 col-4 px-1">
              <div className="card subcategory text-center" id="diseño">
                <p className="card-text text-white">Diseño de personaje</p>
              </div>
            </div>
            <div className="col-md-4 col-8 px-1">
              <div className="card category text-center" id="ballet">
                <p className="card-text text-white">Ballet</p>
              </div>
            </div>
            <div className="col-md-2 col-4 px-1">
              <div className="card subcategory text-center" id="photo">
                <p className="card-text text-white">Photoshop</p>
              </div>
            </div>
            <div className="col-md-4 col-8 px-1">
              <div className="card category text-center" id="foto">
                <p className="card-text text-white">Fotografía</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- categories --> */}

      {/* <!-- contact form --> */}
      <section id="contact-form" className="space-between-sections">
        <ContactForm />
      </section>
      {/* <!-- contact form --> */}

      {/* <!-- footer --> */}
      <footer>
        <div className="container-xl">
          <div className="row">
            <div className="col py-5">
              <br />
              <a href="!#" className="mb-0 pt-5">
                Enseña con nosotros
              </a>
              <br />
              <a href="!#" className="mb-0">
                FAQ
              </a>
              <br />
              <a href="!#">Reportar malas prácticas</a>
            </div>

            <div className="col py-5">
              <br />
              <a href="!#" className="mb-0 pt-5">
                Aviso de privacidad
              </a>
              <br />
              <a href="!#" className="mb-0">
                Términos y condiciones
              </a>
              <br />
            </div>
            <div className="col py-5">
              <br />
              <a href="!#" className="mb-0 pt-5">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="!#" className="mb-0">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="!#">
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer --> */}
    </div>
  );
}

export default Home;
