import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Header/Navbar';
import Card from "./components/Accessories/Card"
import JobPortal from './components/TechnicalJobs/JobPortal';
import WikiPedia from './components/Wikipedia/WikiPedia';
// import Stay from "./components/Stay";
// import Dashboard from './Admin/Dashboard/Dashboard';

function App() {
  return (
      <div className="App">
        <JobPortal />
        {/* <Navbar/>
        <Card/>
        <Footer/> */}
        {/* <WikiPedia/> */}
      </div>
  );
}

export default App;
