import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import UserPatient from "./Pages/Patientpage/UserPatient";
import UserDoctor from "./Pages/doctorpage/UserDoctor";
import UserPharmacist from "./Pages/pharmacistpage/UserPharmacist";

function App() {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <UserPatient/>
      <UserPharmacist/>
      <UserDoctor/>
    </div>
  );
}

export default App;
