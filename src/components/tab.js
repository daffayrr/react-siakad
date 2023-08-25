import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dashboard from '../pages/Dashboard';
import Jadwal from '../pages/Jadwal';
import Penilaian from '../pages/Penilaian';

function TabMenu() {
    return (
      <Tabs
        defaultActiveKey="dashboard"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="dashboard" title="Dashboard">
          <Dashboard />
        </Tab>
        <Tab eventKey="jadwal" title="Jadwal">
          <Jadwal />
        </Tab>
        <Tab eventKey="penilaian" title="Penilaian">
          <Penilaian />
        </Tab>
      </Tabs>
    );
  }
  
  export default TabMenu;