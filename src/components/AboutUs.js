export default function AboutUs() {
    return (
        <>
            <div id="how-it-works" className="container-fluid py-6">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                            <img src="img/donation/img_1-removebg-preview.png" className="img-fluid rounded" alt=""/>
                        </div>
                        <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                            <h1 className="display-5 mb-4" style={{color:'#2e5634'}}>Who we are?</h1>
                            <p className="mb-4">

                                In the "who are we" say " We are a non-profit organization striving to help our fellow Muslim brothers and sisters continue their higher level education without the worry of having to take out any haram loans. Our completely free interest policy helps provide loans in a completely Islamic sharia complaint way.
                            </p>
                            <div className="row g-4 text-dark mb-5">
                                <div className="col-sm-6">
                                    <i className="fas fa-share me-2"></i>Non-profit aiding Muslim education
                                </div>
                                <div className="col-sm-6">
                                    <i className="fas fa-share me-2"></i>Supports higher education pursuit
                                </div>
                                <div className="col-sm-6">
                                    <i className="fas fa-share me-2"></i>Offers interest-free loans
                                </div>
                                <div className="col-sm-6">
                                    <i className="fas fa-share me-2"></i>Ensures Islamic sharia compliance
                                </div>
                            </div>
                            <a href="#" className="btn py-3 px-5 rounded-pill" style={{backgroundColor:'#2e5634', color:'white'}}>Login to apply<i
                                className="fas fa-arrow-right ps-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}