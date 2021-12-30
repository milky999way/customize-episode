import React, { useState, useEffect } from 'react';
import ViewStar from './view-star';

export default function ViewLastslideGame({ staticPath, lang, languageIndex, isMobile, commentClick, post }) {
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
    <div className="swiper-slide">
      <div>
        <div style={{ direction: "ltr" }}>
          <div className="last-text" style={lang === 'ja' ? { wordBreak: "break-all", maxWidth: "500px", margin: "0 auto 30px" } : { wordBreak: "keep-all", maxWidth: "500px", margin: "0 auto 30px" }}>
            {post.languageItem[languageIndex].lastSlideGameComment}
          </div>
          <ViewStar lang={lang} post={post} staticPath={staticPath} />
          <a className="ga-event" data-category="button_click" data-event="comment_open" href="#" onClick={(e) => commentClick(lang, e)}><div className="reply-btn">{post.languageItem[languageIndex].lastSlideGameButton}</div></a>
          <div className="last-sub-text">
            {post.languageItem[languageIndex].lastSlideGameSubtext}
          </div>


          {/* 모바일 환경의 버튼 노출 - 3가지 경우 */}
          {isMobile === true ?
            lineGame === true ?
              <div className="behind-img2">
                <div className="app_xxx">
                  <a className="" href="http://lgurl.line.me/w2/8bh3mumhxlfx" target="_blank" rel="noopener noreferrer">
                    <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx.jpg' ? url.src : null }).join('')} alt="xxx" className="icon" />
                  </a>
                  <span>{lang === 'ja' ? 'ポコパン' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
                </div>
                <div className="app_xxx">
                  <a className="" href="http://lgurl.line.me/w2/lg2rlzwknddk" target="_blank" rel="noopener noreferrer">
                    <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx.jpg' ? url.src : null }).join('')} alt="xxx" className="icon" />
                  </a>
                  <span>{lang === 'ja' ? 'ポコポコ' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
                </div>
              </div>
            : lineGame === false && (userLang === "ko" || userLang === "ko-KR") ?
              <div className="behind-img2" style={{width: "120px"}}>
                <div className="app_xxx">
                  <a className="" href={pkpkLink} target="_blank" rel="noopener noreferrer">
                    <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx_global.jpg' ? url.src : null }).join('')} alt="xxx GLOBAL" className="icon" />
                  </a>
                  <span>{lang === 'ja' ? 'ポコポコ' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
                </div>
              </div>
            :
              <div className="behind-img2">
                <div className="app_xxx">
                  <a className="" href="http://lgurl.line.me/w2/8bh3mumhxlfx" target="_blank" rel="noopener noreferrer">
                    <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx.jpg' ? url.src : null }).join('')} alt="xxx" className="icon" />
                  </a>
                  <span>{lang === 'ja' ? 'ポコパン' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
                </div>
                <div className="app_xxx">
                  <a className="" href={pkpkLink} target="_blank" rel="noopener noreferrer">
                    <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx_global.jpg' ? url.src : null }).join('')} alt="xxx GLOBAL" className="icon" />
                  </a>
                  <span>{lang === 'ja' ? 'ポコポコ' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
                </div>
              </div>
          : null}


          {/* 모바일이 아닌 (PC 웹)환경의 버튼 노출 - 3가지 경우 */}
          {isMobile === false ?
            lineGame === true ?
              <div id="game_content">
                <div className="contains">
                  <ul className="share_list">
                    <li>
                      <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx.jpg' ? url.src : null }).join('')} alt="xxx" className="icon" />
                      <span className="title">{lang === 'ja' ? 'ポコパン' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
                    </li>
                    <li className="buttons btn_store">
                      <a className="btn_store app ga-event" data-category="game_banner" data-event="xxx_apple_store" href={lang === 'ja' ? "https://itunes.apple.com/jp/app/id609427383" : "https://itunes.apple.com/us/app/id609427383"} target="_blank" rel="noopener noreferrer">app</a>
                      <a className="btn_store google ga-event" data-category="game_banner" data-event="xxx_google_play" href="https://play.google.com/store/apps/details?id=jp.naver.SJLGPP" target="_blank" rel="noopener noreferrer">google</a>
                    </li>
                    <li>
                      <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx.jpg' ? url.src : null }).join('')} alt="xxx" className="icon" />
                      <span className="title">{lang === 'ja' ? 'ポコポコ' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
                    </li>
                    <li className="buttons btn_store">
                      <a className="btn_store app ga-event" data-category="game_banner" data-event="xxx_apple_store" href="https://itunes.apple.com/jp/app/id888615473" target="_blank" rel="noopener noreferrer">app</a>
                      <a className="btn_store google ga-event" data-category="game_banner" data-event="xxx_google_play" href="https://play.google.com/store/apps/details?id=com.linecorp.LGPKPK" target="_blank" rel="noopener noreferrer">google</a>
                    </li>
                  </ul>
                </div>
              </div>
            : lineGame === false && (userLang === "ko" || userLang === "ko-KR") ?
              <div id="game_content">
                <div className="contains">
                  <ul className="share_list" style={{width: "360px", margin: "0 auto 60px"}}>
                    <li>
                      <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx_global.jpg' ? url.src : null }).join('')} alt="xxx GLOBAL" className="icon" />
                      <span className="title">{lang === 'ja' ? 'ポコポコ' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
                    </li>
                    <li className="buttons btn_store">
                      <a className="btn_store app ga-event" data-category="game_banner" data-event="xxx_apple_store" href="https://apps.apple.com/app/id977918624" target="_blank" rel="noopener noreferrer">app</a>
                      <a className="btn_store google ga-event" data-category="game_banner" data-event="xxx_google_play" href="https://play.google.com/store/apps/details?id=com.nhnent.SKxxx" target="_blank" rel="noopener noreferrer">google</a>
                    </li>
                  </ul>
                </div>
              </div>
            :
              <div id="game_content">
                <div className="contains">
                  <ul className="share_list">
                    <li>
                      <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx.jpg' ? url.src : null }).join('')} alt="xxx" className="icon" />
                      <span className="title">{lang === 'ja' ? 'ポコパン' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
                    </li>
                    <li className="buttons btn_store">
                      <a className="btn_store app ga-event" data-category="game_banner" data-event="xxx_apple_store" href="https://itunes.apple.com/us/app/id609427383" target="_blank" rel="noopener noreferrer">app</a>
                      <a className="btn_store google ga-event" data-category="game_banner" data-event="xxx_google_play" href="https://play.google.com/store/apps/details?id=jp.naver.SJLGPP" target="_blank" rel="noopener noreferrer">google</a>
                    </li>
                    <li>
                      <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'app_xxx_global.jpg' ? url.src : null }).join('')} alt="xxx GLOBAL" className="icon" />
                      <span className="title">{lang === 'ja' ? 'ポコポコ' : lang === 'ko' ? 'xxx' : 'xxx'}</span>
                    </li>
                    <li className="buttons btn_store">
                      <a className="btn_store app ga-event" data-category="game_banner" data-event="xxx_apple_store" href="https://apps.apple.com/app/id977918624" target="_blank" rel="noopener noreferrer">app</a>
                      <a className="btn_store google ga-event" data-category="game_banner" data-event="xxx_google_play" href="https://play.google.com/store/apps/details?id=com.nhnent.SKxxx" target="_blank" rel="noopener noreferrer">google</a>
                    </li>
                  </ul>
                </div>
              </div>
          : null}


        </div>
      </div>
    </div>
  )
}