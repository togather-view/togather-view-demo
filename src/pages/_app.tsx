import { DefaultSeo } from "@src/components/seo/Seo.component";

import "@src/styles/antd-custom.css";
import "@src/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <DefaultSeo />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
