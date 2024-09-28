import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <p>Header</p> */}
      <Component {...pageProps} />
      {/* <p>footer</p> */}
    </>
  );
}

export default MyApp;
