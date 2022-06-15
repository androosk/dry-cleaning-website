import Clothes from './assets/clothes.mp4';
import Navbar from './components/Navbar';
import WDF from './pages/WDF';
import OurServices from './pages/wedo';
import Locations from './pages/Locations'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<div><WDF /><OurServices /></div>}/>
            <Route exact path="/locations" element={<Locations />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            height: "100%",
            width: "100%",
            objectFit: "fill",
            zIndex: "-1"
          }}
        >
          <source src={Clothes} type="video/mp4" />
        </video>
      </Router>
  );
}

export default App;
