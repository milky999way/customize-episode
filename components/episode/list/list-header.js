export default function ListHeader({ staticPath, lang, langChange }) {
  return (
    <>
      <div className="header">
        <div className="header-shadow-main">
          <div className="select_box">
            <select id="changeLanguage" className="select_lang" value={lang} onChange={langChange}>
              <option value="ja">日本語</option>
              <option value="en">English</option>
              <option value="ko">한국어</option>
            </select>
          </div>
          <div className="page-logo">
            <div className="img-shadow"><img src={staticPath + "/assets/img/index_icon.png"} alt=""/></div>
          </div>
          <h1>{lang === 'ja' ? 'ポコパンのエピソード' : lang === 'ko' ? 'xxx 에피소드' : 'xxx Episodes'}</h1>
        </div>
      </div>
      <div className="page-header-clear"></div>
    </>
  )
}