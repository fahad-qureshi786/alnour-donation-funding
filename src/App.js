
function App() {
    return (
      <>
          {/* Navbar Start */}
          <div className="container-fluid nav-bar">
              <div className="container">
                  <nav className="navbar navbar-light navbar-expand-lg py-4">
                      <a href="index.html" className="navbar-brand">
                          <h1 className="text-primary fw-bold mb-0">Storied<span className="text-dark">Life</span></h1>
                      </a>
                      <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                          <span className="fa fa-bars text-primary"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarCollapse">
                          <div className="navbar-nav mx-auto">
                              <a href="index.html" className="nav-item nav-link active">Home</a>
                              <a href="#how-it-works" className="nav-item nav-link">How it works?</a>
                              <a href="#rewarding-experience" className="nav-item nav-link">Rewarding Experience</a>
                              <a href="#" className="nav-item nav-link">FAQ</a>
                              <a href="#" className="nav-item nav-link">About Us</a>
                              <a href="#" className="nav-item nav-link">Resources</a>
                              <a href="#contact-us" className="nav-item nav-link">Contact Us</a>
                          </div>
                          <a href="" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Get App</a>
                      </div>
                  </nav>
              </div>
          </div>
          {/* Navbar End */}

          <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content rounded-0">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body d-flex align-items-center">
                          <div className="input-group w-75 mx-auto d-flex">
                              <input type="search" className="form-control bg-transparent p-3" placeholder="keywords"
                                     aria-describedby="search-icon-1" />
                                  <span id="search-icon-1" className="input-group-text p-3"><i
                                      className="fa fa-search"></i></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      {/*    Hero section*/}
          <div className="container-fluid bg-light py-6 my-6 mt-0">
              <div className="container">
                  <div className="row g-5 align-items-center">
                      <div className="col-lg-7 col-md-12">
                          <small
                              className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome
                              to Storied Life</small>
                          <h1 className="display-1 mb-4 animated bounceInDown">Your life is a story worth telling
                              Discover it with
                              <span className="text-primary">StoriedLife</span></h1>
                          <a href="#" className="border-0 rounded-pill px-md-5 me-4 animated bounceInLeft">
                              <img src="/img/playstore.png" alt="" />
                          </a>
                          <a href="" className="border-0 rounded-pill py-3 animated bounceInLeft">
                              <img src="/img/appstore.png" alt="" />
                          </a>
                      </div>
                      <div className="col-lg-5 col-md-12">
                          <img src="img/hero.png" className="img-fluid rounded animated zoomIn" alt="" />
                      </div>
                  </div>
              </div>
          </div>

      {/*    About Section*/}
          <div id="how-it-works" className="container-fluid py-6">
              <div className="container">
                  <div className="row g-5 align-items-center">
                      <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                          <img src="img/about.png" className="img-fluid rounded" alt="" />
                      </div>
                      <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                          <h1 className="display-5 mb-4">Turn your life story into a documentary</h1>
                          <p className="mb-4">

                              Turn your life story into a documentary
                              If you handed your grandchildren your mountain of old photos, albums and videos, will they
                              be able
                              to get to know the real person that you are? A picture is worth a 1,000 worlds - but only
                              if someone
                              can tell the important stories behind it.
                              <br /><br />
                                  LifeDox uses personalized video coaching to guide you through a sequence of important
                                  questions to
                                  uncover the interesting stories of your life. It walks you through the chapters of
                                  your life, asks
                                  you the important questions in each stage, layers your answers with photos, background
                                  music, and
                                  video effects and turns your life story into a professionally produced documentary
                                  that you can
                                  share with your close family and friends.
                          </p>
                          <div className="row g-4 text-dark mb-5">
                              <div className="col-sm-6">
                                  <i className="fas fa-share text-primary me-2"></i>Craft your documentary.
                              </div>
                              <div className="col-sm-6">
                                  <i className="fas fa-share text-primary me-2"></i>Discover life's tales.
                              </div>
                              <div className="col-sm-6">
                                  <i className="fas fa-share text-primary me-2"></i>Navigate pivotal moments.
                              </div>
                              <div className="col-sm-6">
                                  <i className="fas fa-share text-primary me-2"></i>Showcase your documentary.
                              </div>
                          </div>
                          <a href="#" className="btn btn-primary py-3 px-5 rounded-pill">Read More...<i
                              className="fas fa-arrow-right ps-2"></i></a>
                      </div>
                  </div>
              </div>
          </div>

      {/*    Fact section*/}
          <div id="storied-life-coach" className="container-fluid faqt py-6">
              <div className="container">
                  <div className="row g-4 align-items-center">
                      <div className="col-lg-7">
                          <h1 className="display-1 mb-4 animated bounceInDown">
                              Meet your <span className="text-primary">StoriedLife</span> video coach </h1>
                      </div>
                      <div className="col-lg-5 bounceInUp" data-wow-delay="0.1s">
                          <div className="video">
                              <button type="button" className="btn btn-play" data-bs-toggle="modal"
                                      data-src="https://video.wixstatic.com/video/46dd91_d8e6fb13c714499f9a77f60544fb2b05/360p/mp4/file.mp4"
                                      data-bs-target="#videoModal">
                                  <span></span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content rounded-0">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Storied Life Coach</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <div className="ratio ratio-16x9">
                              <iframe className="embed-responsive-item" src="" id="video" allowFullScreen
                                      allowscriptaccess="always"
                                      allow="autoplay"></iframe>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      {/*    Services*/}
          <div className="container-fluid py-6">
              <div className="container">
                  <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                      <h1 className="display-5 mb-5">How <span className="text-primary">StoriedLife</span> Works!</h1>
                  </div>
                  <div className="row"
                       data-wow-delay="0.1s">
                      <div className="col-sm-12 col-md-12  col-lg-4  rounded bg-light">
                          <img style={{width: '60%'}} src="/img/working/1. Demo Screen.jpg" alt=""/>
                      </div>
                      <div className="col-sm-12  col-md-12 col-lg-4   rounded bg-light">
                          <img style={{width: '60%'}} src="/img/working/1. Welcome.jpg" alt=""/>
                      </div>
                      <div className="col-sm-12  col-md-12 col-lg-4   rounded bg-light">
                          <img style={{width: '60%'}} src="/img/working/2. Demo Screen.jpg" alt=""/>
                      </div>
                  </div>
              </div>
          </div>

      {/*    Team section*/}
          <div id="rewarding-experience" className="container-fluid team py-3">
              <div className="container">
                  <div className="container-fluid service py-6">
                      <div className="container">
                          <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                              <h1 className="display-5 mb-5">Rewarding Experience</h1>
                          </div>
                          <div className="row g-4">
                              <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                                  <div className="bg-light rounded service-item">
                                      <div
                                          className="service-content d-flex align-items-center justify-content-center p-4">
                                          <div className="service-content-icon text-center">
                                              <img style={{height: '70%', width: '70%'}} src="/img/experience/img_3.png"
                                                   alt=""/>
                                                  <h4 className="mb-3">Reconnect with your past</h4>
                                                  <p className="mb-4">
                                                      Telling your story in private and at your own pace will allow you
                                                      to reflect on your experiences and remember long forgotten
                                                      events.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                                  <div className="bg-light rounded service-item">
                                      <div
                                          className="service-content d-flex align-items-center justify-content-center p-4">
                                          <div className="service-content-icon text-center">
                                              <img style={{height: '70%', width: '70%'}} src="/img/experience/img_3.png"
                                                   alt=""/>
                                                  <h4 className="mb-3">Gain a deeper understanding through telling your
                                                      story</h4>
                                                  <p className="mb-4">
                                                      through telling your story and reflecting on your coach’s
                                                      questions, you and future generations will gain a deeper insight
                                                      into the context of your life experiences, your relationships, and
                                                      your life’s lessons.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                                  <div className="bg-light rounded service-item">
                                      <div
                                          className="service-content d-flex align-items-center justify-content-center p-4">
                                          <div className="service-content-icon text-center">
                                              <img style={{height: '70%', width: '70%'}} src="/img/experience/img_3.png"
                                                   alt=""/>
                                                  <h4 className="mb-3">Deepen your connection with family and
                                                      friends</h4>
                                                  <p className="mb-4">A LifeDox documentary will allow the next
                                                      generations to get to know you and gives you an opportunity to
                                                      impart some of your life lessons and blessings to the ones that
                                                      follow you.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                                  <div className="bg-light rounded service-item">
                                      <div
                                          className="service-content d-flex align-items-center justify-content-center p-4">
                                          <div className="service-content-icon text-center">
                                              <img style={{height: '70%', width: '70%'}} src="/img/experience/img_3.png"
                                                   alt=""/>
                                                  <h4 className="mb-3">Leave a legacy</h4>
                                                  <p className="mb-4">The resulting LifeDox video could be one of the
                                                      most memorable things you share with your family and friends
                                                      giving them an opportunity to get to know you and what you have
                                                      gone through and a much deeper way.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      {/*    testimonals*/}
          <div className="container-fluid py-6">
              <div className="container">
                  <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                      <small
                          className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Testimonial</small>
                      <h1 className="display-5 mb-5">What People are Saying about <span
                          className="text-primary">StoriedLife</span>!</h1>
                  </div>
                  <div
                      className="owl-carousel owl-theme testimonial-carousel testimonial-carousel-1 mb-4 wow bounceInUp"
                      data-wow-delay="0.1s">
                      <div className="testimonial-item rounded bg-light">
                          <div className="d-flex mb-3">
                              <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                  <i className="fa fa-quote-right fa-2x"></i>
                              </div>
                              <div className="ps-3 my-auto">
                                  <h4 className="mb-0">Eli D</h4>
                              </div>
                          </div>
                          <div className="testimonial-content">
                              <div className="d-flex">
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                              </div>
                              <p className="fs-5 m-0 pt-3">
                                  I liked pairing my answers with photos from our albums. I was very happy with how
                                  StoriedLife put my answers and my photos together into a movie</p>
                          </div>
                      </div>
                      <div className="testimonial-item rounded bg-light">
                          <div className="d-flex mb-3">
                              <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                  <i className="fa fa-quote-right fa-2x"></i>
                              </div>
                              <div className="ps-3 my-auto">
                                  <h4 className="mb-0">Marc F</h4>
                              </div>
                          </div>
                          <div className="testimonial-content">
                              <div className="d-flex">
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                              </div>
                              <p className="fs-5 m-0 pt-3">
                                  I found it very easy to use the app, and the video coach really helped me remember
                                  interesting stories from my childhood</p>
                          </div>
                      </div>
                      <div className="testimonial-item rounded bg-light">
                          <div className="d-flex mb-3">
                              <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                  <i className="fa fa-quote-right fa-2x"></i>
                              </div>
                              <div className="ps-3 my-auto">
                                  <h4 className="mb-0">Sarah M</h4>
                              </div>
                          </div>
                          <div className="testimonial-content">
                              <div className="d-flex">
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                              </div>
                              <p className="fs-5 m-0 pt-3">We watched my StoriedLife documentary with our children and
                                  grandchildren and it was very emotional but wonderful! Thank you StoriedLife.</p>
                          </div>
                      </div>
                      <div className="testimonial-item rounded bg-light">
                          <div className="d-flex mb-3">
                              <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                  <i className="fa fa-quote-right fa-2x"></i>
                              </div>
                              <div className="ps-3 my-auto">
                                  <h4 className="mb-0">Susan G</h4>
                              </div>
                          </div>
                          <div className="testimonial-content">
                              <div className="d-flex">
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                              </div>
                              <p className="fs-5 m-0 pt-3">
                                  I used LifeDox with my husband and we had a wonderful time remembering so many trips
                                  and family celebrations we had with our kids</p>
                          </div>
                      </div>
                  </div>
                  <div className="owl-carousel testimonial-carousel testimonial-carousel-2 wow bounceInUp"
                       data-wow-delay="0.3s">
                      <div className="testimonial-item rounded bg-light">
                          <div className="d-flex mb-3">
                              <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                  <i className="fa fa-quote-right fa-2x"></i>
                              </div>
                              <div className="ps-3 my-auto">
                                  <h4 className="mb-0">Tom R</h4>
                              </div>
                          </div>
                          <div className="testimonial-content">
                              <div className="d-flex">
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                              </div>
                              <p className="fs-5 m-0 pt-3">
                                  LifeDox helped me realize how much my mother influenced the person I became and how
                                  grateful I feel for having been her son</p>
                          </div>
                      </div>
                      <div className="testimonial-item rounded bg-light">
                          <div className="d-flex mb-3">
                              <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                  <i className="fa fa-quote-right fa-2x"></i>
                              </div>
                              <div className="ps-3 my-auto">
                                  <h4 className="mb-0">Adam D</h4>
                              </div>
                          </div>
                          <div className="testimonial-content">
                              <div className="d-flex">
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                              </div>
                              <p className="fs-5 m-0 pt-3">Using LifeDox helped me put many of my most important moments
                                  and stories in one place and in a way I can share it with my grandchildren</p>
                          </div>
                      </div>
                      <div className="testimonial-item rounded bg-light">
                          <div className="d-flex mb-3">
                              <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                  <i className="fa fa-quote-right fa-2x"></i>
                              </div>
                              <div className="ps-3 my-auto">
                                  <h4 className="mb-0">Marc F</h4>
                              </div>
                          </div>
                          <div className="testimonial-content">
                              <div className="d-flex">
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                                  <i className="fas fa-star text-primary"></i>
                              </div>
                              <p className="fs-5 m-0 pt-3">
                                  I found it very easy to use the app, and the video coach really helped me remember
                                  interesting stories from my childhood</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


      {/*    Contact form*/}
          <div id="contact-us" className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
              <div className="container">
                  <div className="p-5 bg-light rounded contact-form">
                      <div className="justify-content-center d-flex flex-column align-items-center">
                          <div className="col-md-6 col-lg-7">
                              <h1 className="display-5 mb-3 text-center">Contact Us!</h1>
                              <form>
                                  <input type="text" className="w-100 form-control p-3 mb-4 border-primary bg-light"
                                         placeholder="Your Name" />
                                      <input type="email"
                                             className="w-100 form-control p-3 mb-4 border-primary bg-light"
                                             placeholder="Enter Your Email" />
                                          <textarea className="w-100 form-control mb-4 p-3 border-primary bg-light"
                                                    rows="4" cols="10" placeholder="Your Message"></textarea>
                                          <button
                                              className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill"
                                              type="submit">Submit Now
                                          </button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      {/*Copywrite*/}
          <div className="container-fluid copyright bg-dark py-4">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2"></i>
                    StoriedLife</a>, All right reserved.</span>
                      </div>
                      <div className="col-md-6 d-flex justify-content-end my-auto text-center text-md-end text-white">
                          <a className="mt-2 me-2" href="#"> StoriedLife</a>
                          <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href="#"><i
                              className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href="#"><i
                              className="fab fa-twitter"></i></a>
                          <a href="#" className="btn btn-primary btn-sm-square me-2 rounded-circle"><i
                              className="fab fa-instagram"></i></a>
                          <a href="#" className="btn btn-primary btn-sm-square rounded-circle"><i
                              className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
              </div>
          </div>

      </>
    );
}

export default App;
