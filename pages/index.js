import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ChessWear.com </title>
        <meta name="description" content="ChessWear.com - Wear the Chess" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar />
    <div>
    <img src="/img1.jpg" />
    </div>
    <Footer />
    </div>
  );
}
