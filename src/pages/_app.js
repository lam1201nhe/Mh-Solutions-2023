import ResizeWrapper from "@/helper/ResizerWrapper";
import "@/styles/globals.scss";
import Layout from "../components/Layouts";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return (
    <ResizeWrapper>{getLayout(<Component {...pageProps} />)}</ResizeWrapper>
  );
}

