export default function ContactUs(){
    return (
        <>
            <div  style={{backgroundColor:'#77d586'}} id="contact-us" className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="p-5  ">
                        <div className="justify-content-center d-flex flex-column align-items-center">
                            <div className="col-md-6 col-lg-7">
                                <h1 className="display-5 mb-3 text-center" style={{color:'white'}}>Contact Us!</h1>
                                <form>
                                    <input type="text" className="w-100 form-control p-3 mb-4 bg-light"
                                           placeholder="Your Name" />
                                    <input type="email"
                                           className="w-100 form-control p-3 mb-4 bg-light"
                                           placeholder="Enter Your Email" />
                                    <textarea className="w-100 form-control mb-4 p-3 bg-light"
                                              rows="4" cols="10" placeholder="Your Message"></textarea>
                                    <button
                                        className="w-100 btn form-control p-3 rounded-pill" style={{backgroundColor:'#2e5634', color:'white'}}
                                        type="submit">Submit Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}