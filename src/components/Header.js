export default function Header(){
    return (
        <>
            <div className="container-fluid nav-bar">
                <div className="container">
                    <nav className="navbar navbar-light navbar-expand-lg py-4">
                        <a href="/" className="navbar-brand">
                            <h1 className="text-primary fw-bold mb-0">Storied<span className="text-dark">Life</span>
                            </h1>
                        </a>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
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
                            <a href="" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Get
                                App</a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
