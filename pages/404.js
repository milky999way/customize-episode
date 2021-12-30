import Head from 'next/head';
import React, { useState, useEffect } from 'react';

export default function Custom404() {
  const [errorLang, setErrorLang] = useState('en');

  useEffect(() => {
    //언어
    var getLang = getParam("lang");
      if(getLang == "") {
        getLang = navigator.language.substr(0, 2);
      if(getLang != "ja") getLang = "en";
    }
    //터치디바이스 체크
    var isMobile = 'ontouchstart' in window || navigator.maxTouchPoints;
    $(function() {
      $("body").addClass(getLang);
      $("#viewport").animate({ opacity:1 }, 200);
      //화면 리사이즈
      if(isMobile) {
        var getWidth = $(window).width();
        var getRatio = getWidth / 670;
        if(getRatio < 1) {
          // pageRatio = getRatio;
          $('head').append('<meta name="viewport" content="width=device-width, initial-scale=' + getRatio + ', minimum-scale=' + getRatio + ', maximum-scale=' + getRatio + ', user-scalable=no, target-densitydpi=device-dpi">');
        }
      }
    });
    function getParam(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return "";
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    setErrorLang(getLang)
  })

  return (
    <>
      <Head>
        <title>404 (Not Found)</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <link href="https://static.xxx.com/xxx-main/css/common.css" rel="stylesheet" media="all" />
        <style type="text/css">
          {`
            .error_wrap{margin:0 auto;width:670px}
            .error_wrap .text_box{padding-top:60px;text-align:center}
            .error_wrap .text_box p{line-height:1.6em;font-size:18px}
            .error_wrap .text_box .title{margin-bottom:15px;font-size:40px}
            .error_wrap .img_box{text-align:center}
            #viewport{filter:alpha(opacity=0);opacity:0}
          `}
        </style>
        <script src="https://static.xxx.com/xxx-main/js/jquery-1.11.3.min.js"></script>
      </Head>
      <div id="viewport">
        <div className="error_wrap">
          <div className="text_box">
            <h1 className="title">404 (Not Found)</h1>
            <p className="text">{errorLang === "ja" ? "申し訳ありません、お探しのページが見つかりませんでした。" : "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}</p>
          </div>
          <div className="img_box">
            <img src="https://static.xxx.com/xxx-main/img/error.gif" alt="" className="img" />
          </div>
        </div>
        <div className="banner_panel">
          <div className="banner_area">
            <div className="lang_box">
              <a href="?lang=ja" className="btn_ja">日本語</a>
              <a href="?lang=en" className="btn_en">English</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}