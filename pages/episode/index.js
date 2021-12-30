import React, { useState, useEffect } from 'react';

import config from '../../config';
import Layout from '../../components/episode/layout';
import ListHead from '../../components/episode/list/list-head';
import ListHeader from '../../components/episode/list/list-header';
import ListContainer from '../../components/episode/list/list-container';
import ListFooter from '../../components/episode/list/list-footer';





export default function Episode({ staticPath, reqLang, reqLangIdx, posts }) {
  const [lang, setLang] = useState(reqLang);
  const [languageIndex, setLanguageIndex] = useState(reqLangIdx);


  const languageCheck = (value) => {
    setLang(value)
    switch(value) {
      case 'ja':
        setLanguageIndex(1)
        break;
      case 'ko':
        setLanguageIndex(2)
        break;
      default:
        setLanguageIndex(0)
    }
  }

  const langChange = (e) => {
    updateQueryStringParam('lang', e.target.value)
    languageCheck(e.target.value)
  }

  const updateQueryStringParam = (key, value) => {
    let baseUrl = [window.location.protocol, '//', window.location.host, window.location.pathname].join(''),
        urlQueryString = document.location.search,
        newParam = key + '=' + value,
        params = '?' + newParam;
    // If the "search" string exists, then build params from it
    if (urlQueryString) {
      let keyRegex = new RegExp('([?&])' + key + '[^&]*');
      // If param exists already, update it
      if (urlQueryString.match(keyRegex) !== null) {
        params = urlQueryString.replace(keyRegex, "$1" + newParam);
      } else { // Otherwise, add it to end of query string
        params = urlQueryString + '&' + newParam;
      }
    }
    window.history.replaceState({}, "", baseUrl + params);
  }

  useEffect(() => {
    const htmlLang = document.getElementsByTagName('html')[0];
    htmlLang.setAttribute('lang', lang);
  });

  return (
    <Layout staticPath={staticPath}>
      <ListHead lang={lang} />
      <ListHeader lang={lang} langChange={langChange} staticPath={staticPath} />
      <ListContainer lang={lang} languageIndex={languageIndex} posts={posts} staticPath={staticPath} />
      <ListFooter />
    </Layout>
  )
}



// export async function getStaticProps() {
//   const res = await fetch('https://rc-xxx.xxx.com/episode-data')
//   const postsData = await res.json()
//   const posts = postsData.reverse()
//   return {
//     props: {
//       staticPath: config.staticPath,
//       posts
//     },
//   }
// }



export async function getServerSideProps({ req, query }) {
  const res = config.serverName === 'www.xxx.com' ? await fetch('https://xxx.xxx.com/episode-data?_sort=index:ASC') : await fetch('https://rc-xxx.xxx.com/episode-data?_sort=index:ASC');
  const postsData = await res.json();
  const posts = postsData.reverse();

  const reqLanguage = req.headers['accept-language'] !== undefined ? req.headers['accept-language'].substr(0, 2) : 'en';
  let reqLang = 'en';
  let reqLangIdx = 0;
  if(query.lang !== undefined) {
    reqLang = query.lang;
  } else if (reqLanguage) {
    reqLang = reqLanguage;
  }
  switch(reqLang) {
    case "ko":
      reqLangIdx = 2;
      break;
    case "ja":
      reqLangIdx = 1;
      break;
    default:
      reqLangIdx = 0;
      reqLang = 'en';
  }

  return {
    props: {
      staticPath: config.staticPath,
      reqLang,
      reqLangIdx,
      posts
    },
  }
}