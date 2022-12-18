import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Promo from './components/Promo';
import Cards from './components/Cards';
import FollowLinks from './components/FollowLinks';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <Navbar />
      <Slider/>
      <Promo/>
      <Cards/>
      <FollowLinks/>
      <BackToTop/>
      <Footer/>
      {/* <div>
      <details>
          <summary>Click me to see the answer!</summary>
          <p>my name is puneet</p>
        </details>
      </div> */}
    </div>
    </>
  );
}

export default App
