import Head from "next/head";
import {Navbar,CommonHero} from "@/components/Navbar";
import FoodMenu from "@/components/FoodMenu";
import Footer from "@/components/Footer";
const menu = () => {
  return(
    <>
      <Head>
        <meta name="description" content="nextjs restaurant by manish prajapati" />
        <title>food menu page</title>
      </Head>
      <Navbar>
        <CommonHero title="Food Menu" link="Menu" />
      </Navbar>
      <FoodMenu />
      <Footer />
    </>
  )
}
export default menu;