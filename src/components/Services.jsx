const data = [
    {icon:"fa fa-3x fa-user-tie text-primary mb-4",title:"Master Chefs",desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
    {icon:"fa fa-3x fa-utensils text-primary mb-4",title:"Quality Food",desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
    {icon:"fa fa-3x fa-cart-plus text-primary mb-4",title:"Online Order",desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
    {icon:"fa fa-3x fa-headset text-primary mb-4",title:"24/7 service",desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
    {icon:"fa fa-3x fa-user-tie text-primary mb-4",title:"Master Chefs",desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
    {icon:"fa fa-3x fa-utensils text-primary mb-4",title:"Quality Food",desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
    {icon:"fa fa-3x fa-cart-plus text-primary mb-4",title:"Online Order",desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
    {icon:"fa fa-3x fa-headset text-primary mb-4",title:"24/7 service",desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"}
]
const Services = () => {
    return(
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
                    <h1 className="mb-5">Explore Our Services</h1>
                </div>
                <div className="row g-4">
                    {data.map((val,ind) => {
                        return <div key={ind} className="col-lg-3 col-sm-6 wow fadeInUp">
                            <div className="service-item rounded pt-3">
                                <div className="p-4"><i className={val.icon}></i>
                                    <h5>{val.title}</h5>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Services;