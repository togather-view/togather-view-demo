import { memo } from "react";
import { DefaultSeo } from "@src/components/seo/Seo.component";

import "@src/styles/variables.less";
import "@src/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <DefaultSeo />
      <Component {...pageProps} />
    </div>
  );
}

export default memo(MyApp);
