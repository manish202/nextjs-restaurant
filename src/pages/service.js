import Head from "next/head";
import {Navbar,CommonHero} from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
const service = () => {
  return(
    <>
      <Head>
        <meta name="description" content="nextjs restaurant by manish prajapati" />
        <title>services page</title>
      </Head>
      <Navbar>
        <CommonHero title="Services" link="Service" />
      </Navbar>
      <Services />
      <Footer />
    </>
  )
}
export default service;