import Sidebar from './Sidebar'
import Main from './Main'
import Rightside from './RightSide'
import dasboard from '../css/Dashboard.module.css'


function Dashboard({ spotify }) {
  return (
    <div className={dasboard.dashboard}>
    <Sidebar spotify={spotify} />
    <Main spotify={spotify} />
    <Rightside spotify={spotify} />
    </div>
  );
}

export default Dashboard;
