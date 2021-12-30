import Link from 'next/link'

export default function ViewHeader({ staticPath, lang, languageIndex, musicPlay, musicOnClick, musicOffClick, post }) {
  return (
    <>
      {/* <div id="fb-root"></div> */}
      <nav className="cbp-spmenu cbp-spmenu-horizontal cbp-spmenu-top header-shadow cbp-spmenu-open" id="cbp-spmenu-s3">
        <div className="header-container">
          <div className="header-wrapper">
            <div className="header-logo"><img src={post.img.map((url) => { return url.src.split('/').reverse()[0] === 'icon.png' ? url.src : null }).join('')} alt="" /></div>
            <div className="head-title" style={{ float: "left" }}>
              <h6>{post.epNum}</h6>
              <h2>{post.languageItem[languageIndex].title}</h2>
            </div>
            <div className="menu">
              
              {/* <Link href="/episode" as={"/episode?lang=" + lang}>
                <a className="ga-event" data-category="button_click" data-event="menu_episode_list">
                  <img src={staticPath + "/assets/img/popup_menu_new.png"} alt="" />
                </a>
              </Link> */}
              <a className="ga-event" data-category="button_click" data-event="menu_episode_list" href={"/episode?lang=" + lang}>
                <img src={staticPath + "/assets/img/popup_menu_new.png"} alt="" />
              </a>

            </div>

            {post.epIndex === '04' || post.epIndex === '05' ?
            <div className="sound">
              <a href="#" id="btn_audio_play">
                {musicPlay === false ?
                  <img src={staticPath + "/assets/img/sound_on_new.png"} className="off ga-event" data-category="menu_music_button" data-event="on" alt="" onClick={musicOnClick} />
                  :
                  <img src={staticPath + "/assets/img/sound_off_new.png"} className="on ga-event" data-category="menu_music_button" data-event="off" alt="" onClick={musicOffClick} />
                }
              </a>
            </div>
            : null}

          </div>
        </div>
      </nav>
    </>
  )
}