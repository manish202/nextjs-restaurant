import Head from "next/head";
import {Navbar,CommonHero} from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const contact = () => {
  return(
    <>
      <Head>
        <meta name="description" content="nextjs restaurant by manish prajapati" />
        <title>contact page</title>
      </Head>
      <Navbar>
        <CommonHero title="Contact Us" link="contact" />
      </Navbar>
      <Contact />
      <Footer />
    </>
  )
}
export default contact;