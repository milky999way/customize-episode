import React, { useState, useEffect } from 'react';

export default function ViewComment({ staticPath, urlPath, lang, commentHide, commentCloseClick }) {
  const showStyle = {display: 'block'}
  const hideStyle = {display: 'none'}
  // 페이스북 댓글을 위한 프로토콜 세팅
  const fb_urlPath = urlPath ? urlPath.replace('https', 'http') : '';

  return (
    <div className="comment banner_content" style={commentHide === true ? hideStyle : showStyle}>
      <div className="contents">
        <div className="header">
          <a className="btn_close ga-event" data-category="button_click" data-event="comment_close" href="#" onClick={commentCloseClick}><img src={staticPath + "/assets/img/popup_close_white_new.png"} alt="close" className="icon" /></a>
        </div>
        <div id="comment" className="list">
          <div className="facebook_comment">
            <div className="fb-comments" data-href={fb_urlPath + '/final/?lang=' + lang} data-width="100%" data-numposts="5" order_by="reverse_time">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}