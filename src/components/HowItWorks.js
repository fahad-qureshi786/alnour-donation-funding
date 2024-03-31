export default function HowItWorks(){
    return (
        <>
            <div id={"how-it-works"}  style={{backgroundColor:'#77d586'}} className="container-fluid py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <h1 className="display-5 mb-5" style={{color:'white'}}>How <span style={{color:'#2e5634'}}>Al Nour</span> Works!</h1>
                    </div>
                    <div className="row"
                         data-wow-delay="0.1s">
                        <div className="col-sm-12 col-md-12  col-lg-3  rounded bg-light">
                            <img width={'100%'} src="/img/working/step-one.png" alt=""/>
                        </div>
                        <div className="col-sm-12 ms-2 col-md-12 col-lg-4   rounded bg-light">
                            <img width={'100%'}  src="/img/working/step-two.png" alt=""/>
                        </div>
                        <div className="col-sm-12 ms-2 col-md-12 col-lg-4   rounded bg-light">
                            <img width={'100%'}  src="/img/working/step-three.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
