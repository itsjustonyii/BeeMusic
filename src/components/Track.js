import styles from '../css/Track.module.css'

function Track({ track, playSong }) {
  console.log(track);

  var minutes = Math.floor(track.duration_ms / 60000);
  var seconds = ((track.duration_ms % 60000) / 1000).toFixed(0);
  var trackTime = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  return (
    <div onClick={() => playSong(track.preview_url)} className={styles.track}>
        <div className={styles.p}>{track.track_number}</div>
        <div className={styles.p}>{track.name}</div>
        <div className={styles.p}>
          {track.artists.map((artist) => artist.name)}
        </div>
        <div className={styles.p}>{trackTime}</div>
        <div className={styles.p}>{track.album.name}</div>
      </div>
      
  );
}

export default Track;