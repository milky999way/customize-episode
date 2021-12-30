import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';

export default function ViewStar({ staticPath, lang, post }) {
  const [starFeedback, setStarFeedback] = useState(false);
  const [starValue, setStarValue] = useState(0);

  const confirmPopupOpen = (star) => {
    document.querySelector('.feedbackConfirm').classList.add('on');
    setStarValue(star)
  }
  const confirmPopupClose = () => {
    document.querySelector('.feedbackConfirm').classList.remove('on');
  }
  const confirmStar = () => {
    fetch('/episode/api/starFeedback', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        params: {
          userUrl: post.link,
          userStar: starValue
        }
      }) 
    }).then(response => {
      // console.log(response);
      setStarFeedback(true);
      document.querySelector('.feedbackConfirm').classList.remove('on');
    });
  }

  useEffect(() => {
    if(document.cookie === '') {
      setStarFeedback(false);
    } else {
      const checkCookiePath = post.link.split('?')[0].replace(/\//gi, "_");
      const getCookie = function(name) {
        const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value ? value[2] : null;
      };
      const checkCookie = getCookie(checkCookiePath);
      if(checkCookie !== null && checkCookie === 'checked') {
        setStarFeedback(true);
      } else {
        setStarFeedback(false);
      }
    }
  })

  return (
    <>
      <div className="feedback">
        {starFeedback === false ?
        <div>
          <Rating
            emptySymbol={<img src={staticPath + "/assets/img/star-empty.png"} className="icon_star" />}
            fullSymbol={<img src={staticPath + "/assets/img/star-full.png"} className="icon_star" />}
            initialRating={starValue}
            onClick={confirmPopupOpen}
          />
        </div>
        :
        null}
      </div>

      <div className="feedbackConfirm">
        <Rating
          emptySymbol={<img src={staticPath + "/assets/img/star-empty.png"} className="icon_star" />}
          fullSymbol={<img src={staticPath + "/assets/img/star-full.png"} className="icon_star" />}
          readonly
          initialRating={starValue}
          // ref={this.rating}
        />
        <p>{lang === 'ja' ? 'このまま登録しますか?' : lang === 'ko' ? '이대로 제출하시겠습니까?' : 'Do you want to submit this rating?'}</p>
        <div className="btn_feedback_confirm">
          <button className="btn_confirm" onClick={confirmStar}>{lang === 'ja' ? 'はい' : lang === 'ko' ? '네' : 'Yes'}</button>
          <button className="btn_confirm" onClick={confirmPopupClose}>{lang === 'ja' ? 'いいえ' : lang === 'ko' ? '아니오' : 'No'}</button>
        </div>
      </div>
    </>
  )
}