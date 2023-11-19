import {useState} from "react";

const tabData = [
    {
        tid:1,
        data:[
            {img:"menu-1.jpg",title:"Chicken Burger 1",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"110"},
            {img:"menu-2.jpg",title:"Chicken Burger 1",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"120"},
            {img:"menu-3.jpg",title:"Chicken Burger 1",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"130"},
            {img:"menu-4.jpg",title:"Chicken Burger 1",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"140"},
            {img:"menu-5.jpg",title:"Chicken Burger 1",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"150"},
            {img:"menu-6.jpg",title:"Chicken Burger 1",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"160"},
            {img:"menu-7.jpg",title:"Chicken Burger 1",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"170"},
            {img:"menu-8.jpg",title:"Chicken Burger 1",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"180"}
        ]
    },
    {
        tid:2,
        data:[
            {img:"menu-3.jpg",title:"Chicken Burger 2",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"210"},
            {img:"menu-4.jpg",title:"Chicken Burger 2",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"220"},
            {img:"menu-6.jpg",title:"Chicken Burger 2",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"230"},
            {img:"menu-5.jpg",title:"Chicken Burger 2",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"240"},
            {img:"menu-8.jpg",title:"Chicken Burger 2",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"250"},
            {img:"menu-7.jpg",title:"Chicken Burger 2",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"260"},
            {img:"menu-1.jpg",title:"Chicken Burger 2",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"270"},
            {img:"menu-2.jpg",title:"Chicken Burger 2",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"280"}
        ]
    },
    {
        tid:3,
        data:[
            {img:"menu-4.jpg",title:"Chicken Burger 3",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"310"},
            {img:"menu-5.jpg",title:"Chicken Burger 3",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"320"},
            {img:"menu-6.jpg",title:"Chicken Burger 3",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"330"},
            {img:"menu-7.jpg",title:"Chicken Burger 3",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"340"},
            {img:"menu-8.jpg",title:"Chicken Burger 3",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"350"},
            {img:"menu-1.jpg",title:"Chicken Burger 3",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"360"},
            {img:"menu-2.jpg",title:"Chicken Burger 3",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"370"},
            {img:"menu-3.jpg",title:"Chicken Burger 3",desc:"Ipsum ipsum clita erat amet dolor justo diam",price:"380"}
        ]
    }
]
const TabMenu = ({chTab,id,tab,icon,small,h6}) => {
    return(
        <li onClick={() => chTab(id)} className="nav-item" style={{cursor:'pointer'}}>
            <a className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${id == tab ? 'active':''}`}>
                <i className={`fa ${icon} fa-2x text-primary`}></i>
                <div className="ps-3">
                    <small className="text-body">{small}</small>
                    <h6 className="mt-n1 mb-0">{h6}</h6>
                </div>
            </a>
        </li>
    )
}
const SingleItem = ({val}) => {
    const {img,title,desc,price} = val;
    return(
        <div className="col-lg-6">
            <div className="d-flex align-items-center">
                <img className="flex-shrink-0 img-fluid rounded" src={`/img/${img}`} alt="website template image" style={{width:'80px'}} />
                <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2"><span>{title}</span> <span className="text-primary">${price}</span></h5>
                    <small className="fst-italic">{desc}</small>
                </div>
            </div>
        </div>
    )
}
const TabItem = ({tid,tab}) => {
    const {data} = tabData.find((val) => val.tid == tid);
    return(
        <div className={`tab-pane fade p-0 ${tid == tab ? 'active show':''}`}>
            <div className="row g-4">
                {data.map((val,ind) => <SingleItem key={ind} val={val} />)}
            </div>
        </div>
    )
}
const FoodMenu = () => {
    const [tab,chTab] = useState(1);
    return(
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div className="tab-className text-center wow fadeInUp">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <TabMenu chTab={chTab} id="1" tab={tab} icon="fa-coffee" small="Popular" h6="Breakfast" />
                        <TabMenu chTab={chTab} id="2" tab={tab} icon="fa-hamburger" small="Special" h6="Launch" />
                        <TabMenu chTab={chTab} id="3" tab={tab} icon="fa-utensils" small="Lovely" h6="Dinner" />
                    </ul>
                    <div className="tab-content">
                        {tabData.map((val) => <TabItem key={val.tid} tid={val.tid} tab={tab} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FoodMenu;