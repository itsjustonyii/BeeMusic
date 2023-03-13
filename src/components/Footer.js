import React, { useState, useEffect } from 'react';
import { useStateValue } from "./StateProvider";
import styles from '../css/Footer.module.css';
import { GiSelfLove } from "react-icons/gi";
import { FiMusic } from "react-icons/fi";
import { AiFillFastBackward, AiFillFastForward, AiOutlineArrowsAlt } from "react-icons/ai";
import { BsRepeat } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";
import { CiShuffle } from "react-icons/ci";
import { RxSlider } from "react-icons/rx";
import { CiVolumeHigh } from "react-icons/ci";

function Footer({ spotify }) {
const [{ playing }, dispatch] = useStateValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
    console.log(r);
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };
  return (
    <div className={styles.footer}>
    <div className={styles.player}>
      <div>
      <GiSelfLove className={styles.icon1} />
      <FiMusic className={styles.icon1}/>
      <AiOutlineArrowsAlt className={styles.icon1}/>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
      <BsRepeat className={styles.icon}/>
      <AiFillFastBackward className={styles.icon} />
      {playing?
      <AiFillPauseCircle className={styles.icon} size={30} onClick=
      {handlePlayPause} />:
      <AiFillPlayCircle className={styles.icon} size={30} onClick=
      {handlePlayPause} />
};
      <AiFillFastForward className={styles.icon}/>
      <CiShuffle className={styles.icon}/>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <CiVolumeHigh className={styles.icon}/>
        <RxSlider className={styles.icon} size={50} />
        <CiVolumeHigh className={styles.icon}/>
      </div>
    </div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p className={styles.p}>2:10</p>
        <div className={styles.slider}></div>
        <p className={styles.p}>2:59</p>
      </div>
    </div>
  );
}

export default Footer;
