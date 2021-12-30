import Link from 'next/link';
import ViewStar from './view-star';

export default function ViewLastslideBanner({ staticPath, lang, languageIndex, isMobile, commentClick, inputRangeChange, post }) {
  return (
    <div className="swiper-slide">
      <div>
        <div style={{ direction: "ltr" }}>
          <div className="last-text" style={lang === 'ja' ? { wordBreak: "break-all", maxWidth: "500px", margin: "0 auto 30px" } : { wordBreak: "keep-all", maxWidth: "500px", margin: "0 auto 30px" }}>
            {post.languageItem[languageIndex].lastSlideBannerComment}
          </div>
          <ViewStar lang={lang} post={post} staticPath={staticPath} />
          <a className="ga-event" data-category="button_click" data-event="comment_open" href="#" onClick={commentClick}>
            <div className="reply-btn">{post.languageItem[languageIndex].lastSlideBannerButton}</div>
          </a>
          <div className="behind-img">
            {/* {post.languageItem[languageIndex].lastSlideBannerLink.substring(0, 8) === '/episode' ?
              <Link href="/episode/[...id]" as={post.languageItem[languageIndex].lastSlideBannerLink + "?lang=" + lang}>
                <a className="ga-event" data-category="button_click" data-event="banner_4cut_open" onClick={() => {inputRangeChange(1)}}>
                  <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'banner_'+lang+'.png' ? url.src : null }).join('')} alt="" style={{margin: "0 auto"}} className="post-next-path" />
                </a>
              </Link>
            :
              <a className="ga-event" data-category="button_click" data-event="banner_4cut_open" href={post.languageItem[languageIndex].lastSlideBannerLink} target="_blank" rel="noopener noreferrer">
                <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'banner_'+lang+'.png' ? url.src : null }).join('')} alt="" style={{margin: "0 auto"}} />
              </a>
            } */}

            {post.languageItem[languageIndex].lastSlideBannerLink.substring(0, 8) === '/episode' ?
              <a className="ga-event" data-category="button_click" data-event="banner_4cut_open" href={post.languageItem[languageIndex].lastSlideBannerLink}>
                <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'banner_'+lang+'.png' ? url.src : null }).join('')} alt="" className="bannerImg" />
              </a>
            :
              <a className="ga-event" data-category="button_click" data-event="banner_4cut_open" href={post.languageItem[languageIndex].lastSlideBannerLink} target="_blank" rel="noopener noreferrer">
                <img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'banner_'+lang+'.png' ? url.src : null }).join('')} alt="" className="bannerImg" />
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  )
}