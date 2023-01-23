import './App.css'
import MainDash from './Pages/MainDash/MainDash';
import RightSide from './Pages/RightSide/RightSide';
import Sidebar from './Shared/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar></Sidebar>
        <MainDash></MainDash>
        <RightSide></RightSide>
      </div>
       
    </div>
  );
}

export default App;
