import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InputRange from 'react-input-range-rtl';




export default function ViewFooter({ staticPath, urlPath, lang, languageIndex, slideValue, inputRangeChange, langChange, isMobile, commentClick, bannerCloseClick, bannerHide, post }) {
  const showStyle = {display: 'block'}
  const hideStyle = {display: 'none'}


  const postPath = post.link.split('/')
  postPath.pop();
  const postPrevPath = postPath.join('/')


  // SNS 공유
  const snsShareClick = (sns, e) => {
    e.preventDefault();
    let epIdx = document.querySelector("meta[name='description']").getAttribute("content");
    let epUrl = document.querySelector("meta[property='og:url']").getAttribute("content");
    if (epUrl.indexOf('?')) {
      epUrl = epUrl.split('?')[0];
    }
    let url = epUrl + "?utm_source=" + sns + "&utm_medium=share_post&utm_campaign=" + post.epIndex + "&lang=" + lang;
    let title = document.querySelector("meta[property='og:title']").getAttribute("content");
    let description = document.querySelector("meta[property='og:description']").getAttribute("content");

    let pWidth = 640;
    let pHeight = 600;
    let pLeft = (window.screen.width - pWidth) / 2;
    let pTop = (window.screen.height - pHeight) / 2;

    if (sns === "line") {
      window.open("http://line.me/R/msg/text/?" + encodeURIComponent("#xxx #ポコパン #xxx " + description) + " " + encodeURIComponent(url));
    } else if (sns === "twitter") {
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("#xxx #ポコパン #xxx " + title) + " " + encodeURIComponent(url), "", "width=" + pWidth + ",height=" + pHeight + ",left=" + pLeft + ",top=" + pTop + ",location=no,menubar=no,status=no,scrollbars=no,resizable=no,titlebar=no,toolbar=no");
    } else if (sns === "facebook") {
      window.open("https://www.facebook.com/sharer.php?u=" + encodeURIComponent(url), "", "width=" + pWidth + ",height=" + pHeight + ",left=" + pLeft + ",top=" + pTop + ",location=no,menubar=no,status=no,scrollbars=no,resizable=no,titlebar=no,toolbar=no");
    }
  }



  return (
    <div className="cbp-spmenu cbp-spmenu-horizontal cbp-spmenu-bottom footer-shadow cbp-spmenu-open" id="cbp-spmenu-s4">


      {/* 1부 보기 배너 */}
      {postPath.length === 3 ?
      <div className="banner-wrapper">
        <div className="banner" style={bannerHide === false ? showStyle : hideStyle}>
          <div className="banner_left">
            
            {/* <Link href="/episode/[...id]" as={postPrevPath + "?lang=" + lang}>
              <a className="ga-event" data-category="button_click" data-event="banner_open" onClick={() => {inputRangeChange(1)}}>
                <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'prev_banner_'+lang+'.png' ? url.src : null }).join('')} alt="" style={{ maxWidth: "100%" }} />
              </a>
            </Link> */}
            <a href={postPrevPath + "?lang=" + lang} className="ga-event" data-category="button_click" data-event="banner_open">
              <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'prev_banner_'+lang+'.png' ? url.src : null }).join('')} alt="" style={{ maxWidth: "100%" }} />
            </a>

          </div>
          <div className="banner_right">
            <a className="ga-event" data-category="button_click" data-event="banner_close" href="#" onClick={bannerCloseClick}><img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'close_prev_banner_'+lang+'.png' ? url.src : null }).join('')} alt="" style={{ maxWidth: "100%", zIndex: "5000" }} /></a>
          </div>
        </div>
      </div>
      : null}



      <div id="footer">
        <div className="slide_area">
          <div className="content">
            <div id="num-area">
              <div>{slideValue}/{post.slides}</div>
            </div>
            <InputRange direction="rtl" maxValue={post.slides} minValue={1} value={slideValue} onChange={inputRangeChange} />
          </div>
        </div>
        <div className="contains">
          <div className="share_area">
            <div className="title ga-event" data-category="button_click" data-event="comment_open" onClick={commentClick}><img src={staticPath + "/assets/img/share_balloon.png"} alt="" /></div>
            <div className="sns_list">
              {isMobile === true ?
                <div>
                  <a href="#" className="btn_line ga-event" data-category="share" data-event="line" id="line_a" onClick={(e) => snsShareClick("line", e)}>
                    <img src={staticPath + "/assets/img/sns_line_round.png"} alt="line" />
                  </a>
                </div>
              : null}
              <div>
                <a href="#" className="btn_twitter ga-event" data-category="share" data-event="twitter" id="twitter_a" onClick={(e) => snsShareClick("twitter", e)}>
                  <img src={staticPath + "/assets/img/sns_twitter_round.png"} alt="twitter" />
                </a>
              </div>
              <div>
                <a href="#" className="btn-facebook ga-event" data-category="share" data-event="facebook" onClick={(e) => snsShareClick("facebook", e)}>
                  <img src={staticPath + "/assets/img/sns_facebook_round.png"} alt="facebook" />
                </a>
              </div>
              <div>
                <a href={"mailto:?subject=" + post.languageItem[languageIndex].title + "&body=" + post.languageItem[languageIndex].subtitle + "%0D%0A" + urlPath + "?utm_source=email%26utm_medium=share_post%26utm_campaign=" + post.epIndex + "%26lang=" + lang} className="btn-email ga-event" data-category="share" data-event="mail">
                  <img src={staticPath + "/assets/img/sns_email_round.png"} alt="email" />
                </a>
              </div>
            </div>
            <div className="select_box">
              <select id="changeLanguage" className="select_lang" value={lang} onChange={langChange}>
                <option value="ja">日本語</option>
                <option value="en">English</option>
                <option value="ko">한국어</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}