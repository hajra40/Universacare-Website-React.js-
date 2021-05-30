
import './App.css';
import NotificationBar from './components/NotificationBar/NotificationBar';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import Services from './components/Services/Services';
import Credits from './components/credits/Credits';
import Request from './components/appointment/Request';
import Ratings from './components/Ratings/Ratings';
import Working from './components/Working/Working';
import Footer from './components/footer/footer';
import Copy from './components/copyryts/Copy';


function App() {
  return (
    <div>
      <NotificationBar />
      <Navbar />
      <Home />
      <Location />
      <Services />
      <Working />
      <Credits />
      <Request />
      <Ratings />
      <Footer />
      <Copy />
    </div>
  );
}

export default App;
