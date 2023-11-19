const Card = () => {
    return(
        <div className="owl-item cloned m-3" style={{maxWidth:'400px'}}>
            <style jsx>{`.owl-item:hover{background-color:#FEA116;}`}</style>
            <div className="testimonial-item bg-transparent border rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                    <img src="/img/testimonial-2.jpg" alt="website template image" className="img-fluid flex-shrink-0 rounded-circle" style={{width:'50px',height:'50px'}} />
                    <div className="ps-3">
                        <h5 className="mb-1">Client Name</h5>
                        <small>Profession</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Testimonials = () => {
    return(
        <div className="container-xxl py-5 wow fadeInUp">
            <div className="container">
                <div className="text-center">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                    <h1 className="mb-5">Our Clients Say!!!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel owl-loaded owl-drag">     
                    <div className="owl-stage-outer">
                        <div className="owl-stage d-flex flex-wrap justify-content-around">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;