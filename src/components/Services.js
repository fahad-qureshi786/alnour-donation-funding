export default function Services(){
    return (
        <>
            <div  style={{backgroundColor:'#77d586'}} className="container-fluid py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <h1 className="display-5 mb-5" style={{color:'white'}}>How <span style={{color:'#2e5634'}}>Al Nour</span> Works!</h1>
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
        </>
    );
}