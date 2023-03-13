import styles from '../css/Sidebarcontent.module.css'

function Sidebarcontent({ Icon, title}) {
  return (
    <div className= {styles.content}>
      {Icon && <Icon className= {styles.icon}/>}
      {Icon ? <p className= {styles.p} >{title}</p> : <h4 className= {styles.h} >{title}</h4>}
    </div>
  );
}

export default Sidebarcontent;
