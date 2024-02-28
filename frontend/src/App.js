
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Home"
import { Patient_Diabetes_data } from './Patient_Diabetes_data';
import { Patient_Heart_data } from './Patient_Heart_data';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route path="/patient_Diabetes_data" element={<Patient_Diabetes_data />} />
          <Route path="/patient_Heart_data" element={<Patient_Heart_data />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
