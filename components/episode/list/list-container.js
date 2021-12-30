import Link from 'next/link'

export default function ListContainer({ staticPath, lang, languageIndex, posts }) {
  return (
    <>
      <div className="content-section">
        <div className="top-issue">
          <div className="main-title-1">
            {lang === 'ja' ? '最新エピソード' : lang === 'ko' ? '최신 에피소드' : 'The Latest Episode'}
          </div>
          <div className="responsive-image">

            {/* <Link href="/episode/[...id]" as={posts[0].link + "?lang=" + lang}>
              <a className="ga-event" data-category="episode_banner" data-event={posts[0].dataEvt}>
                <img src={posts[0].img.map((url) => { return url.src.split('/').reverse()[0] === 'thumbnail.png' ? url.src : null }).join('')} alt="" />
              </a>
            </Link> */}
            <a className="ga-event" data-category="episode_banner" data-event={posts[0].dataEvt} href={posts[0].link + "?lang=" + lang}>
              <img src={posts[0].img.map((url) => { return url.src.split('/').reverse()[0] === 'thumbnail.png' ? url.src : null }).join('')} alt="" />
            </a>
            
          </div>
          <div className="text-area">
            <p className="left-text">{posts[0].languageItem[languageIndex].subtitle}</p>
            <h1 className="left-text">{posts[0].languageItem[languageIndex].title}</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="main-body">
          <div className="content">
            <div className="main-title-2">{lang === 'ja' ? '他のエピソード' : lang === 'ko' ? '다른 에피소드 보기' : 'Other Episodes'}</div>
            <div className="main-container">

              {posts.map((post, i) => (
                i !== 0 ?
                <div className={i % 2 !== 1 ? "portfolio-item-thumb one-half last-column" : "portfolio-item-thumb one-half"} key={i}>

                  {/* {post.link === '/episode/1' || post.link === '/episode/2' || post.link === '/episode/3' ?
                    <a href={post.link + "?lang=" + lang} className="ga-event" data-category="episode_banner" data-event={post.dataEvt}>
                      <img alt="" className="responsive-image" src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'thumbnail.png' ? url.src : null }).join('')} />
                    </a>
                  :
                    <Link href="/episode/[...id]" as={post.link + "?lang=" + lang}>
                      <a className="ga-event" data-category="episode_banner" data-event={post.dataEvt}>
                        <img alt="" className="responsive-image" src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'thumbnail.png' ? url.src : null }).join('')} />
                      </a>
                    </Link>
                  } */}

                  <a className="ga-event" data-category="episode_banner" data-event={post.dataEvt} href={post.link + "?lang=" + lang}>
                    <img alt="" className="responsive-image" src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'thumbnail.png' ? url.src : null }).join('')} />
                  </a>
                  
                  <div className="item-text-padding">
                    <div className="episode-subtitle">
                      {post.languageItem[languageIndex].subtitle}
                    </div>
                    <div className="episode-title">
                      {post.languageItem[languageIndex].title}
                    </div>
                  </div>
                </div>
                : null
              ))}

            </div>
          </div>
        </div>
      </div>
      <div className="main-body-2">
        <div className="content">
          <div className="main-title-3">{lang === 'ja' ? 'ポコタと仲間の最新ニュース' : lang === 'ko' ? 'xxx와 친구들 최근 소식' : 'The latest news of Pokota and Friends!'}</div>
          <div className="no-bottom">
            <div className="portfolio-item-thumb one-third">
              <a className="ga-event" data-category="sns_banner" data-event="facebook" href="https://www.facebook.com/xxx.info" target="_blank" rel="noopener noreferrer"><img alt="" className="sns-image" src={staticPath + "/assets/img/socialmedia_03.jpg"} /></a>
            </div>
            <div className="portfolio-item-thumb one-third">
              <a className="ga-event" data-category="sns_banner" data-event="instagram" href="https://www.instagram.com/xxx.info" target="_blank" rel="noopener noreferrer"><img alt="" className="sns-image" src={staticPath + "/assets/img/socialmedia_05.jpg"} /></a>
            </div>
            <div className="portfolio-item-thumb one-third last-column">
              <a className="ga-event" data-category="sns_banner" data-event="twitter" href="https://twitter.com/xxx_info" target="_blank" rel="noopener noreferrer"><img alt="" className="sns-image" src={staticPath + "/assets/img/socialmedia_07.jpg"} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}