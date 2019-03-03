import React from "react";
import Head from "next/head";

function renderHead(title) {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
    </Head>
  );
}

export default renderHead;
