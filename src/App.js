import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import VideoBar from "./Components/VideoBar";
import { ReactLenis } from "lenis/react";
import ZoomContainer from "./Components/ZoomContainer/ZoomContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <ReactLenis root>
      <div className="App">
        <Header />
        <Intro />
        <Cards />
        <ZoomContainer />
        <VideoBar />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
