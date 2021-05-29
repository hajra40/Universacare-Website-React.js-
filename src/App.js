
import './App.css';
import NotificationBar from './components/NotificationBar/NotificationBar';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import Services from './components/Services/Services';
import Credits from './components/credits/Credits';
import Images from './components/appointment/Images';
import Request from './components/appointment/Request';


function App() {
  return (
    <div>
      <NotificationBar />
      <Navbar />
      <Home />
      <Location />
      <Services />
      <Credits />
      <Images />
      <Request />
    </div>
  );
}

export default App;
