import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import UserPatient from "./Pages/Patientpage/UserPatient";
import UserDoctor from "./Pages/doctorpage/UserDoctor";
import UserPharmacist from "./Pages/pharmacistpage/UserPharmacist";
import Messages from "./Pages/messagepage/Messages";
import Notifications from "./Pages/notificationpage/Notifications";

function App() {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <UserPatient/>
      <UserPharmacist/>
      <UserDoctor/>
      <Messages/>
      <Notifications/>
    </div>
  );
}

export default App;
