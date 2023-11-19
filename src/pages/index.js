import Head from "next/head";
import {Navbar,HomeHero} from "@/components/Navbar";
import Services from "@/components/Services";
import About from "@/components/About";
import FoodMenu from "@/components/FoodMenu";
import BookTable from "@/components/BookTable";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
const home = () => {
  return(
    <>
      <Head>
        <meta name="description" content="nextjs restaurant by manish prajapati" />
        <title>home page</title>
      </Head>
      <Navbar>
        <HomeHero />
      </Navbar>
      <Services />
      <About />
      <FoodMenu />
      <BookTable />
      <Team />
      <Testimonials />
      <Footer />
    </>
  )
}
export default home;