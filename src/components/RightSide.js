import styles from '../css/RightSide.module.css'
import Rightsidecontent from './Rightsidecontent'
import { MdSevereCold } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { GiGuitar } from "react-icons/gi";
import { FiMusic } from "react-icons/fi";
import { MdPiano } from "react-icons/md";
import { GiTrumpet } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";


function RightSide() {
  return (
    <div className= {styles.rightside}>
    <h4 className={styles.short}>Shortcuts</h4>
    <div  className={styles.align}>
      <div className={styles.short1}>
        <MdSevereCold className={styles.icon1} />
        <p className={styles.p}>Chill Hits</p>
      </div>
      <div className={styles.short2}>
      <FaRegStar className={styles.icon2} />
        <p className={styles.p}>Hop</p>
      </div>
      <div className={styles.short1}>
      <GiGuitar className={styles.icon3} />
        <p className={styles.p}>Accoustic</p>
      </div>
      <div className={styles.short1}>
      <FiMusic />
        <p className={styles.p}>India Pop</p>
      </div>
      <div className={styles.short1}>
      <MdPiano />
        <p className={styles.p}>Piano Blues</p>
      </div>
      <div className={styles.short2}>
      <GiTrumpet className={styles.icon2} />
        <p className={styles.p}>Jazz</p>
      </div>
    </div>
    <h4 className= {styles.fav}>Fav Artist</h4>
    <Rightsidecontent img= './Images/female3.jpg' artist= 'Taylor Swift' title= '196 songs in library' Icon={BsThreeDots} />
    <Rightsidecontent img= './Images/male2.jpg' artist= 'Kanye West' title= '124 songs in library' Icon={BsThreeDots} />
    <Rightsidecontent img= './Images/male6.jpg' artist= 'Drake' title= '50 songs in library' Icon={BsThreeDots} />
    <Rightsidecontent img= './Images/female5.jpg' artist= 'Billie Eilish' title= '15 songs in library' Icon={BsThreeDots} />
    <div className={styles.cover}>
      <img src='./Images/new.jpg' alt='artist' className={styles.pics}/>
      <div className={styles.adjust}>
        <div>
          <h5 className={styles.h}>Torisetsu</h5>
          <p className={styles.t}>Kana Nishino</p>
        </div>
        <CgAddR className={styles.hold}/>
      </div>
    </div>
    </div>
  );
}

export default RightSide;
