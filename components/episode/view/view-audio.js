export default function ViewAudio({ mp3 }) {
  return (
    <div id="audio_area">
      <div className="audio_box">
        <audio id="audio" loop="loop" preload="auto">
          <source src={mp3} type="audio/mp3" />
        </audio>
      </div>
    </div>
  )
}