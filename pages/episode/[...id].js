import React, { useState, useEffect, createRef } from 'react';
import { Router, useRouter } from 'next/router'

import config from '../../config';
import Layout from '../../components/episode/layout';
import ViewHead from '../../components/episode/view/view-head';
import ViewHeader from '../../components/episode/view/view-header';
import ViewContainer from '../../components/episode/view/view-container';
import ViewFooter from '../../components/episode/view/view-footer';
import ViewAudio from '../../components/episode/view/view-audio';
import ViewComment from '../../components/episode/view/view-comment';

import ViewEpisodeOne from '../../components/episode/view/view-episode-one';
import ViewEpisodeTwo from '../../components/episode/view/view-episode-two';
import ViewEpisodeThree from '../../components/episode/view/view-episode-three';


export default function EpisodeView({ staticPath, reqLang, reqLangIdx, post }) {
  const router = useRouter()
  const [lang, setLang] = useState(reqLang);
  const [languageIndex, setLanguageIndex] = useState(reqLangIdx); // languageIndex 0(영어), 1(일본어), 2(한국어)
  const [slideValue, setSlideValue] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const [urlPath, setUrlPath] = useState();
  const [bannerHide, setBannerHide] = useState(false);
  const [commentHide, setCommentHide] = useState(true);
  const [musicPlay, setMusicPlay] = useState(false);


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

    // 페이스북 댓글 (1~3화)
    if (post[0].link === '/episode/1' || post[0].link === '/episode/2' || post[0].link === '/episode/3') {
      let fbLang = '';
      e.target.value === 'ko' ? fbLang = 'ko_KR' : e.target.value === 'ja' ? fbLang = 'ja_JP' : fbLang = 'en_US';
      if( window.FB ) {
        // remove all instances of facebook and elements
        if (!('remove' in Element.prototype)) {
          Element.prototype['remove'] = function () {
            if (this.parentNode) {
              this.parentNode.removeChild(this);
            }
          };
        }
        document.getElementsByTagName("style")[0].remove();
        document.getElementsByTagName('script')[0].remove();
        document.getElementById('facebook-jssdk').remove();
        document.getElementById('fb-root').remove();
        delete window.FB;
      }
      setTimeout(function(){  
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src = '//connect.facebook.net/' + fbLang + '/sdk.js#xfbml=1&version=v5.0&appId=1035999959863117';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }, 500);
    }
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
    setUrlPath(document.location.origin + document.location.pathname)

    const htmlLang = document.getElementsByTagName('html')[0];
    htmlLang.setAttribute('lang', lang);

    const startCover = document.getElementById('start_cover');
    if (startCover) {
      window.setTimeout(function() {
        startCover.style.display = 'none';
      }, 2000);
    }

    const mobileCheck = Boolean( navigator.userAgent
      && (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
    )
    setIsMobile(mobileCheck)

    // var qs = (function(a) {
    //   if (a == "") return {};
    //   var b = {};
    //   for (var i = 0; i < a.length; ++i) {
    //     var p=a[i].split('=', 2);
    //     if (p.length == 1) {
    //       b[p[0]] = "";
    //     } else {
    //       b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    //     }
    //   }
    //   return b;
    // })(window.location.search.substr(1).split('&'));

    // if(qs['lang'] === undefined){
    //   languageCheck(window.navigator.language.substr(0, 2))
    // } else {
    //   switch(qs['lang']) {
    //     case 'en':
    //       languageCheck('en')
    //       break;
    //     case 'ja':
    //       languageCheck('ja')
    //       break;
    //     case 'ko':
    //       languageCheck('ko')
    //       break;
    //     default:
    //       languageCheck(window.navigator.language.substr(0, 2))
    //   }
    // }
  });


  // react-input-range-rtl에서 slideValue값 변경
  const inputRangeChange = (value) => {
    setSlideValue(value);
  }

  const bannerCloseClick = (e) => {
    e.preventDefault();
    setBannerHide(true);
  }

  const commentClick = (e) => {
    // e.preventDefault();
    setCommentHide(false);
    // 파이어폭스 알림
    // this.props.isFirefox === true ? document.querySelector('.notification').classList.add('on') : null;

    // 페이스북 댓글
    document.querySelector('.fb-comments').style.display = 'none';
    setTimeout(function(){
      document.querySelector('.fb-comments').style.display = 'block';
      let fbLang = '';
      lang === 'ko' ? fbLang = 'ko_KR' : lang === 'ja' ? fbLang = 'ja_JP' : fbLang = 'en_US';
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/' + fbLang + '/sdk.js#xfbml=1&version=v5.0&appId=1035999959863117';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }, 500);
  }

  const commentCloseClick = (e) => {
    e.preventDefault();
    setCommentHide(true);

    // 페이스북 댓글
    if( window.FB ) {
      // remove all instances of facebook and elements
      if (!('remove' in Element.prototype)) {
        Element.prototype['remove'] = function () {
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
        };
      }
      document.getElementsByTagName("style")[0].remove();
      document.getElementsByTagName('script')[0].remove();
      document.getElementById('facebook-jssdk').remove();
      document.getElementById('fb-root').remove();
      delete window.FB;
    }
  }

  const musicOnClick = (e) => {
    e.preventDefault();
    setMusicPlay(true);
    musicOn();
  }

  const musicOffClick = (e) => {
    e.preventDefault();
    setMusicPlay(false);
    document.querySelector('audio').pause();
  }

  const musicOn = () => {
    let promise = document.querySelector('audio').play();
    if (promise !== undefined) {
      promise.then(_ => {
        document.querySelector('audio').play();
      }).catch(error => {
        setMusicPlay(false);
        document.querySelector('audio').pause();
      });
    }
    document.querySelector('audio').volume = 0.2;
  }


  // Swiper parameters
  let clickCount = 0;
  let singleClickTimer;

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination.swiper-pagination-progress',
      type: 'progressbar',
      progressbarFillClass: 'swiper-pagination-progressbar',
      clickable: true
    },
    mousewheel: true,
    zoom: {
      maxRatio: 2
    },
    spaceBetween: 0,
    rtl: true,
    shouldSwiperUpdate: true,
    on: {
      slideChange: function() {
        const swIndex = this.activeIndex + 1;
        setSlideValue(swIndex);
        // 웹툰 슬라이드 전환 이벤트 GA코드
        ga('send', 'event', '웹툰 슬라이드 전환', swIndex+'컷 확인');
      },
      click: function(e) {
        // console.log(e);
        clickCount++;
        if (clickCount === 1) {
          singleClickTimer = setTimeout(function() {
            clickCount = 0;
            // singleClick(e);
            if (e.target.className === 'icon_star' || e.target.className === 'reply-btn' || e.target.className === 'btn_confirm' || e.target.className === 'swiper-button-next' || e.target.className === 'swiper-button-next' || e.target.className === 'swiper-button-next swiper-button-disabled' || e.target.className === 'swiper-button-prev' || e.target.className === 'swiper-button-prev swiper-button-disabled' || e.target.className === 'post-next-path' || e.target.className === 'bannerImg') {
              console.log(e.target.className);
            } else {
              document.getElementById('cbp-spmenu-s3').classList.toggle('cbp-spmenu-open');
              document.getElementById('cbp-spmenu-s4').classList.toggle('cbp-spmenu-open');
            }
          }, 400);
        } else if (clickCount === 2) {
          clearTimeout(singleClickTimer);
          clickCount = 0;
          // doubleClick(e);
          if (e.target.className === 'swiper-button-next' || e.target.className === 'swiper-button-next swiper-button-disabled' || e.target.className === 'swiper-button-prev' || e.target.className === 'swiper-button-prev swiper-button-disabled') {
            this.zoom.enabled = false;
          } else {
            this.zoom.enabled = true;
          }
          // react-id-swiper 모듈 rtl 모드로 zoomIn 한 후 터치하여 이미지 이동시 좌표가 반전되는 현상방지를 위해 아래 코드 추가
          if(this.zoom.currentScale === 1) {
            this.rtl = false;
          }
        }
      }
      // click: function(e) {
      //   if (e.target.className === 'icon_star' || e.target.className === 'reply-btn' || e.target.className === 'btn_confirm' || e.target.className === 'swiper-button-next' || e.target.className === 'swiper-button-next' || e.target.className === 'swiper-button-next swiper-button-disabled' || e.target.className === 'swiper-button-prev' || e.target.className === 'swiper-button-prev swiper-button-disabled' || e.target.className === 'post-next-path' || e.target.className === 'bannerImg') {
      //     console.log(e.target.className);
      //   } else {
      //     document.getElementById('cbp-spmenu-s3').classList.toggle('cbp-spmenu-open');
      //     document.getElementById('cbp-spmenu-s4').classList.toggle('cbp-spmenu-open');
      //   }
      // },
      // doubleTap: function(e) {
      //   if (e.target.className === 'swiper-button-next' || e.target.className === 'swiper-button-next swiper-button-disabled' || e.target.className === 'swiper-button-prev' || e.target.className === 'swiper-button-prev swiper-button-disabled') {
      //     this.zoom.enabled = false;
      //   } else {
      //     this.zoom.enabled = true;
      //   }
      //   // react-id-swiper 모듈 rtl 모드로 zoomIn 한 후 터치하여 이미지 이동시 좌표가 반전되는 현상방지를 위해 아래 코드 추가
      //   if(this.zoom.currentScale === 1) {
      //     this.rtl = false;
      //   }
      // }
    }
  }


  


  return (
    <>
      {post[0].link === '/episode/1' ?
        <ViewEpisodeOne post={post[0]} languageIndex={languageIndex} isMobile={isMobile} lang={lang} langChange={langChange} urlPath={urlPath} staticPath={staticPath} />
      : post[0].link === '/episode/2' ?
        <ViewEpisodeTwo post={post[0]} languageIndex={languageIndex} isMobile={isMobile} lang={lang} langChange={langChange} urlPath={urlPath} staticPath={staticPath} />
      : post[0].link === '/episode/3' ?
        <ViewEpisodeThree post={post[0]} languageIndex={languageIndex} isMobile={isMobile} lang={lang} langChange={langChange} urlPath={urlPath} staticPath={staticPath} />
      :
        <Layout staticPath={staticPath}>
          <ViewHead post={post[0]} languageIndex={languageIndex} lang={lang} urlPath={urlPath} />
          <ViewHeader post={post[0]} languageIndex={languageIndex} lang={lang} musicPlay={musicPlay} musicOnClick={musicOnClick} musicOffClick={musicOffClick} staticPath={staticPath} />
          <ViewContainer post={post[0]} languageIndex={languageIndex} lang={lang} params={params} slideValue={slideValue} isMobile={isMobile} commentClick={commentClick} inputRangeChange={inputRangeChange} staticPath={staticPath} />
          <ViewFooter post={post[0]} languageIndex={languageIndex} lang={lang} slideValue={slideValue} inputRangeChange={inputRangeChange} langChange={langChange} isMobile={isMobile} commentClick={commentClick} bannerCloseClick={bannerCloseClick} bannerHide={bannerHide} urlPath={urlPath} staticPath={staticPath} />

          {post[0].epIndex === '04' ?
            <ViewAudio mp3={staticPath + "/assets/mp3/kroog.mp3"} />
          : post[0].epIndex === '05' ?
            <ViewAudio mp3={staticPath + "/assets/mp3/timmy.mp3"} />
          : null
          }

          <ViewComment lang={lang} commentHide={commentHide} commentCloseClick={commentCloseClick} urlPath={urlPath} staticPath={staticPath} />
        </Layout>
      }
    </>
  )
}



// export async function getStaticPaths() {
//   const res = await fetch('https://rc-xxx.xxx.com/episode-data')
//   const posts = await res.json()
//   const paths = posts.map((post) => post.link)
//   return { paths, fallback: false }
// }



// export async function getStaticProps({ params }) {
//   const res = await fetch(`https://rc-xxx.xxx.com/episode-data?link=/episode/${params.id.join('/')}`)
//   const post = await res.json()
//   return {
//     props: {
//       staticPath: config.staticPath,
//       post
//     },
//   }
// }



export async function getServerSideProps({ params, req, query }) {
  const res = config.serverName === 'www.xxx.com' ? await fetch(`https://xxx.xxx.com/episode-data?link=/episode/${params.id.join('/')}`) : await fetch(`https://rc-xxx.xxx.com/episode-data?link=/episode/${params.id.join('/')}`);
  const post = await res.json();
  
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
      post
    },
  }
}