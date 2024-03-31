export default function Header(){
    return (
        <>
            <div className="container-fluid nav-bar">
                <div className="container">
                    <nav className="navbar navbar-light navbar-expand-lg py-4">
                        <a href="index.html" className="navbar-brand">
                            <h1 className="fw-bold mb-0" style={{color:'#2e5634'}}>Al <span className="text-dark">Nour</span></h1>
                        </a>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <a href="#how-it-works" className="nav-item nav-link">How it works?</a>
                                <a href="#about-us" className="nav-item nav-link">About Us</a>
                                <a href="#donate" className="nav-item nav-link">Donate</a>
                                <a href="#contact-us" className="nav-item nav-link">Contact Us</a>
                            </div>
                            <a href="https://loan-app-dashboard-frontend.vercel.app/" target={"_self"} className="btn py-2 px-4 d-none d-xl-inline-block rounded-pill" style={{background:'#2e5634', color:'white'}}>Login</a>
                        </div>
                    </nav>
                </div>
            </div>

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

        </>
    )
}
