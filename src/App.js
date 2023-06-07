import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import SideNavbar from "./components/SideNavbar";
import "./App.scss";
import MainVideos from "./components/MainVideos";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <SideNavbar />
        <div className="hero">
          <Categories />
          <MainVideos />
        </div>
      </div>
    </div>
  );
}

export default App;
