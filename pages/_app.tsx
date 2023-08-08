import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import "../styles/common.css";
import "../styles/fonts.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
