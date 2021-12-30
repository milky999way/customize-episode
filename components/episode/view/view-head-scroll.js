import Head from 'next/head';

export default function ViewHeadScroll({ urlPath, staticPath, lang, languageIndex, post }) {
  return (
    <Head>
      <title>{post.languageItem[languageIndex].title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="description" content={post.languageItem[languageIndex].subtitle} />
      <meta property="og:url" content={urlPath + "?lang=" + lang} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={post.languageItem[languageIndex].title} />
      <meta property="og:description" content={post.languageItem[languageIndex].subtitle} />
      <meta property="og:image" content={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'share.png' ? url.src : null }).join('')} />
      <meta property="fb:app_id" content="1035999959863117" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@xxx" />
      <meta property="twitter:title" content={post.languageItem[languageIndex].title} />
      <meta property="twitter:description" content={post.languageItem[languageIndex].subtitle} />
      <meta property="twitter:image" content={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'share.png' ? url.src : null }).join('')} />
      <link href={staticPath + "/assets/img/favicon.ico"} rel="shortcut icon" type="image/x-icon" />
      <link href={staticPath + "/assets/css/common.css"} rel="stylesheet" media="all" />
      {/* <style type="text/css">
        {`
          #__next{height:100%;overflow:hidden;}
          .cut_01{position:relative;}
          .cut{margin-bottom:20px;}
        `}
      </style> */}
      <script src={staticPath + "/assets/js/jquery-1.11.3.min.js"} type="text/javascript"></script>
      <script src={staticPath + "/assets/js/jquery.imgpreload.min.js"} type="text/javascript"></script>
      <script src={staticPath + "/assets/js/jquery.easing.1.3.js"} type="text/javascript"></script>
      <script src={staticPath + "/assets/js/jquery.mousewheel.min.js"} type="text/javascript"></script>
      <script src={staticPath + "/assets/js/jquery.transform2d.js"} type="text/javascript"></script>
      <script src={staticPath + "/assets/js/enscroll.js"} type="text/javascript"></script>
      <script src={staticPath + "/assets/js/ifvisible.min.js"} type="text/javascript"></script>
      <script src={staticPath + "/assets/js/common.js"} type="text/javascript"></script>
      <script src={staticPath + "/assets/js/analytics.js"} type="text/javascript"></script>
    </Head>
  )
}