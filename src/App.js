import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo/Logo";
import Hero from "./components/Hero/Hero";
// import Banner from "./components/Banner/Banner";
import Desc from "./components/Desc/Desc";
import Card from "./components/Card/Card";
import Project from "./components/Projects/Project";

function App() {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <Hero />
      {/* <Banner /> */}
      <Desc />
      {/* <Project /> */}
      <Card />
    </div>
  );
}

export default App;
