import styles from '../css/Main.module.css'
import Footer from './Footer'
import { useStateValue } from "./StateProvider";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdSearch } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import Track from './Track'

function Main({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();
  
  const playSong = (preview_url) => {
    spotify
      .play({
        uris: [`spotify:track:${preview_url}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className= {styles.main}>
    <header>
      <AiOutlineArrowLeft />
      <AiOutlineArrowRight />
      <div className={styles.inputfield}>
        <MdSearch size={24} className={styles.icon1}/>
      <input type='text' placeholder='Search for artist songs and ..'></input>
      </div>
    </header>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <p className={styles.p}>What's hot</p>
      <AiFillFire className={styles.icon2} />
    </div>
    <div className={styles.align}>
     <h4>Trending</h4>
     <p className={styles.p}>More /</p>
    </div>
    <div className={styles.background}>
    <p className={styles.p}>Artist</p>
    <h2 className={styles.h}>On Top</h2>
    <h2 className={styles.h2}>Of The World</h2>
    <div className={styles.align2}>
      <button className={styles.btn1}>PLAY</button>
      <button className={styles.btn2}>FOLLOW</button>
      <p className={styles.color}>Monthly Listener</p>
    </div>
      <h3 className={styles.color2}>32.092</h3>
    </div>
    <div className={styles.align}>
     <h4>My Playlist</h4>
     <p className={styles.p}>Show All</p>
    </div>
    <div className={styles.lay}>
      <div className={styles.p2}>#</div>
      <div className={styles.p2}>TITLE</div>
      <div className={styles.p2}>ARTIST</div>
      <div className={styles.p2} >TIME</div>
      <div className={styles.p2}>ALBUM</div>
    </div>
    <div>
    {discover_weekly?.tracks.items.map((item) => (
          <Track playSong={playSong} track={item.track} />
        ))}
    </div>
    <Footer spotify={spotify} />
    </div>
  );
}

export default Main;
