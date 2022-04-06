import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ChessWear.com </title>
        <meta name="description" content="ChessWear.com - Wear the Chess" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold text-red-600 underline">
        Hello world!
      </h1>
    </div>
  );
}
