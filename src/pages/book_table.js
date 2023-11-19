import Head from "next/head";
import {Navbar,CommonHero} from "@/components/Navbar";
import BookTable from "@/components/BookTable";
import Footer from "@/components/Footer";
const bookTable = () => {
  return(
    <>
      <Head>
        <meta name="description" content="nextjs restaurant by manish prajapati" />
        <title>book table now</title>
      </Head>
      <Navbar>
        <CommonHero title="Book A Table" link="book table" />
      </Navbar>
      <BookTable />
      <Footer />
    </>
  )
}
export default bookTable;