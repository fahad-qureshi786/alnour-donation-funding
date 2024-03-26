export default function Footer(){
    return (
        <>
            <div className="container-fluid copyright py-4" style={{backgroundColor:'#2e5634'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <span className="text-light"><a href="#" style={{color:'#77d586'}}><i className="fas fa-copyright text-light me-2"></i>
                    Al Nour</a>, All right reserved.</span>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end my-auto text-center text-md-end text-white">
                            <a className="mt-2 me-2" href="#" style={{color:'#77d586'}}> Al Nour</a>
                            <a className="btn btn-sm-square me-2 rounded-circle" href="#" style={{color:'#77d586', backgroundColor:'white'}}><i
                                className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-sm-square me-2 rounded-circle" href="#" style={{color:'#77d586', backgroundColor:'white'}}><i
                                className="fab fa-twitter"></i></a>
                            <a href="#" className="btn btn-sm-square me-2 rounded-circle" style={{color:'#77d586', backgroundColor:'white'}}><i
                                className="fab fa-instagram"></i></a>
                            <a href="#" className="btn btn-sm-square rounded-circle" style={{color:'#77d586', backgroundColor:'white'}}><i
                                className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}