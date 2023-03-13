import styles from '../css/Sidebar.module.css'
import Sidebarcontent from './Sidebarcontent';
import { FaHome } from "react-icons/fa";
import { SiBuzzfeed } from "react-icons/si";
import { ImFeed } from "react-icons/im";
import { CgFeed } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import { SiEventbrite } from "react-icons/si";
import { GiSelfLove } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { SiCloudbees } from "react-icons/si";
import { FaCircle } from 'react-icons/fa';
import { MdOutlineMenuOpen } from "react-icons/md";
import { RxAvatar }  from "react-icons/rx";


function Sidebar() {
  
  return (
    <div className= {styles.sidebar}>
      <div className= {styles.header}>
        <FaCircle size={10} className= {styles.circle1}/>
        <FaCircle size={10} className= {styles.circle2}/>
        <FaCircle size={10} className= {styles.circle3}/>
        <MdOutlineMenuOpen />
      </div>
      <div className= {styles.logo}>
        <SiCloudbees className={styles.icon} />
        <h3><span>Bee</span>Music</h3>
      </div>
      <Sidebarcontent Icon = {FaHome} title='Home' />
      <Sidebarcontent Icon = {SiBuzzfeed} title='Trends' />
      <Sidebarcontent Icon = {ImFeed} title='Feed' />
      <Sidebarcontent title='Discover' />
      <Sidebarcontent Icon = {CgFeed} title='New and Notable' />
      <Sidebarcontent Icon = {AiOutlineCalendar} title='Release Calendar' />
      <Sidebarcontent Icon = {SiEventbrite} title='Events' />
      <Sidebarcontent title='Your Collection' />
      <Sidebarcontent Icon = {GiSelfLove} title='Favourite Songs' />
      <Sidebarcontent Icon = {BsPersonFill} title='Artist' />
      <Sidebarcontent Icon = {FaRegStar} title='Albums' />
      <h4>Log Out</h4>
      <div className={styles.user}>
        <RxAvatar />
       <p>Ceptari Tyas<span> / </span></p> 
      </div>
    </div>
  );
}

export default Sidebar;