import Head from 'next/head';

export default function ViewHead({ urlPath, lang, languageIndex, post }) {
  return (
    <Head>
      <title>{post.languageItem[languageIndex].title}</title>
      <meta name="description" content={post.languageItem[languageIndex].subtitle} />
      <meta property="og:url" content={urlPath + "?lang=" + lang} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={post.languageItem[languageIndex].title} />
      <meta property="og:description" content={post.languageItem[languageIndex].subtitle} />
      <meta property="og:image" content={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'share.png' ? url.src : null }).join('')} />
      <meta property="fb:app_id" content="1035999959863117" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@xxx" />
      <meta property="twitter:title" content={post.languageItem[languageIndex].title} />
      <meta property="twitter:description" content={post.languageItem[languageIndex].subtitle} />
      <meta property="twitter:image" content={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'share.png' ? url.src : null }).join('')} />
    </Head>
  )
}