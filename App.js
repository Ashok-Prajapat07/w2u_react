import logo from './logo.svg';
import './App.css';
import Footer from './Components/Index/Footer';
import WeddingAgents from './Components/Index/Wedding_Agents';
import MeetOurGuides from './Components/Index/Meet_Our_Guides';
import BloggersAndInfulencers from './Components/Index/Bloggers&Influencers';
import OurBlog from './Components/Index/OurBlog';
import TraddingInUdaipur from './Components/Index/TraddingInUdaipur';
import Advertisement from './Components/Index/Advertisement';
import Header from './Components/Index/Header';
import Slider from './Components/Index/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      {/* <Advertisement/> */}
      <TraddingInUdaipur/>
      <OurBlog/>
      <BloggersAndInfulencers/>
      <MeetOurGuides/>
      <WeddingAgents/>
      <Footer/>
    </div>
  );
}

export default App;
