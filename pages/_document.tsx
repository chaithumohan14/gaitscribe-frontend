import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: { renderPage: any }) {
    return renderPage();
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
