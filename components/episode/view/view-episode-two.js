import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import ViewHeadScroll from './view-head-scroll';
import ViewEpisodeSrollGame from './view-episode-scroll-game';
import ViewStar from './view-star';




export default function ViewEpisodeTwo({ staticPath, urlPath, lang, languageIndex, isMobile, langChange, post }) {
  useEffect(() => {
    window.onload = function() {
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
    }
  })


  
  // SNS 공유
  const snsShareClick = (sns, e) => {
    e.preventDefault();
    let epIdx = document.querySelector("meta[name='description']").getAttribute("content");
    let epUrl = document.querySelector("meta[property='og:url']").getAttribute("content");
    if (epUrl.indexOf('?')) {
      epUrl = epUrl.split('?')[0];
    }
    let url = epUrl + "?utm_source=" + sns + "&utm_medium=share_post&utm_campaign=" + epIdx + "&lang=" + lang;
    let description = document.querySelector("meta[property='og:description']").getAttribute("content");

    let pWidth = 640;
    let pHeight = 600;
    let pLeft = (window.screen.width - pWidth) / 2;
    let pTop = (window.screen.height - pHeight) / 2;

    if (sns === "line") {
      window.open("http://line.me/R/msg/text/?" + encodeURIComponent("#xxx " + description) + " " + encodeURIComponent(url));
    } else if (sns === "twitter") {
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("#xxx " + description) + " " + encodeURIComponent(url), "", "width=" + pWidth + ",height=" + pHeight + ",left=" + pLeft + ",top=" + pTop + ",location=no,menubar=no,status=no,scrollbars=no,resizable=no,titlebar=no,toolbar=no");
    } else if (sns === "facebook") {
      window.open("https://www.facebook.com/sharer.php?u=" + encodeURIComponent(url), "", "width=" + pWidth + ",height=" + pHeight + ",left=" + pLeft + ",top=" + pTop + ",location=no,menubar=no,status=no,scrollbars=no,resizable=no,titlebar=no,toolbar=no");
    }
  }

  // 페이스북 댓글을 위한 프로토콜 세팅
  const fb_urlPath = urlPath ? urlPath.replace('https', 'http') : '';
  return (
    <>
      <ViewHeadScroll lang={lang} languageIndex={languageIndex} post={post} staticPath={staticPath} urlPath={urlPath} />
      <div id="fb-root"></div>
      <div id="#start"></div>
      <div id="guide">
        <img src={staticPath + "/assets/img/icon/icon_scroll.png"} alt="Scroll Guide" />
      </div>
      <div id="viewport">
        <div id="header_top" style={{height:'0px'}}></div>
        <div id="header">
          <div className="header_area">
            <div className="contains">
              <div className="ep_box">
                <img alt="Episode 2" className="icon" src={staticPath + "/assets/img/icon/ep_02.png"} />
                <p className="ep">{post.epNum}</p>
                <p className="title">{post.languageItem[languageIndex].title}</p>
              </div>
              <a href={"/episode?lang=" + lang} className="btn_menu ga-event" data-category="button_click" data-event="menu_episode_list">
                <img alt="menu" className="icon" src={staticPath + "/assets/img/popup_menu_new.png"}/>
              </a>
              {/* <Link href="/episode" as={"/episode?lang=" + lang}>
                <a className="btn_menu ga-event" data-category="button_click" data-event="menu_episode_list">
                  <img alt="menu" className="icon" src={staticPath + "/assets/img/popup_menu_new.png"/>
                </a>
              </Link> */}
            </div>
          </div>
        </div>


        {/* toon 시작 */}
        <div id="toon_content">
          <div className="cut_01 cut_panel lazy_load">
            <div className="toon_panel" style={{width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut01/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut01/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_02 cut_panel">
            <div className="toon_panel" data-scroll="[1200,500]" data-type="position" style={{width:'670px',height:'2700px'}}>
              <img src={staticPath + "/assets/img/ep2/cut02/sub01_bg.jpg"} alt="" className="toon_bg" />
              <div className="toon_obj obj_position obj_repeat" data-value="[{ left:195, top:2323, rotate:0 }, { left:195, top:2323, rotate:-5 }, { speed:200 }]" style={{width:'119px',height:'214px',transformOrigin:'85% 85%'}}>
                <img src={staticPath + "/assets/img/ep2/cut02/sub01_pan.png"} alt="" className="obj_position" style={{left:'0',top:'0'}} />
              </div>
              <img src={staticPath + "/assets/img/ep2/cut02/sub01_hand.png"} alt="" className="obj_position" style={{left:'264px',top:'2487px'}} />
              <img src={staticPath + "/assets/img/ep2/cut02/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
            <div className="toon_panel" data-scroll="[-700,0]" data-type="position" style={{marginTop:'-70px',width:'670px',height:'2142px'}}>
              <img src={staticPath + "/assets/img/ep2/cut02/" + lang + "/sub01_paper.png"} alt="" className="toon_obj obj_position obj_lang" data-scroll="[0,1000]" data-value="[{ left:0, top:0, opacity:0 }, { opacity:1 }]" />
            </div>
          </div>
          <div className="cut_03 cut_panel">
            <div className="toon_panel" data-scroll="[3300,0]" data-type="position" style={{width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut03/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut03/sub01_research01.jpg"} alt="" className="toon_obj obj_position" data-scroll="[0,200]" data-value="[{ left:81, top:3827, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep2/cut03/sub01_research02.jpg"} alt="" className="toon_obj obj_position" data-scroll="[200,400]" data-value="[{ left:81, top:3827, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep2/cut03/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
            <div className="toon_panel" data-scroll="[-400,300]" data-type="animate" style={{position:'absolute',left:'128px',top:'1988px',overflow:'visible'}}>
              <img src={staticPath + "/assets/img/ep2/cut03/sub01_cry.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0 }, { value:[{ left:10 }, { left:0 }, { left:10 }, { left:0 }, { left:10 }, { left:0 }, { left:10 }, { left:0 },{ left:10 }, { left:0 }, { left:10 }, { left:0 }, { left:10 }, { left:0 }, { left:10 }, { left:0 }] }, { speed:70, delay:0, easing:'linear', once:true }]" />
            </div>
            <div className="toon_panel" style={{position:'absolute',left:'0',top:'0'}}>
              <img src={staticPath + "/assets/img/ep2/cut03/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_04 cut_panel">
            <div className="toon_panel" data-scroll="[1000,0]" data-type="position" style={{width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut04/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut04/sub01_over.jpg"} alt="" className="toon_obj obj_position" data-scroll="[0,300]" data-value="[{ left:0, top:1155, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep2/cut04/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
              <div className="toon_obj obj_position" data-scroll="[300,600]" data-value="[{ left:0, top:1155, opacity:0 }, { opacity:1 }]" style={{width:'670px',height:'1100px',background:'#fff'}}></div>
            </div>
          </div>
          <div className="cut_05 cut_panel">
            <div className="toon_panel" data-scroll="[-1000,0]" data-type="position" style={{width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut05/sub01_bg.jpg"} alt="" className="toon_bg" />
              <div className="toon_obj obj_position obj_repeat" data-value="[{ left:81, top:1, opacity:0 }, { left:81, top:1, opacity:1 }, { speed:200 }]">
                <img src={staticPath + "/assets/img/ep2/cut05/sub01_twinkle01.jpg"} alt="" className="obj_position" style={{left:'0',top:'0'}} />
              </div>
              <div className="toon_obj obj_position obj_repeat" data-value="[{ left:0, top:2410, opacity:0 }, { left:0, top:2410, opacity:1 }, { speed:200 }]">
                <img src={staticPath + "/assets/img/ep2/cut05/sub01_twinkle02.jpg"} alt="" className="obj_position" style={{left:'0',top:'0'}} />
              </div>
              <img src={staticPath + "/assets/img/ep2/cut05/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_06 cut_panel">
            <div className="toon_panel" data-scroll="[300,0]" data-type="position" style={{width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut06/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut06/sub01_obj.png"} alt="" className="toon_obj obj_position" data-scroll="[0,300]" data-value="[{ left:270, top:825, scale:0.1 }, { scale:0.9 }]" style={{transformOrigin:'50% 80%'}} />
              <div className="toon_obj obj_position obj_repeat" data-value="[{ left:0, top:1960 }, { left:0, top:1960 }, { speed:300, delay:300, total:2700, repeat:true }]">
                <img src={staticPath + "/assets/img/ep2/cut06/" + lang + "/sub01_ani01.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep2/cut06/" + lang + "/sub01_ani03.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep2/cut06/" + lang + "/sub01_ani05.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep2/cut06/" + lang + "/sub01_ani06.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep2/cut06/" + lang + "/sub01_ani08.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep2/cut06/" + lang + "/sub01_ani10.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep2/cut06/" + lang + "/sub01_ani11.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep2/cut06/" + lang + "/sub01_ani13.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep2/cut06/" + lang + "/sub01_ani15.png"} alt="" className="obj" />
              </div>
              <img src={staticPath + "/assets/img/ep2/cut06/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_07 cut_panel">
            <div className="toon_panel" data-scroll="[-200,200]" data-type="position" style={{width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut07/sub01_bg.jpg"} alt="" className="toon_bg" />
              <div className="toon_obj obj_position obj_repeat" data-value="[{ left:20, top:700 }, { left:25, top:725 }, { speed:600, easing:'easeInOutQuad' }]">
                <img src={staticPath + "/assets/img/ep2/cut07/sub01_obj.png"} alt="" className="obj_position" style={{left:'0',top:'0'}} />
              </div>
            </div>
            <div className="toon_panel" data-scroll="[-400,300]" data-type="animate" style={{position:'absolute',left:'0',top:'2118px',width:'670px',height:'506px',overflow:'hidden'}}>
              <img src={staticPath + "/assets/img/ep2/cut07/sub01_slide01.png"} alt="" className="toon_obj obj_position" data-value="[{ left:-500, top:0 }, { value:[{ left:0 }] }, { speed:500, delay:0, easing:'easeOutExpo', once:true }]" />
            </div>
            <div className="toon_panel" data-scroll="[-400,300]" data-type="animate" style={{position:'absolute',left:'0',top:'2554px',width:'670px',height:'457px',overflow:'hidden'}}>
              <img src={staticPath + "/assets/img/ep2/cut07/sub01_slide02.png"} alt="" className="toon_obj obj_position" data-value="[{ right:-550, top:0 }, { value:[{ right:0 }] }, { speed:500, delay:0, easing:'easeOutExpo', once:true }]" />
            </div>
            <div className="toon_panel" data-scroll="[-400,300]" data-type="animate" style={{position:'absolute',left:'0',top:'2976px',width:'670px',height:'376px',overflow:'hidden'}}>
              <img src={staticPath + "/assets/img/ep2/cut07/sub01_slide03.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0, opacity:0 }, { value:[{ opacity:1 }] }, { speed:500, delay:0, easing:'easeOutExpo', once:true }]" />
            </div>
            <div className="toon_panel" data-scroll="[-400,300]" data-type="animate" style={{position:'absolute',left:'0',top:'3352px',width:'670px',height:'228px',overflow:'hidden'}}>
              <img src={staticPath + "/assets/img/ep2/cut07/sub01_slide04.png"} alt="" className="toon_obj obj_position" data-value="[{ right:56, top:0, opacity:0 }, { value:[{ opacity:1 }] }, { speed:500, delay:0, easing:'easeOutExpo', once:true }]" />
            </div>
            <div className="toon_panel" style={{position:'absolute',left:'0',top:'0',width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut07/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_08 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut08/sub01_bg.jpg"} alt="" className="toon_bg" />
            </div>
            <div className="toon_panel" data-scroll="[-600,300]" data-type="animate" style={{position:'absolute',left:'220px',top:'1125px',overflow:'visible'}}>
              <img src={staticPath + "/assets/img/ep2/cut08/sub01_door.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0 }, { value:[{ left:5 }, { left:0 }, { left:5 }, { left:0 }, { left:5 }, { left:0 }, { left:5 }, { left:0 },{ left:5 }, { left:0 }, { left:5 }, { left:0 }, { left:5 }, { left:0 }, { left:5 }, { left:0 }] }, { speed:70, delay:0, easing:'linear', once:true }]" />
            </div>
            <div className="toon_panel" data-scroll="[-400,300]" data-type="animate" style={{position:'absolute',left:'35px',top:'1700px',overflow:'visible'}}>
              <img src={staticPath + "/assets/img/ep2/cut08/sub01_open.jpg"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0 }, { value:[{ left:5 }, { left:0 }, { left:5 }, { left:0 }, { left:5 }, { left:0 }, { left:5 }, { left:0 },{ left:5 }, { left:0 }, { left:5 }, { left:0 }, { left:5 }, { left:0 }, { left:5 }, { left:0 }] }, { speed:70, delay:0, easing:'linear', once:true }]" />
            </div>
            <div className="toon_panel" style={{position:'absolute',left:'0',top:'0'}}>
              <img src={staticPath + "/assets/img/ep2/cut08/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_09 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut09/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut09/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_10 cut_panel">
            <div className="toon_panel" data-scroll="[2000,0]" data-type="position" style={{width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut10/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut10/sub01_over.png"} alt="" className="toon_obj obj_position" data-scroll="[0,300]" data-value="[{ left:0, top:2128, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep2/cut10/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_11 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4772px'}}>
              <img src={staticPath + "/assets/img/ep2/cut11/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut11/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_12 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4770px'}}>
              <img src={staticPath + "/assets/img/ep2/cut12/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut12/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_13 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4770px'}}>
              <img src={staticPath + "/assets/img/ep2/cut13/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut13/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_14 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4770px'}}>
              <img src={staticPath + "/assets/img/ep2/cut14/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut14/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_15 cut_panel">
            <div className="toon_panel" data-scroll="[1750,0]" data-type="position" style={{width:'670px',height:'5854px'}}>
              <img src={staticPath + "/assets/img/ep2/cut15/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut15/sub01_obj.png"} alt="" className="toon_obj obj_position" data-scroll="[0,400]" data-value="[{ left:230, top:2352, scale:1 }, { scale:-1 }]" style={{transformOrigin:'55% 90%'}} />
              <img src={staticPath + "/assets/img/ep2/cut15/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_16 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'5198px'}}>
              <img src={staticPath + "/assets/img/ep2/cut16/sub01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep2/cut16/" + lang + "/sub01_text.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
        </div>
        {/* toon 종료 */}

        {/* game_content */}
        <ViewEpisodeSrollGame lang={lang} isMobile={isMobile} staticPath={staticPath} post={post} />

        {/* banner_content */}
        <div id="banner_content">
          <div className="contains">
            <ViewStar lang={lang} post={post} staticPath={staticPath} />
            {/* 페이스북 */}
            <div className="facebook_area">
              <div className="facebook_comment">
                <div className="fb-comments" data-href={fb_urlPath + '/?lang=' + lang} data-width="536" data-numposts="5" order_by="reverse_time"></div>
              </div>
              <div className="facebook_like">
                <div className="fb-like" data-href="https://www.facebook.com/xxx.info" data-width="520" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="false" data-event-prefix="bottom"></div>
              </div>
              <div className="facebook_page">
                <div className="fb-page" data-adapt-container-width="false" data-event-prefix="bottom" data-hide-cover="false" data-href="https://www.facebook.com/xxx.info" data-show-facepile="false" data-small-header="false" data-width="520"></div>
              </div>
            </div>
            {/* 인스타그램 */}
            <div className="insta_area">
              <a className="ga-event" data-category="sns" data-event="bottom_instagram" href="https://www.instagram.com/xxx.info/" target="_blank" rel="noopener noreferrer"><img alt="" src={staticPath + "/assets/img/instagram_banner_" + lang + ".png"}/></a>
            </div>
            {/* 다른 에피소드 보러가기*/}
            <div className="insta_area">
              <a className="ga-event-link" data-category="button_click" data-event="banner_episode_list" href={"/episode?lang=" + lang}><img alt="" src={staticPath + "/assets/img/banner_index_" + lang + ".jpg"} style={{width:'503px', marginTop:'28px'}}/></a>
            </div>
            <p className="copyright">©xxx Inc., All rights reserved.</p>
          </div>
        </div>
        <div id="footer">
          <div className="top_area">
            <div className="contains">
              <a className="btn_top ga-event" data-category="button_click" data-event="top" href="#" id="btn_top">TOP</a>
            </div>
          </div>
          <div className="share_area">
            <div className="contains">
              <p className="title"><img alt="Share Episode" src={staticPath + "/assets/img/icon/share_balloon.png"}/></p>
              <div className="sns_list">
                {isMobile === true ?
                  <a href="#" className="ga-event" data-category="share" data-event="line" onClick={(e) => snsShareClick("line", e)}>
                    <img alt="line" src={staticPath + "/assets/img/icon/sns_line_round.png"}/>
                  </a>
                : null}
                <a href="#" className="ga-event" data-category="share" data-event="twitter" onClick={(e) => snsShareClick("twitter", e)}>
                  <img alt="twitter" src={staticPath + "/assets/img/icon/sns_twitter_round.png"}/>
                </a>
                <a href="#" className="ga-event" data-category="share" data-event="facebook" onClick={(e) => snsShareClick("facebook", e)}>
                  <img alt="facebook" src={staticPath + "/assets/img/icon/sns_facebook_round.png"}/>
                </a>
                <a href={"mailto:?subject=" + post.languageItem[languageIndex].title + "&body=" + post.languageItem[languageIndex].subtitle + "%0D%0A" + urlPath + "?utm_source=email%26utm_medium=share_post%26utm_campaign=" + post.epIndex + "%26lang=" + lang} className="btn_email ga-event" data-category="share" data-event="email">
                  <img alt="email" src={staticPath + "/assets/img/icon/sns_email_round.png"}/>
                </a>
              </div>
              <div className="select_box">
                <select id="changeLanguage" className="select_lang" value={lang} onChange={langChange}>
                  <option value="ja">日本語</option>
                  <option value="en">English</option>
                  <option value="ko">한국어</option>
                </select>
                <a href="#" className="value">
                {lang === "ko" ? "한국어" : lang === "ja" ? "日本語" : "English"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="footer_bottom" style={{height:'0px'}}></div>


        {/* <div id="popup_mask"></div>
        <div id="popup_menu">
          <a className="btn_close ga-event" data-category="button_click" data-event="menu_close" href="#">
            <img alt="close" className="icon" src={staticPath + "/assets/img/icon/popup_close.png"}/>
          </a>
          <div className="popup_area">
            <div className="facebook_area">
              <div className="facebook_like">
                <div className="fb-like fb_iframe_widget" data-action="like" data-event-prefix="menu" data-event-suffix="_en" data-href="https://www.facebook.com/xxx.global" data-layout="standard" data-share="false" data-show-faces="false" data-size="small" data-width="520">
                </div>
              </div>
              <div className="facebook_page">
                <div className="fb-page fb_iframe_widget" data-adapt-container-width="false" data-event-prefix="menu" data-event-suffix="_banner_en" data-hide-cover="false" data-href="https://www.facebook.com/xxx.global" data-show-facepile="false" data-small-header="false" data-width="520">
                </div>
              </div>
            </div>
            <div className="insta_area">
              <a className="ga-event" data-category="sns" data-event="menu_instagram" href="https://www.instagram.com/xxx.jp/" target="_blank" rel="noopener noreferrer">
                <img alt="" src={staticPath + "/episodes/common/img/instagram_banner_en.png"}/>
              </a>
            </div>
            <div className="insta_area">
              <a className="ga-event-link" data-category="button_click" data-event="banner_episode_list" href={"/?lang="+ lang}>
                <img alt="" src={staticPath + "/episodes/common/img/banner_index_" + lang + ".jpg"} style={{width:'503px', marginTop:'28px'}}/>
              </a>
            </div>
          </div>
        </div>
        <div id="event_popup">
          <a className="btn_close" href="#">
            <img alt="close" className="icon" src={staticPath + "/assets/img/icon/popup_close.png"}/>
          </a>
          <div className="event_text">
            <p>
              <b>1. イベント参加方法</b><br/>
              「#ポコパン」を入れてツイート<br/>
            </p>
            <div style={{fontSize:'14px', color:'red'}}>
              ※「イベントに参加」ボタンを押した後、<br/>
              書き込まれているツイートをそのままツイートしても問題ございません。
            </div>
            <p>
              <b>2.イベント期間</b><br/>
              2017年2月3日まで
            </p>
            <p>
              <b>3.当選者発表</b><br/>
              2017年2月7日 ポコタ公式ツイッター<br/>
              （<a href="https://twitter.com/xxx_info" target="_blank" rel="noopener noreferrer">https://twitter.com/xxx_info</a>）にて発表<br/>
            </p>
            <div style={{fontSize:'14px', color:'red'}}>
              ※5名様を抽選し、当選された方々にDMでご連絡いたします。
            </div>
            <p>
              <b>4. 注意事項</b><br/>
              本イベントは日本国内にお住まいの方のみご参加いただけます。<br/>
              （日本国内にお住まいの方でない場合、当選は無効となります。）<br/>
            </p>
            <p></p>
            <div style={{fontSize:'14px', color:'red'}}>
              ※本キャンペーンは、xxxが実施しているキャンペーンとなります。
            </div>
            <p></p>
          </div>
          <div className="event_popup_footer">
            <div className="button">
              <a className="event_popup_btn" href="#" id="event_join">イベントに参加</a>
            </div>
          </div>
        </div> */}


      </div>
      <div id="loader" className="hide"></div>
    </>
  )
}