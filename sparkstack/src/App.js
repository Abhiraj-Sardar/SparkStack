import './App.css';
// import Stay from "./components/Stay";
import Dashboard from './Admin/Dashboard/Dashboard';

import AI from './Admin/Dashboard/AI';
import Sidebar from './Admin/Dashboard/Sidebar';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<Sidebar />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
