import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";
const MenuItem = ({path,name}) => {
    const router = useRouter();
    return <Link href={path} className={`nav-item nav-link ${router.pathname == path ? 'active':''}`}>{name}</Link>
}
const BookTblBtn = ({cls}) => {
    return <Link href="/book_table" className={cls}>Book A Table</Link>
}
const data = [
    {path:"/",name:"Home"},{path:"/about",name:"About"},
    {path:"/service",name:"Service"},{path:"/menu",name:"Menu"},
    {path:"/team",name:"Our team"},{path:"/testimonials",name:"Testimonials"},
    {path:"/contact",name:"Contact"}
]
const Navbar = ({children}) => {
    const [toggle,chtoggle] = useState(false);
    return(
        <div className="container-xxl bg-white p-0">
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <Link href="/" className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                    </Link>
                    <button onClick={() => chtoggle(o => !o)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="fa fa-bars"></span></button>
                    <div className={`collapse navbar-collapse ${toggle ? 'show':''}`}>
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            {data.map((val,ind) => <MenuItem key={ind} path={val.path} name={val.name} />)}
                        </div>
                        <BookTblBtn cls="btn btn-primary py-2 px-4" />
                    </div>
                </nav>
                {children}
            </div>
        </div>
    )
}
const HomeHero = () => {
    return(
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                        <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <BookTblBtn cls="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft" />
                    </div>
                    <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                        <img className="img-fluid" src="/img/hero.png" alt="website template image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
const CommonHero = ({title,link}) => {
    return(
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">{link}</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}
export {Navbar,HomeHero,CommonHero};