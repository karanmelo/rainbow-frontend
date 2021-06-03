import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head: React.FC = () => (
  <NextHead>
    <meta charSet='utf-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta name='description' content='Description' />
    <meta name='keywords' content='Keywords' />

    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#317EFB" />

    <title>Rainbow</title>
    <link rel="icon" href="/favicon.png" />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet" />
  </NextHead>
);

export default Head;