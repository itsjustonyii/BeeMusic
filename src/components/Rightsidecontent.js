import styles from '../css/Rightsidecontent.module.css'

function Rightsidecontent({ img, artist, title, Icon }) {
  return (
    <div className={styles.cover}>
      <img src={img} alt='artist' className={styles.img} />
      <div className={styles.hold}>
        <h5 className={styles.h}>{artist}</h5>
        <p className={styles.p}>{title}</p>
      </div>
      <Icon />
    </div>
  );
}

export default Rightsidecontent;


