export default function Donate(){
    return(
        <>
            <div id="donate" className="container-fluid faqt py-6">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7">
                            <h1 className="display-1 mb-4 animated bounceInDown" style={{fontSize:'3rem'}}>
                                Here say this quote "When a man dies, his good deeds come to an end except three. Ongoing charity, beneficial knowledge, and a righteous child who will pray for him."(Muslim) <span className="text-primary"></span></h1>
                            <a target={"_blank"} href="https://donate.stripe.com/28o4jOcWK1occCs9AA">
                                <button
                                    className="w-50 btn form-control p-3 rounded-pill" style={{fontSize:'3rem', color:'white', backgroundColor:'#2e5634'}}
                                    type="submit">Donate
                                </button>
                            </a>
                        </div>
                        <img src="/img/donation/img_3.png" alt="" style={{width:'400px', height:'400px'}}/>
                    </div>
                </div>
            </div>

        </>
    );
}
