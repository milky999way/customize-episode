import React, { useState, useEffect, useRef, useCallback } from 'react';
import Swiper from 'react-id-swiper';

import ViewLastslideBanner from './view-lastslide-banner';
import ViewLastslideGame from './view-lastslide-game';


export default function ViewContainer({ staticPath, lang, languageIndex, params, slideValue, isMobile, commentClick, inputRangeChange, post }) {
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current.swiper.slideTo(slideValue-1);
  })

  // console.log(post.lastSlide)
  return (
    <div className="container">
      <div className="start_cover" id="start_cover">
        <div className="content">
          <div className="loading"></div>
          <div className="guide"><img src={staticPath + "/assets/img/icon_swipe_left.png"} className="left" alt="" />
            <span className="leftTxt">{lang === 'ja' ? '進む' : lang === 'ko' ? '다음' : 'Next'}</span>
          </div>
        </div>
      </div>
      <div id="notice_first_last">
        <div className="content"></div>
      </div>
      <div className="cbp-spmenu-push">

        <Swiper {...params} ref={swiperRef}>
          {post.languageItem[languageIndex].img.map((url, i) => {
            return (
              <div key={i}>
                <div className="swiper-zoom-container"><img src={url.src} alt="" /></div>
              </div>
            )
          })}

          {post.lastSlide === 'banner' ?
            <ViewLastslideBanner lang={lang} languageIndex={languageIndex} isMobile={isMobile} commentClick={commentClick} inputRangeChange={inputRangeChange} post={post} staticPath={staticPath} />
          :
            <ViewLastslideGame lang={lang} languageIndex={languageIndex} isMobile={isMobile} commentClick={commentClick} post={post} staticPath={staticPath} />
          }

        </Swiper>

      </div>
    </div>
  )
}