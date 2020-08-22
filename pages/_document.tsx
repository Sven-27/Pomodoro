import Document, { Head, Main, NextScript, Html } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface DocumentProps {
  styleTags: Array<React.ReactElement<[]>>;
}

// Basicly here i'm configure to server do the first render on server-side with styledComponents check it out !!!
export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="pt-BR">
        {/*Note if i delete this line, all my styled-components don't show upp on my screen ... */}
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
