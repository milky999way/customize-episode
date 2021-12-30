import React, { useState, useEffect } from 'react';
import { Router } from 'next/router'
import Head from 'next/head';

export default function Layout({ staticPath, children }) {
  // const [loading, setLoading] = useState(null)

  // Router.events.on('routeChangeStart', () => {
  //   setLoading(true)
  // });
  // Router.events.on('routeChangeComplete', () => {
  //   setLoading(false)
  // });

  // console.log(children)
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
        <link href={staticPath + "/assets/img/favicon.ico"} rel="shortcut icon" type="image/x-icon" />

        {/* 리스트페이지 css */}
        <link href={staticPath + "/assets/css/style.css"} rel="stylesheet" type="text/css" />
        <link href={staticPath + "/assets/css/framework.css"} rel="stylesheet" type="text/css" />
        {/* 공통 css */}
        <link href={staticPath + "/assets/css/menu-default.css"} rel="stylesheet" type="text/css" />
        <link href={staticPath + "/assets/css/xxx.min.css"} rel="stylesheet" type="text/css" />
        {/* 뷰페이지 css */}
        <link href={staticPath + "/assets/css/menu-component.css"} rel="stylesheet" type="text/css" />
        <link href={staticPath + "/assets/css/sub-style.css"} rel="stylesheet" type="text/css" />
        {/* 공통 js */}
        <script src={staticPath + "/assets/js/jquery.js"} type="text/javascript"></script>
        <script src={staticPath + "/assets/js/analytics.new.js"} type="text/javascript"></script>
      </Head>
      <div className={children.length > 4 ? "episode_view" : "episode_list"}>{children}</div>
    </>
  )
}