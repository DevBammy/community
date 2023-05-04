import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Layout from "./Layout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Community StarTechOne</title>
        <meta
          name="description"
          content="Online Community Powered by StarTechOne Nigeria Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
