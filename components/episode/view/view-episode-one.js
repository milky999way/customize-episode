import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import ViewHeadScroll from './view-head-scroll';
import ViewEpisodeSrollGame from './view-episode-scroll-game';
import ViewStar from './view-star';




export default function ViewEpisodeOne({ staticPath, urlPath, lang, languageIndex, isMobile, langChange, post }) {
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
                <img alt="Episode 1" className="icon" src={staticPath + "/assets/img/icon/ep_01.png"} />
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
              <source src={staticPath + "/assets/mp3/Someday-Japanese_Master0711_greenysea.mp3"} type="audio/mp3" />
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
            <div className="toon_panel" data-scroll="[0,-900]" data-type="scroll" style={{width:'670px',height:'2170px',overflow:'hidden'}}>
              <img src={staticPath + "/assets/img/ep1/cut01/scroll_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut01/scroll_03.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:783 }, { left:0, top:-90 }]" />
              <img src={staticPath + "/assets/img/ep1/cut01/scroll_02.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:1087 }, { left:0, top:-286 }]" />
              <div className="toon_obj obj_position" data-value="[{ left:0, top:1731 }, { left:0, top:-636 }]">
                <img src={staticPath + "/assets/img/ep1/cut01/scroll_01.png"} alt="" className="toon_bg" />
                <div className="toon_panel" data-scroll="[-1201,0]" data-type="position" style={{left:'192px',top:'712px',width:'200px',height:'270px'}}>
                  <img src={staticPath + "/assets/img/ep1/cut01/scroll_01_midori.png"} alt="" className="toon_obj obj_position obj_01" data-type="percent"
                    data-scroll="[0,220]" data-value="[{ left:35, top:80 }, [{ percent:[0,60], value:{ left:26, top:-80 } }, { percent:[60,100], value:{ left:-7, top:21 } }]]" />
                  <img src={staticPath + "/assets/img/ep1/cut01/scroll_01_midori_over.png"} alt="" className="toon_obj obj_position" style={{left:'0',bottom:'0'}} />
                </div>
              </div>
            </div>
            <div className="toon_panel scroll_top_fixed" data-scroll="[-500,100]" data-type="position" style={{position:'absolute',left:'0',top:'110px',width:'670px',height:'1000px',zIndex:'100'}}>
              <img src={staticPath + "/assets/img/ep1/cut01/" + lang + "/title.png"} alt="" className="toon_obj obj_position obj_01 obj_lang" data-scroll="[0,300]"
                data-value="[{ left:0, top:0, opacity:1 }, { top:450, opacity:-1 }]" />
            </div>
          </div>
          <div className="cut_02 cut_panel">
            <div className="toon_panel" data-scroll="[-700,200]" data-type="position" style={{width:'670px',height:'1896px'}}>
              <img src={staticPath + "/assets/img/ep1/cut02/sub_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut02/sub_midori_01.png"} alt="" className="toon_obj obj_position obj_01" data-type="percent"
                data-scroll="[500,400]" data-value="[{ left:50, top:532 }, [{ percent:[0,30], value:{ left:70 } }, { percent:[30,70], value:{ left:0 } }, { percent:[70,100], value:{ left:-70 } }]]" />
              <img src={staticPath + "/assets/img/ep1/cut02/sub_midori_02.png"} alt="" className="toon_obj obj_position obj_02" data-type="percent"
                data-scroll="[850,400]" data-value="[{ left:425, top:870 }, [{ percent:[0,30], value:{ left:-22, top:-60 } }, { percent:[30,70], value:{ left:0, top:0 } }, { percent:[70,100], value:{ left:22, top:60 } }]]" />
              <img src={staticPath + "/assets/img/ep1/cut02/sub_midori_03.png"} alt="" className="toon_obj obj_position obj_03" data-type="percent"
                data-scroll="[1200,400]" data-value="[{ left:90, top:1275 }, [{ percent:[0,30], value:{ left:22, top:-80 } }, { percent:[30,70], value:{ left:0, top:0 } }, { percent:[70,100], value:{ left:-22, top:80 } }]]" />
              <img src={staticPath + "/assets/img/ep1/cut02/sub_over.png"} alt="" className="obj_position" style={{left:'0',top:'0'}} />
              <div className="toon_obj obj_position obj_repeat obj_02" data-value="[{ left:0, top:0 }, { left:0, top:0 }, { speed:100, delay:100, total:700, repeat:true }]">
                <img src={staticPath + "/assets/img/ep1/cut02/sub_animal_01.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut02/sub_animal_02.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut02/sub_animal_03.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut02/sub_animal_04.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut02/sub_animal_05.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut02/sub_animal_06.png"} alt="" className="obj" />
              </div>
              <img src={staticPath + "/assets/img/ep1/cut02/" + lang + "/midori_01.png"} alt="" className="toon_obj obj_position obj_01 obj_lang"
                data-type="percent" data-scroll="[500,300]" data-value="[{ left:275, top:545, opacity:0 }, [{ percent:[0,20], value:{ opacity:1 } }, { percent:[20,80], value:{ opacity:0 } }, { percent:[80,100], value:{ opacity:-1 } }]]" />
              <img src={staticPath + "/assets/img/ep1/cut02/" + lang + "/midori_02.png"} alt="" className="toon_obj obj_position obj_02 obj_lang"
                data-type="percent" data-scroll="[850,300]" data-value="[{ left:485, top:790, opacity:0 }, [{ percent:[0,20], value:{ opacity:1 } }, { percent:[20,80], value:{ opacity:0 } }, { percent:[80,100], value:{ opacity:-1 } }]]" />
              <img src={staticPath + "/assets/img/ep1/cut02/" + lang + "/midori_03.png"} alt="" className="toon_obj obj_position obj_03 obj_lang"
                data-type="percent" data-scroll="[1200,300]" data-value="[{ left:250, top:1215, opacity:0 }, [{ percent:[0,20], value:{ opacity:1 } }, { percent:[20,80], value:{ opacity:0 } }, { percent:[80,100], value:{ opacity:-1 } }]]" />
              <img src={staticPath + "/assets/img/ep1/cut02/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'305px'}} />
            </div>
          </div>
          <div className="cut_03 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'550px'}}>
              <img src={staticPath + "/assets/img/ep1/cut03/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut03/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
            <div className="toon_panel" data-scroll="[-550,0]" data-type="position" style={{width:'670px',height:'691px'}}>
              <img src={staticPath + "/assets/img/ep1/cut03/sub_02.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut03/sub_02_midori.png"} alt="" className="toon_obj obj_position obj_01" data-scroll="[0,200]"
                data-value="[{ left:268, top:320, opacity:0 }, { top:-44, opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep1/cut03/" + lang + "/sub_02_midori_text.png"} alt="" className="toon_obj obj_position text_01 obj_lang"
                data-scroll="[200,50]" data-value="[{ opacity:0 }, { opacity:1 }]" style={{left:'142px',top:'151px'}} />
              <img src={staticPath + "/assets/img/ep1/cut03/" + lang + "/sub_02_midori_left.png"} alt="" className="toon_obj obj_position obj_02 obj_lang"
                data-scroll="[250,80]" data-value="[{ top:271, left:180, opacity:0 }, { left:-44, opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep1/cut03/" + lang + "/sub_02_midori_right.png"} alt="" className="toon_obj obj_position obj_03 obj_lang"
                data-scroll="[330,80]" data-value="[{ top:260, left:333, opacity:0 }, { left:44, opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep1/cut03/sub_02_midori_over.png"} alt="" className="toon_obj obj_position obj_04" style={{left:'57px',top:'364px'}} />
            </div>
            <div className="toon_panel" style={{width:'670px',height:'258px'}}>
              <img src={staticPath + "/assets/img/ep1/cut03/sub_03.jpg"} alt="" className="toon_bg" />
            </div>
            <div className="toon_panel" style={{width:'670px',height:'480px'}}>
              <img src={staticPath + "/assets/img/ep1/cut03/sub_04.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut03/" + lang + "/text_02.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_04 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'428px'}}>
              <img src={staticPath + "/assets/img/ep1/cut04/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut04/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
            <div className="toon_panel" data-scroll="[-700,200]" data-type="position" style={{width:'670px',height:'488px'}}>
              <img src={staticPath + "/assets/img/ep1/cut04/sub_02.jpg"} alt="" className="toon_bg" />
              <div className="toon_panel" data-scroll="[-700,200]" data-type="position" style={{left:'55px',top:'63px',width:'307px',height:'263px',overflow:'hidden'}}>
                <img src={staticPath + "/assets/img/ep1/cut04/sub_02_coco_boni.png"} alt="" className="toon_obj obj_position obj_01" data-type="percent"
                  data-scroll="[0,600]" data-value="[{ left:66, top:43 }, [{ percent:[0,10], value:{ left:0, top:15 } }, { percent:[10,20], value:{ left:0, top:-10 } }, { percent:[20,30], value:{ left:0, top:25 } }, { percent:[30,40], value:{ left:0, top:-10 } }, { percent:[40,50], value:{ left:0, top:35 } }, { percent:[50,60], value:{ left:0, top:-10 } }, { percent:[60,70], value:{ left:0, top:45 } }, { percent:[70,80], value:{ left:0, top:-10 } }, { percent:[80,100], value:{ left:0, top:60 } }]]" />
                <img src={staticPath + "/assets/img/ep1/cut04/sub_02_coco_boni_over.png"} alt="" className="obj_position" style={{left:'0',bottom:'0'}} />
              </div>
              <img src={staticPath + "/assets/img/ep1/cut04/" + lang + "/text_02.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
            <div className="toon_panel" style={{width:'670px',height:'536px'}}>
              <img src={staticPath + "/assets/img/ep1/cut04/sub_03.jpg"} alt="" className="toon_bg" />
              <div className="toon_panel" data-scroll="[-700,200]" data-type="position" style={{left:'155px',top:'160px',width:'350px',height:'275px'}}>
                <img src={staticPath + "/assets/img/ep1/cut04/sub_03_music_01.png"} alt="" className="toon_obj obj_position obj_02" data-type="percent"
                  data-scroll="[0,50]" data-value="[{ left:0, top:76 }, [{ percent:[0,50], value:{ left:5, top:-3 } }, { percent:[50,100], value:{ left:4, top:-2 } }]]" />
                <img src={staticPath + "/assets/img/ep1/cut04/sub_03_music_02.png"} alt="" className="toon_obj obj_position obj_03" data-type="percent"
                  data-scroll="[0,100]" data-value="[{ left:19, top:64 }, [{ percent:[0,50], value:{ left:26, top:-12 } }, { percent:[50,100], value:{ left:21, top:-18 } }]]" />
                <img src={staticPath + "/assets/img/ep1/cut04/sub_03_music_03.png"} alt="" className="toon_obj obj_position obj_04" data-type="percent"
                  data-scroll="[0,200]" data-value="[{ left:30, top:56, rotate:-35 }, [{ percent:[0,50], value:{ left:67, top:-21, rotate:0 } }, { percent:[50,100], value:{ left:43, top:-30, rotate:30 } }]]" />
                <img src={staticPath + "/assets/img/ep1/cut04/sub_03_music_04.png"} alt="" className="toon_obj obj_position obj_05" data-type="percent"
                  data-scroll="[0,280]" data-value="[{ left:36, top:59, rotate:-48 }, [{ percent:[0,50], value:{ left:80, top:-30, rotate:10 } }, { percent:[50,100], value:{ left:82, top:-10, rotate:45 } }]]" />
                <img src={staticPath + "/assets/img/ep1/cut04/sub_03_music_05.png"} alt="" className="toon_obj obj_position obj_06" data-type="percent"
                  data-scroll="[0,300]" data-value="[{ left:45, top:60, rotate:-70 }, [{ percent:[0,50], value:{ left:76, top:-28, rotate:20 } }, { percent:[50,100], value:{ left:133, top:32, rotate:50 } }]]" />
                <img src={staticPath + "/assets/img/ep1/cut04/sub_03_midori_arms.png"} alt="" className="toon_obj obj_position obj_07" data-type="percent"
                  data-scroll="[0,300]" data-value="[{ left:89, top:113, rotate:-120 }, [{ percent:[0,50], value:{ left:45, top:0, rotate:60 } }, { percent:[50,100], value:{ left:80, top:19, rotate:60 } }]]" />
                <img src={staticPath + "/assets/img/ep1/cut04/sub_03_midori.png"} alt="" className="toon_obj obj_position obj_01" style={{left:'95px',top:'82px'}} />
              </div>
              <img src={staticPath + "/assets/img/ep1/cut04/" + lang + "/text_03.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
            <div className="toon_panel" style={{width:'670px',height:'750px'}}>
              <img src={staticPath + "/assets/img/ep1/cut04/sub_04.jpg"} alt="" className="toon_bg" />
            </div>
          </div>
          <div className="cut_05 cut_panel">
            <div className="toon_panel" data-scroll="[-500,0]" data-type="position" style={{width:'670px',height:'1896px'}}>
              <img src={staticPath + "/assets/img/ep1/cut05/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut05/sub_01_music_01.png"} alt="" className="toon_obj obj_position obj_01" data-scroll="[0,1000]" data-value="[{ left:0, top:0, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep1/cut05/sub_01_music_02.png"} alt="" className="toon_obj obj_position obj_02" data-scroll="[500,1500]" data-value="[{ left:0, top:0, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep1/cut05/sub_01_music_03.png"} alt="" className="toon_obj obj_position obj_03" data-scroll="[800,1800]" data-value="[{ left:0, top:0, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep1/cut05/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_06 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'2571px'}}>
              <img src={staticPath + "/assets/img/ep1/cut06/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut06/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_07 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'770px'}}>
              <img src={staticPath + "/assets/img/ep1/cut07/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut07/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'5px'}} />
            </div>
            <div className="toon_panel" data-scroll="[-500,200]" data-type="position" style={{width:'670px',height:'825px'}}>
              <img src={staticPath + "/assets/img/ep1/cut07/sub_02.jpg"} alt="" className="toon_bg" />
              <div className="toon_obj obj_position obj_repeat obj_01" data-value="[{ left:137, top:86 }, { left:145, top:88 }, { speed:70 }]">
                <img src={staticPath + "/assets/img/ep1/cut07/sub_01_shake.png"} alt="" className="obj_position" style={{left:'0',top:'0'}} />
                <img src={staticPath + "/assets/img/ep1/cut07/" + lang + "/text_02.png"} alt="" className="obj_position obj_lang" style={{left:'110px',top:'-61px'}} />
              </div>
            </div>
          </div>
          <div className="cut_08 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'1610px'}}>
              <img src={staticPath + "/assets/img/ep1/cut08/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut08/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'95px'}} />
            </div>
            <div className="toon_panel" data-scroll="[-1000,200]" data-type="position" style={{width:'670px',height:'337px'}}>
              <img src={staticPath + "/assets/img/ep1/cut08/sub_02.jpg"} alt="" className="toon_bg" />
              <div className="toon_obj obj_position obj_repeat obj_01" data-value="[{ left:32, top:22 }, { left:32, top:22 }, { speed:100, delay:100, total:300, repeat:true }]">
                <img src={staticPath + "/assets/img/ep1/cut08/sub_02_rain_01.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut08/sub_02_rain_02.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut08/sub_02_rain_03.png"} alt="" className="obj" />
              </div>
              <img src={staticPath + "/assets/img/ep1/cut08/" + lang + "/text_02.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'45px'}} />
            </div>
          </div>
          <div className="cut_09 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'486px'}}>
              <img src={staticPath + "/assets/img/ep1/cut09/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut09/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
            <div className="toon_panel" data-scroll="[-1000,200]" data-type="position" style={{width:'670px',height:'408px'}}>
              <img src={staticPath + "/assets/img/ep1/cut09/sub_02.jpg"} alt="" className="toon_bg" />
              <div className="toon_obj obj_position obj_repeat obj_01" data-value="[{ left:32, top:57 }, { left:32, top:57 }, { speed:80, delay:80, total:240, repeat:true }]">
                <img src={staticPath + "/assets/img/ep1/cut09/sub_02_rain_01.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut09/sub_02_rain_02.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut09/sub_02_rain_03.png"} alt="" className="obj" />
              </div>
              <img src={staticPath + "/assets/img/ep1/cut09/" + lang + "/text_02.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
            <div className="toon_panel" data-scroll="[-1000,200]" data-type="position" style={{width:'670px',height:'454px'}}>
              <img src={staticPath + "/assets/img/ep1/cut09/sub_03.jpg"} alt="" className="toon_bg" />
              <div className="toon_panel" data-scroll="[-1000,200]" data-type="position" style={{left:'330px',top:'105px',width:'289px',height:'160px',overflow:'hidden'}}>
                <div className="toon_obj obj_position obj_01" data-scroll="[200,700]" data-value="[{ left:0, top:0 }, { left:230 }]">
                  <div className="toon_obj obj_position obj_repeat obj_02" data-value="[{ left:0, top:0 }, { left:0, top:0 }, { speed:80, delay:80, total:320, repeat:true }]">
                    <img src={staticPath + "/assets/img/ep1/cut09/sub_03_animals_01.png"} alt="" className="obj" />
                    <img src={staticPath + "/assets/img/ep1/cut09/sub_03_animals_02.png"} alt="" className="obj" />
                    <img src={staticPath + "/assets/img/ep1/cut09/sub_03_animals_03.png"} alt="" className="obj" />
                    <img src={staticPath + "/assets/img/ep1/cut09/sub_03_animals_04.png"} alt="" className="obj" />
                  </div>
                </div>
              </div>
              <div className="toon_obj obj_position obj_repeat obj_03" data-value="[{ left:53, top:57 }, { left:53, top:57 }, { speed:80, delay:80, total:160, repeat:true }]">
                <img src={staticPath + "/assets/img/ep1/cut09/sub_03_rain_01.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut09/sub_03_rain_02.png"} alt="" className="obj" />
              </div>
            </div>
            <div className="toon_panel" style={{width:'670px',height:'500px'}}>
              <img src={staticPath + "/assets/img/ep1/cut09/sub_04.jpg"} alt="" className="toon_bg" />
            </div>
          </div>
          <div className="cut_10 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'970px'}}>
              <img src={staticPath + "/assets/img/ep1/cut10/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut10/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
            <div className="toon_panel" data-scroll="[-900,-1000]" data-type="scroll" style={{width:'670px',height:'1174px',overflow:'hidden'}}>
              <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_bg.jpg"} alt="" className="toon_bg obj_position" style={{left:'0',top:'-136px'}} />
              <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_sub_04.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:140 }, { left:0, top:-450 }]" />
              <div className="toon_obj obj_position" data-value="[{ left:0, top:435 }, { left:0, top:-162 }]">
                <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_sub_03.png"} alt="" className="obj_position" />
                <div className="toon_panel obj_position" data-scroll="[-1000,200]" data-type="position" style={{left:'0',top:'85px',width:'670px',height:'762px'}}>
                  <div className="toon_obj obj_position obj_repeat obj_01" data-value="[{ left:0, top:0 }, { left:0, top:0 }, { speed:80, delay:80, total:160, repeat:true }]">
                    <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_sub_02_01.png"} alt="" className="obj" />
                    <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_sub_02_02.png"} alt="" className="obj" />
                  </div>
                </div>
              </div>
              <div className="toon_panel obj_position" data-scroll="[-1000,200]" data-type="position" style={{left:'0',top:'46px',width:'670px',height:'1088px'}}>
                <div className="toon_obj obj_position obj_repeat obj_01" data-value="[{ left:0, top:0 }, { left:0, top:0 }, { speed:80, delay:80, total:240, repeat:true }]">
                  <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_rain_01.png"} alt="" className="obj" />
                  <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_rain_02.png"} alt="" className="obj" />
                  <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_rain_03.png"} alt="" className="obj" />
                </div>
              </div>
              <div className="toon_obj obj_position" data-value="[{ left:0, top:755 }, { left:0, top:230 }]">
                <div className="toon_panel obj_position" data-scroll="[-1000,200]" data-type="position" style={{left:'0',top:'0',width:'670px',height:'444px'}}>
                  <div className="toon_obj obj_position obj_repeat obj_01" data-value="[{ left:0, top:0 }, { left:0, top:0 }, { speed:80, delay:80, total:160, repeat:true }]">
                    <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_sub_01_01.png"} alt="" className="obj" />
                    <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_sub_01_02.png"} alt="" className="obj" />
                  </div>
                </div>
              </div>
              <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_light.png"} alt="" className="obj_position" style={{right:'5px',top:'-180px'}} />
            </div>
            <img src={staticPath + "/assets/img/ep1/cut10/scroll_02_frame.png"} alt="" className="obj_position" style={{left:'0',top:'968px',zIndex:'100'}} />
          </div>
          <div className="cut_11 cut_panel">
            <div className="toon_panel" data-scroll="[-1000,1000]" data-type="position" style={{width:'670px',height:'680px',overflow:'hidden'}}>
              <img src={staticPath + "/assets/img/ep1/cut11/sub_01_bg.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut11/sub_01_cloud_bg.png"} alt="" className="toon_obj obj_position obj_01" data-scroll="[300,700]" data-value="[{ left:0, top:0, opacity:1 }, { opacity:-1 }]" />
              <img src={staticPath + "/assets/img/ep1/cut11/sub_01_cloud_right.png"} alt="" className="toon_obj obj_position obj_02" data-scroll="[300,1400]" data-value="[{ left:0, top:0, opacity:1 }, { left:670, opacity:-1 }]" />
              <div className="toon_obj obj_position obj_repeat obj_03" data-value="[{ left:0, top:0 }, { left:0, top:0 }, { speed:80, delay:80, total:160, repeat:true }]">
                <img src={staticPath + "/assets/img/ep1/cut11/sub_01_rain_01.png"} alt="" className="obj" />
                <img src={staticPath + "/assets/img/ep1/cut11/sub_01_rain_02.png"} alt="" className="obj" />
              </div>
            </div>
            <img src={staticPath + "/assets/img/ep1/cut11/sub_01_frame.png"} alt="" className="obj_position" style={{left:'0',top:'-2px',zIndex:'100'}} />
            <div className="toon_panel" style={{width:'670px',height:'880px'}}>
              <img src={staticPath + "/assets/img/ep1/cut11/sub_02.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut11/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'5px'}} />
            </div>
            <div className="toon_panel" data-scroll="[-600,0]" data-type="position" style={{width:'670px',height:'320px'}}>
              <img src={staticPath + "/assets/img/ep1/cut11/sub_03_bg.jpg"} alt="" className="toon_bg" />
              <div className="toon_obj obj_position obj_01" data-scroll="[0,100]" data-value="[{ left:150, top:280, opacity:0 }, { left:-34, top:-195, opacity:1 }]">
                <div className="toon_panel" data-scroll="[-800,200]" data-type="animate" style={{overflow:'visible'}}>
                  <img src={staticPath + "/assets/img/ep1/cut11/sub_03_boni.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0 }, { value:[{ left:10 }, { left:0 }, { left:8 }, { left:0 }, { left:6 }, { left:0 }, { left:4 }, { left:0 }] }, { speed:100, delay:0, once:true }]" />
                </div>
              </div>
              <div className="toon_obj obj_position obj_02" data-scroll="[100,100]" data-value="[{ left:295, top:280, opacity:0 }, { top:-173, opacity:1 }]">
                <div className="toon_panel" data-scroll="[-700,200]" data-type="animate" style={{overflow:'visible'}}>
                  <img src={staticPath + "/assets/img/ep1/cut11/sub_03_coco.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0 }, { value:[{ left:10 }, { left:0 }, { left:8 }, { left:0 }, { left:6 }, { left:0 }, { left:4 }, { left:0 }] }, { speed:100, delay:0, once:true }]" />
                </div>
              </div>
              <div className="toon_obj obj_position obj_03" data-scroll="[300,10]" data-value="[{ left:480, top:94, opacity:0 }, { opacity:1 }]">
                <img src={staticPath + "/assets/img/ep1/cut11/sub_03_ovis.png"} alt="" />
              </div>
              <img src={staticPath + "/assets/img/ep1/cut11/sub_03_frame.png"} alt="" className="obj_position" style={{left:'-2px',top:'-2px'}} />
              <img src={staticPath + "/assets/img/ep1/cut11/" + lang + "/sub_03_boni_text.png"} alt="" className="toon_obj obj_position obj_04 obj_lang" data-scroll="[120,50]" data-value="[{ left:206, top:60, opacity:0 }, { opacity:1 }]" />
              <img src={staticPath + "/assets/img/ep1/cut11/" + lang + "/sub_03_coco_text.png"} alt="" className="toon_obj obj_position obj_05 obj_lang" data-scroll="[220,50]" data-value="[{ left:370, top:33, opacity:0 }, { opacity:1 }]" />
            </div>
          </div>
          <div className="cut_12 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'1896px'}}>
              <img src={staticPath + "/assets/img/ep1/cut12/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut12/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_13 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'1896px'}}>
              <img src={staticPath + "/assets/img/ep1/cut13/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut13/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_14 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'1250px'}}>
              <img src={staticPath + "/assets/img/ep1/cut14/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut14/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'-20px'}} />
            </div>
            <div className="toon_panel" data-scroll="[-750,200]" data-type="position" style={{width:'670px',height:'760px'}}>
              <img src={staticPath + "/assets/img/ep1/cut14/sub_02.jpg"} alt="" className="toon_bg" />
              <div className="toon_obj obj_position obj_01" data-scroll="[260,350]" data-value="[{ left:220, top:168, height:0 }, { height:243  }]" style={{width:'251px',overflow:'hidden'}}>
                <img src={staticPath + "/assets/img/ep1/cut14/sub_02_draw.png"} alt="" className="obj" />
              </div>
              <img src={staticPath + "/assets/img/ep1/cut14/sub_02_pencil.png"} alt="" className="toon_obj obj_position obj_02" data-type="percent" data-scroll="[300,300]" data-value="[{ left:320, top:35 }, [{ percent:[0,33], value:{ left:135, top:80 } }, { percent:[33,66], value:{ left:-200, top:80 } }, { percent:[66,100], value:{ left:150, top:50 } }]]" />
              <img src={staticPath + "/assets/img/ep1/cut14/" + lang + "/text_02.png"} alt="" className="toon_obj obj_position obj_03 obj_lang" data-scroll="[600,200]" data-value="[{ left:0, top:0, opacity:0 }, { opacity:1  }]" />
            </div>
          </div>
          <div className="cut_15 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'1070px'}}>
              <img src={staticPath + "/assets/img/ep1/cut15/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut15/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
            </div>
            <div className="toon_panel" data-scroll="[-200,400]" data-type="position" style={{width:'670px',height:'1137px'}}>
              <div className="toon_obj obj_position obj_01" data-scroll="[0,700]" data-value="[{ left:0, top:0 }, { top:500 }]">
                <img src={staticPath + "/assets/img/ep1/cut15/sub_02.jpg"} alt="" className="toon_bg" />
                <div className="toon_panel" data-scroll="[-800,600]" data-type="position" style={{left:'215px',top:'179px',width:'240px',height:'120px'}}>
                  <div className="toon_obj obj_position obj_repeat obj_02" data-value="[{ left:0, top:0 }, { left:0, top:0 }, { speed:120, delay:120, total:480, repeat:true }]">
                    <img src={staticPath + "/assets/img/ep1/cut15/sub_02_mouth_01.png"} alt="" className="obj" />
                    <img src={staticPath + "/assets/img/ep1/cut15/sub_02_mouth_02.png"} alt="" className="obj" />
                    <img src={staticPath + "/assets/img/ep1/cut15/sub_02_mouth_03.png"} alt="" className="obj" />
                    <img src={staticPath + "/assets/img/ep1/cut15/sub_02_mouth_02.png"} alt="" className="obj" />
                  </div>
                  <img src={staticPath + "/assets/img/ep1/cut15/sub_02_mouth_04.png"} alt="" className="toon_obj obj_position obj_03" data-scroll="[300,800]"
                    data-value="[{ left:0, top:0, opacity:1 }, { opacity:-1 }]" />
                </div>
                <img src={staticPath + "/assets/img/ep1/cut15/" + lang + "/text_02.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'-30px'}} />
              </div>
            </div>
            <div className="toon_panel" data-scroll="[-300,200]" data-type="position" style={{width:'670px',height:'916px'}}>
              <div className="toon_panel obj_position" data-scroll="[-470,200]" data-type="animate" style={{left:'0',top:'75px',width:'670px',height:'595px',overflow:'hidden'}}>
                <img src={staticPath + "/assets/img/ep1/cut15/sub_03_fx_01.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0, opacity:0 }, { value:[{ opacity:1 }, { opacity:0 }] }, { speed:80, delay:0, easing:'linear', once:true }]" />
                <img src={staticPath + "/assets/img/ep1/cut15/sub_03_fx_02.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0, opacity:0 }, { value:[{ opacity:0 }, { opacity:1 }, { opacity:0 }] }, { speed:80, delay:0, easing:'linear', once:true }]" />
                <img src={staticPath + "/assets/img/ep1/cut15/sub_03_fx_03.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0, opacity:0 }, { value:[{ opacity:0 }, { opacity:0 }, { opacity:1 }, { opacity:0 }] }, { speed:80, delay:0, easing:'linear', once:true }]" />
                <img src={staticPath + "/assets/img/ep1/cut15/sub_03_fx_04.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0, opacity:0 }, { value:[{ opacity:0 }, { opacity:0 }, { opacity:0 }, { opacity:1 }, { opacity:0 }] }, { speed:80, delay:0, easing:'linear', once:true }]" />
                <img src={staticPath + "/assets/img/ep1/cut15/sub_03_fx_05.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0, opacity:0 }, { value:[{ opacity:0 }, { opacity:0 }, { opacity:0 }, { opacity:0 }, { opacity:1 }, { opacity:0 }] }, { speed:80, delay:0, easing:'linear', once:true }]" />
                <img src={staticPath + "/assets/img/ep1/cut15/sub_03_fx_06.png"} alt="" className="toon_obj obj_position" data-value="[{ left:0, top:0, opacity:0 }, { value:[{ opacity:0 }, { opacity:0 }, { opacity:0 }, { opacity:0 }, { opacity:0 }, { opacity:1 }, { opacity:0 }] }, { speed:80, delay:0, easing:'linear', once:true }]" />
              </div>
              <div className="toon_panel obj_position" data-scroll="[-400,200]" data-type="animate" style={{left:'0',top:'0',width:'670px',height:'595px',overflow:'hidden'}}>
                <div className="toon_obj obj_position" data-value="[{ left:0, top:200 }, { value:[{ top:120 } , { top:40 }, { top:-20 }, { top:0 }] }, { speed:70, delay:0, easing:'linear', once:true }]" style={{left:'0',top:'200px'}}>
                  <img src={staticPath + "/assets/img/ep1/cut15/sub_03_all.png"} alt="" className="obj_position" style={{left:'0',top:'0'}} />
                  <img src={staticPath + "/assets/img/ep1/cut15/" + lang + "/text_03.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'-225px'}} />
                </div>
              </div>
              <img src={staticPath + "/assets/img/ep1/cut15/sub_03_midori_over.png"} alt="" className="obj_position" style={{left:'0',top:'0'}} />
            </div>
          </div>
          <div className="cut_16 cut_panel">
            <div className="toon_panel" style={{width:'670px',height:'1572px'}}>
              <img src={staticPath + "/assets/img/ep1/cut16/sub_01.jpg"} alt="" className="toon_bg" />
              <img src={staticPath + "/assets/img/ep1/cut16/" + lang + "/text_01.png"} alt="" className="obj_position obj_lang" style={{left:'0',top:'0'}} />
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
                {lang === "ja" ? "日本語" : lang === "ko" ? "한국어" : "English"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="footer_bottom" style={{height:'0px'}}></div>


        {/* <div id="popup_mask"></div>
        <div id="popup_menu">
          <a className="btn_close ga-event" data-category="button_click" data-event="menu_close" href="#">
            <img alt="close" className="icon" src={staticPath + "/assets/img/icon/popup_close.png"/>
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
                <img alt="" src={staticPath + "/assets/img/instagram_banner_en.png"/>
              </a>
            </div>
            <div className="insta_area">
              <a className="ga-event-link" data-category="button_click" data-event="banner_episode_list" href={"/?lang="+ lang}>
                <img alt="" src={staticPath + "/assets/img/banner_index_" + lang + ".jpg"} style={{width:'503px', marginTop:'28px'}}/>
              </a>
            </div>
          </div>
        </div>
        <div id="event_popup">
          <a className="btn_close" href="#">
            <img alt="close" className="icon" src={staticPath + "/assets/img/icon/popup_close.png"/>
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