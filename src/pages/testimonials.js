import Head from "next/head";
import {Navbar,CommonHero} from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
const testimonials = () => {
  return(
    <>
      <Head>
        <meta name="description" content="nextjs restaurant by manish prajapati" />
        <title>testimonials page</title>
      </Head>
      <Navbar>
        <CommonHero title="Testimonials" link="Tstimonials" />
      </Navbar>
      <Testimonials />
      <Footer />
    </>
  )
}
export default testimonials;