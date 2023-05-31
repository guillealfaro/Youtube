import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import SideNavbar from "./components/SideNavbar";
import "./App.scss";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <SideNavbar />
        <div className="hero">
          <Categories />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
