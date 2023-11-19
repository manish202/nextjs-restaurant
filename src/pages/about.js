import Head from "next/head";
import {Navbar,CommonHero} from "@/components/Navbar";
import About from "@/components/About";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
const about = () => {
  return(
    <>
      <Head>
        <meta name="description" content="nextjs restaurant by manish prajapati" />
        <title>about page</title>
      </Head>
      <Navbar>
        <CommonHero title="About Us" link="About" />
      </Navbar>
      <About />
      <Team />
      <Footer />
    </>
  )
}
export default about;