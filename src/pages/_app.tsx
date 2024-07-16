import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { Providers } from "../containers/providers";

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <Providers>
      {getLayout(<Component {...pageProps} />)}
    </Providers>
  );
}

export default MyApp;
