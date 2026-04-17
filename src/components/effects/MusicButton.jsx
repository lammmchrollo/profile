export default function MusicButton({ playing, onToggle }) {
  return (
    <div id="musibtn" title="Toggle ambient soundscape" className={playing ? 'play' : ''} onClick={onToggle}>
      {playing ? '♫' : '♪'}
    </div>
  );
}
