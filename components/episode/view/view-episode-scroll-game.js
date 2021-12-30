import React, { useState, useEffect } from 'react';

export default function ViewEpisodeSrollGame({ staticPath, lang, isMobile, post }) {
  const [userLang, setUserLang] = useState();
  const [lineGame, setLineGame] = useState(false);
  const [pkpkLink, setPkpkLink] = useState('https://play.google.com/store/apps/details?id=com.nhnent.SKxxx');

  useEffect(() => {
    setUserLang(window.navigator.language.substr(0, 5));
    // 라인 플랫폼 서비스 국가
    if(userLang === "ja" || userLang === "ja-JP" || userLang === "th" || userLang === "th-TH" || userLang === "id" || userLang === "id-ID" || userLang === "zh-tw" || userLang === "zh-TW"){
      setLineGame(true)
    }
    // Android-iOS 링크 구분
    if(/iPad|iPhone|iPod/i.test(navigator.userAgent)){
      setPkpkLink('itms-apps://apps.apple.com/app/id977918624');
    }
  });

  return (
    <div id="game_content">
      <div className="contains">
        {lineGame === true ?
        <ul className="share_list">
          <li>
            <a className="btn_share line ga-event" data-category="game_banner" data-event="xxx_mobile" href="http://lgurl.line.me/w2/8bh3mumhxlfx" target="_blank" rel="noopener noreferrer">
              <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx.jpg' ? url.src : null }).join('')} alt="xxx" className="icon" />
              {/* <img alt="xxx" className="icon" src={staticPath + "/assets/img/app_xxx.jpg"} /> */}
              <span className="title">{lang === 'ja' ? 'ポコパン' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
            </a>
          </li>
          <li className="buttons btn_store">
            <a className="btn_store app ga-event" data-category="game_banner" data-event="xxx_apple_store" href={lang === 'ja' ? "https://itunes.apple.com/jp/app/id609427383" : "https://itunes.apple.com/us/app/id609427383"} target="_blank" rel="noopener noreferrer">
              <img alt="Apple Store" className="icon" src={staticPath + "/assets/img/btn_store_apple.png"} />
            </a>
            <a className="btn_store google ga-event" data-category="game_banner" data-event="xxx_google_play" href="https://play.google.com/store/apps/details?id=jp.naver.SJLGPP" target="_blank" rel="noopener noreferrer">
              <img alt="Google Play" className="icon" src={staticPath + "/assets/img/btn_store_google.png"} />
            </a>
          </li>
          <li>
            <a className="btn_share line ga-event" data-category="game_banner" data-event="xxx_mobile" href="http://lgurl.line.me/w2/lg2rlzwknddk" target="_blank" rel="noopener noreferrer">
              <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx.jpg' ? url.src : null }).join('')} alt="xxx" className="icon" />
              {/* <img alt="xxx" className="icon" src={staticPath + "/assets/img/app_xxx.jpg"} /> */}
              <span className="title">{lang === 'ja' ? 'ポコポコ' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
            </a>
          </li>
          <li className="buttons btn_store">
            <a className="btn_store app ga-event" data-category="game_banner" data-event="xxx_apple_store" href="https://itunes.apple.com/jp/app/id888615473" target="_blank" rel="noopener noreferrer">
              <img alt="Apple Store" className="icon" src={staticPath + "/assets/img/btn_store_apple.png"} />
            </a>
            <a className="btn_store google ga-event" data-category="game_banner" data-event="xxx_google_play" href="https://play.google.com/store/apps/details?id=com.linecorp.LGPKPK" target="_blank" rel="noopener noreferrer">
              <img alt="Google Play" className="icon" src={staticPath + "/assets/img/btn_store_google.png"} />
            </a>
          </li>
        </ul>
        : lineGame === false && (userLang === "ko" || userLang === "ko-KR") ?
        <ul className="share_list" style={isMobile === true ? {width:"150px", margin:"0 auto 60px"} : {width:"270px", margin:"0 auto 60px"}}>
          <li>
            <a className="btn_share line ga-event" data-category="game_banner" data-event="xxx_mobile" href="" target="_blank" rel="noopener noreferrer">
              <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx_global.jpg' ? url.src : null }).join('')} alt="xxx GLOBAL" className="icon" />
              {/* <img alt="xxx GLOBAL" className="icon" src={staticPath + "/assets/img/app_xxx_global.jpg"}/> */}
              <span className="title">{lang === 'ja' ? 'ポコポコ' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
            </a>
          </li>
          <li className="buttons btn_store">
            <a className="btn_store app ga-event" data-category="game_banner" data-event="xxx_apple_store" href="https://apps.apple.com/app/id977918624" target="_blank" rel="noopener noreferrer">
              <img alt="Apple Store" className="icon" src={staticPath + "/assets/img/btn_store_apple.png"} />
            </a>
            <a className="btn_store google ga-event" data-category="game_banner" data-event="xxx_google_play" href="https://play.google.com/store/apps/details?id=com.nhnent.SKxxx" target="_blank" rel="noopener noreferrer">
              <img alt="Google Play" className="icon" src={staticPath + "/assets/img/btn_store_google.png"} />
            </a>
          </li>
        </ul>
        :
        <ul className="share_list">
          <li>
            <a className="btn_share line ga-event" data-category="game_banner" data-event="xxx_mobile" href="http://lgurl.line.me/w2/8bh3mumhxlfx" target="_blank" rel="noopener noreferrer">
              <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx.jpg' ? url.src : null }).join('')} alt="xxx" className="icon" />
              {/* <img alt="xxx" className="icon" src={staticPath + "/assets/img/app_xxx.jpg"} /> */}
              <span className="title">{lang === 'ja' ? 'ポコパン' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
            </a>
          </li>
          <li className="buttons btn_store">
            <a className="btn_store app ga-event" data-category="game_banner" data-event="xxx_apple_store" href="https://itunes.apple.com/us/app/id609427383" target="_blank" rel="noopener noreferrer">
              <img alt="Apple Store" className="icon" src={staticPath + "/assets/img/btn_store_apple.png"} />
            </a>
            <a className="btn_store google ga-event" data-category="game_banner" data-event="xxx_google_play" href="https://play.google.com/store/apps/details?id=jp.naver.SJLGPP" target="_blank" rel="noopener noreferrer">
              <img alt="Google Play" className="icon" src={staticPath + "/assets/img/btn_store_google.png"} />
            </a>
          </li>
          <li>
            <a className="btn_share line ga-event" data-category="game_banner" data-event="xxx_mobile" href="" target="_blank" rel="noopener noreferrer">
              <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx_global.jpg' ? url.src : null }).join('')} alt="xxx GLOBAL" className="icon" />
              {/* <img alt="xxx GLOBAL" className="icon" src={staticPath + "/assets/img/app_xxx_global.jpg"} /> */}
              <span className="title">{lang === 'ja' ? 'ポコポコ' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
            </a>
          </li>
          <li className="buttons btn_store">
            <a className="btn_store app ga-event" data-category="game_banner" data-event="xxx_apple_store" href="https://apps.apple.com/app/id977918624" target="_blank" rel="noopener noreferrer">
              <img alt="Apple Store" className="icon" src={staticPath + "/assets/img/btn_store_apple.png"} />
            </a>
            <a className="btn_store google ga-event" data-category="game_banner" data-event="xxx_google_play" href="https://play.google.com/store/apps/details?id=com.nhnent.SKxxx" target="_blank" rel="noopener noreferrer">
              <img alt="Google Play" className="icon" src={staticPath + "/assets/img/btn_store_google.png"} />
            </a>
          </li>
        </ul>
        }
      </div>
    </div>
  )
}