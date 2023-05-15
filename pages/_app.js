import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Layout from "./Layout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          StarTechOne Community - Empowering Tech Innovators and Driving
          Positive Change
        </title>
        <meta
          name="description"
          content=" Join an online community of tech enthusiasts, educators, and professionals who share knowledge and ideas about technology. Attend events, register for programs, and collaborate with like-minded individuals to succeed in the dynamic tech industry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={inter.className}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </main>
    </>
  );
}
