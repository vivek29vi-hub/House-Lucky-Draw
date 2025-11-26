import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>India Dream Lucky Draw - Win a House!</title>
        <meta name="description" content="Enter ₹3,000 lucky draw to win a residential house or land in India" />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
