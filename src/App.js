import './App.css';
import Description from './Components/Description/Description';
import Navbar from './Components/Navbar/Navbar';
// import SecondNavbar from './Components/SecondNavbar/Secondnavbar';

function App() {
  return (
    <div className="App">

      <Navbar />    
      {/* <SecondNavbar /> */}
      <Description />
    </div>
  );
}

export default App;