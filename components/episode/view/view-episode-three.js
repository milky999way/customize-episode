import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import ViewHeadScroll from './view-head-scroll';
import ViewEpisodeSrollGame from './view-episode-scroll-game';
import ViewStar from './view-star';




export default function ViewEpisodeThree({ staticPath, urlPath, lang, languageIndex, isMobile, langChange, post }) {
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
                <img alt="Episode 3" className="icon" src={staticPath + "/assets/img/icon/ep_03.png"} />
                <p className="ep">{post.epNum}</p>
                <p className="title">{post.languageItem[languageIndex].title}</p>
              </div>
              <div className="sound_box on">
                <a className="off" data-location="menu" href="#" id="btn_audio_play">
                  <img alt="sound on" className="on" src={staticPath + "/assets/img/icon/sound_on_new.png"}/>
                  <img alt="sound off" className="off" src={staticPath + "/assets/img/icon/sound_off_new.png"}/>
                </a>
              </div>
              <a href={"/episode?lang=" + lang} className="btn_menu ga-event" data-category="button_click" data-event="menu_episode_list">
                <img alt="menu" className="icon" src={staticPath + "/assets/img/popup_menu_new.png"}/>
              </a>
              {/* <Link href="/episode" as={"/episode?lang=" + lang}>
                <a className="btn_menu ga-event" data-category="button_click" data-event="menu_episode_list">
                  <img alt="menu" className="icon" src={staticPath + "/assets/img/popup_menu_new.png"}/>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        {/* toon audio */}
        <div className="audio_area">
          <div className="audio_box">
            <audio id="audio" loop="loop" preload="auto">
              <source src={staticPath + "/assets/mp3/BGM_The_Mysterious_Case_of_Poko_Forest.mp3"} type="audio/mp3" />
            </audio>
          </div>
          <div className="contains">
            <div className="music_text">
              <p>
                {lang === 'ja' ? 'このウェブページには音楽があります。' : lang === 'ko' ? '이 에피소드에는 배경 음악이 있습니다.' : 'This episode has background music.'}<br/>
                {lang === 'ja' ? '以下のボタンを押して' : lang === 'ko' ? '아래 음악 버튼을 눌러주세요.' : 'POKOPlease push the music button below.'}<br/>
                {lang === 'ja' ? '音楽と共にお楽しみください。' : lang === 'ko' ? '' : ''}
              </p>
            </div>
            <div className="btn_box">
              <a href="#" id="btn_audio_play2" className="off" data-location="contents">
                <img src={staticPath + "/assets/img/icon/btn_bgm_on.png"} alt="sound on" className="on" />
                <img src={staticPath + "/assets/img/icon/btn_bgm_off.png"} alt="sound off" className="off" />
              </a>
            </div>
          </div>
        </div>


        {/* toon 시작 */}
        <div id="toon_content">
          <div className="cut_01 cut_panel lazy_load">
            <div className="toon_panel" style={{width:'670px',height:'2695px'}}>
              <img src={staticPath + "/assets/img/ep3/cut01/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut01/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_02 cut_panel">
            <div className="toon_panel" data-scroll="[-100,1000]" data-type="position" style={{width:'670px',height:'3700px'}}>
              <img src={staticPath + "/assets/img/ep3/cut02/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut02/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
              <img src={staticPath + "/assets/img/ep3/cut02/obj_boni_01.png"} alt="" className="toon_obj obj_position" data-scroll="[0,200]" data-value="[{ left:0, top:300, opacity:1 }, { opacity:-1 }]" />
              <img src={staticPath + "/assets/img/ep3/cut02/obj_boni_02.png"} alt="" className="toon_obj obj_position" data-scroll="[0,200]" data-value="[{ left:0, top:300, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep3/cut02/obj_snow_01.png"} alt="" className="toon_obj obj_position" data-scroll="[200,1300]" data-value="[{ left:0, top:400, scale:0.3, opacity:0 }, { top:1220, scale:0.7, opacity:1 }]"
                style={{transformOrigin:'50% 50%'}} />
              <img src={staticPath + "/assets/img/ep3/cut02/text_" + lang + "_02.png"} alt="" className="toon_obj obj_position" data-scroll="[1300,300]" data-value="[{ left:0, top:1630, scale:0.3, opacity:0 }, { scale:0.7, opacity:1 }]" style={{transformOrigin:'50% 50%'}} />
            </div>
          </div>
          <div className="cut_03 cut_panel">
            <div className="toon_panel" data-scroll="[-400,1000]" data-type="position" style={{width:'670px',height:'2695px'}}>
              <img src={staticPath + "/assets/img/ep3/cut03/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut03/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
              <img src={staticPath + "/assets/img/ep3/cut03/obj_" + lang + "_01.png"} alt="" className="toon_obj obj_position" data-scroll="[0,200]" data-value="[{ left:136, top:239, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep3/cut03/obj_02.png"} alt="" className="toon_obj obj_position" data-scroll="[150,200]" data-value="[{ left:10, top:305, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep3/cut03/obj_" + lang + "_03.png"} alt="" className="toon_obj obj_position" data-scroll="[300,200]" data-value="[{ left:464, top:483, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep3/cut03/obj_" + lang + "_04.png"} alt="" className="toon_obj obj_position" data-scroll="[450,200]" data-value="[{ left:10, top:470, opacity:0 }, { opacity:1 }]" />
              <div className="toon_obj obj_position obj_01" data-scroll="[500,200]" data-value="[{ left:570, top:645, opacity:0 }, { left:-130, opacity:1 }]">
                <div className="toon_panel" data-scroll="[-350,200]" data-type="animate" style={{overflow:'visible'}}>
                  <img src={staticPath + "/assets/img/ep3/cut03/obj_" + lang + "_05.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0 }, { value:[{ left:10 }, { left:0 }, { left:8 }, { left:0 }, { left:6 }, { left:0 }, { left:4 }, { left:0 }] }, { speed:100, delay:0, once:true }]" />
                </div>
              </div>
              <div className="toon_obj obj_position obj_02" data-scroll="[700,200]" data-value="[{ left:37, top:1253, opacity:0 }, { top:-400, opacity:1 }]">
                <div className="toon_panel" data-scroll="[-750,200]" data-type="animate" style={{overflow:'visible'}}>
                  <img src={staticPath + "/assets/img/ep3/cut03/obj_06.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0 }, { value:[{ left:10 }, { left:0 }, { left:8 }, { left:0 }, { left:6 }, { left:0 }, { left:4 }, { left:0 }] }, { speed:100, delay:0, once:true }]" />
                </div>
              </div>
              <img src={staticPath + "/assets/img/ep3/cut03/bg_frame.png"} alt="" className="obj_position obj_position" style={{left:'0',top:'1308px'}} />
            </div>
          </div>
          <div className="cut_04 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'2922px'}}>
              <img src={staticPath + "/assets/img/ep3/cut04/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut04/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_05 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3201px'}}>
              <img src={staticPath + "/assets/img/ep3/cut05/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut05/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_06 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'5523px'}}>
              <img src={staticPath + "/assets/img/ep3/cut06/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut06/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_07 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3700px'}}>
              <img src={staticPath + "/assets/img/ep3/cut07/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut07/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_08 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4262px'}}>
              <img src={staticPath + "/assets/img/ep3/cut08/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut08/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_09 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3355px'}}>
              <img src={staticPath + "/assets/img/ep3/cut09/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut09/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_10 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4022px'}}>
              <img src={staticPath + "/assets/img/ep3/cut10/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut10/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_11 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4120px'}}>
              <img src={staticPath + "/assets/img/ep3/cut11/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut11/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_12 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4240px'}}>
              <img src={staticPath + "/assets/img/ep3/cut12/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut12/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_13 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3479px'}}>
              <img src={staticPath + "/assets/img/ep3/cut13/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut13/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_14 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3560px'}}>
              <img src={staticPath + "/assets/img/ep3/cut14/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut14/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_15 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3911px'}}>
              <img src={staticPath + "/assets/img/ep3/cut15/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut15/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_16 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4665px'}}>
              <img src={staticPath + "/assets/img/ep3/cut16/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut16/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_17 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3331px'}}>
              <img src={staticPath + "/assets/img/ep3/cut17/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut17/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_18 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3761px'}}>
              <img src={staticPath + "/assets/img/ep3/cut18/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut18/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_19 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'2695px'}}>
              <img src={staticPath + "/assets/img/ep3/cut19/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/cut19/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_panel lazy_load">
            <div className="toon_panel" style={{width:'670px',height:'1600px'}}>
              <img id="peng" src={staticPath + "/assets/img/ep3/bridge/scene1_" + lang + ".jpg"} data-src={staticPath + "/assets/img/ep3/bridge/scene1_" + lang + ".jpg"} alt="이미지가 안보일 경우에는 스크롤 해보세요" className="obj_position obj_lang" style={{width:'670px',left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'2695px'}}>
              <img src={staticPath + "/assets/img/ep3/bridge/scene2.jpg"} alt="" className="obj_position obj_lang" style={{width:'670px',left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3000px'}}>
              <img src={staticPath + "/assets/img/ep3/bridge/scene3_" + lang + ".jpg"} alt="" className="obj_position obj_lang" style={{width:'670px',left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'1600px'}}>
              <img src={staticPath + "/assets/img/ep3/bridge/scene4_" + lang + ".jpg"} alt="" className="obj_position obj_lang" style={{width:'670px',left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'2000px'}}>
              <img src={staticPath + "/assets/img/ep3/bridge/scene5_" + lang + ".jpg"} alt="" className="obj_position obj_lang" style={{width:'670px',left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'2400px'}}>
              <img src={staticPath + "/assets/img/ep3/bridge/scene6_" + lang + ".jpg"} alt="" className="obj_position obj_lang" style={{width:'670px',left:'0',top:'0'}} />
            </div>
          </div>
          {/* PENG 2부 */}
          <div className="cut_01 cut_panel lazy_load">
            <div className="toon_panel" style={{width:'670px',height:'3344px'}}>
              <img src={staticPath + "/assets/img/ep3/2cut01/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/2cut01/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_02 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3327px'}}>
              <img src={staticPath + "/assets/img/ep3/2cut02/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/2cut02/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_03 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3398px'}}>
              <img src={staticPath + "/assets/img/ep3/2cut03/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/2cut03/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_04 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3287px'}}>
              <img src={staticPath + "/assets/img/ep3/2cut04/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/2cut04/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_05 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'2695px'}}>
              <img src={staticPath + "/assets/img/ep3/2cut05/bg_01.jpg"} alt="" className="toon_bg" />
            </div>
          </div>
          <div className="cut_06 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'4777px'}}>
              <img src={staticPath + "/assets/img/ep3/2cut06/text_" + lang + "_01.jpg"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_07 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3681px'}}>
              <img src={staticPath + "/assets/img/ep3/2cut07/text_" + lang + "_01.jpg"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_08 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3220px'}}>
              <img src={staticPath + "/assets/img/ep3/2cut08/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/2cut08/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_09 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'3439px'}}>
              <img src={staticPath + "/assets/img/ep3/2cut09/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/2cut09/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_10 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'2400px'}}>
              <img src={staticPath + "/assets/img/ep3/2cut10/bg_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep3/2cut10/text_" + lang + "_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'800px'}}>
              <a href={lang === 'ja' ? "https://www.facebook.com/xxx.jp/posts/1854109124837396:0" : "https://www.facebook.com/xxx.global/posts/1238527306184328:0"} target="_blank" rel="noopener noreferrer">
                <img src={staticPath + "/assets/img/facebook_banner_" + lang + ".jpg"} alt="" className="obj_position obj_lang" style={{width:'670px',left:'0',top:'0'}} />
              </a>
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
                <img alt="" src={staticPath + "/episodes/common/img/instagram_banner_en.png"/>
              </a>
            </div>
            <div className="insta_area">
              <a className="ga-event-link" data-category="button_click" data-event="banner_episode_list" href={"/?lang="+ lang}>
                <img alt="" src={staticPath + "/episodes/common/img/banner_index_" + lang + ".jpg" style={{width:'503px', marginTop:'28px'}}/>
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