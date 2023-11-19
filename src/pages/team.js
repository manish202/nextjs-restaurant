import Head from "next/head";
import {Navbar,CommonHero} from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
const team = () => {
  return(
    <>
      <Head>
        <meta name="description" content="nextjs restaurant by manish prajapati" />
        <title>our team page</title>
      </Head>
      <Navbar>
        <CommonHero title="Our Team" link="Team" />
      </Navbar>
      <Team />
      <Footer />
    </>
  )
}
export default team;