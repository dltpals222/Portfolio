import React from "react";
import { AppProps } from "next/app";

// IMPORT CSS
import "../styles/public/globals.css";
import "../styles/public/common.css";
import "../styles/font/fonts.css";
import "../styles/font/pretendard.css";
import "../styles/font/pretendard-subset.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
