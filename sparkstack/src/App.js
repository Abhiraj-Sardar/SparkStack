import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Header/Navbar';
import Card from "./components/Accessories/Card"
// import JobPortal from './components/TechnicalJobs/JobPortal';
// import Stay from "./components/Stay";
// import Dashboard from './Admin/Dashboard/Dashboard';

function App() {
  return (
      <div className="App">
        {/* <JobPortal /> */}
        <Navbar/>
        <Card/>
        <Footer/>
      </div>
  );
}

export default App;
