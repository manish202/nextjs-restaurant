const Card = ({val}) => {
    const {img,name,desi} = val;
    return(
        <div className="col-lg-3 col-md-6 wow fadeInUp">
            <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src={`/img/${img}`} alt="website template image" />
                </div>
                <h5 className="mb-0">{name}</h5>
                <small>{desi}</small>
                <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}
const data = [
    {img:"team-1.jpg",name:"Manish Prajapati",desi:"Designation"},
    {img:"team-2.jpg",name:"Manish Prajapati",desi:"Designation"},
    {img:"team-3.jpg",name:"Manish Prajapati",desi:"Designation"},
    {img:"team-4.jpg",name:"Manish Prajapati",desi:"Designation"},
    {img:"team-3.jpg",name:"Manish Prajapati",desi:"Designation"},
    {img:"team-2.jpg",name:"Manish Prajapati",desi:"Designation"},
    {img:"team-4.jpg",name:"Manish Prajapati",desi:"Designation"},
    {img:"team-1.jpg",name:"Manish Prajapati",desi:"Designation"}
];
const Team = () => {
    return(
        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    {data.map((val,ind) => <Card key={ind} val={val} />)}
                </div>
            </div>
        </div>
    )
}
export default Team;