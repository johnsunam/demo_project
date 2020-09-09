import { handleAuthSSR } from "../utils/auth";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (ctx) => {
  await handleAuthSSR(ctx);
  return {}
}
export default MyApp
