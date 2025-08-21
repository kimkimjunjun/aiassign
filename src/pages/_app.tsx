import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { enableStaticRendering } from "mobx-react-lite";

enableStaticRendering(typeof window === "undefined");

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
