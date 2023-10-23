import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import UserPatient from "./Pages/UserPatient";

function App() {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <UserPatient/>
    </div>
  );
}

export default App;
