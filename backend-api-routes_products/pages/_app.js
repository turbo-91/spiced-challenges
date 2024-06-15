import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const fetcher = (url) => fetch(url).then((response) => response.json());
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}
