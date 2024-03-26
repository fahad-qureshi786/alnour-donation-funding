export default function HeroSection() {
    return(
        <>
            <div className="container-fluid py-6 my-6 mt-0" style={{backgroundColor:'#77d586'}}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <small
                                className="d-inline-block fw-bold text-uppercase border rounded-pill px-4 py-1 mb-4 animated bounceInDown" style={{backgroundColor:'#2e5634', color:'white'}}>About Corporation</small>
                            <h1 className="display-1 mb-4 animated bounceInDown" style={{color:'white'}}>Empowering dreams with interest-free
                                <span style={{color:'#2e5634'}}> halal loans</span></h1>

                        </div>
                        <div className="col-lg-5 col-md-12">
                            <img src="/img/donation/img.png" className="img-fluid rounded animated zoomIn" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}